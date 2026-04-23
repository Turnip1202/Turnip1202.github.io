# 参保方案管理业务规则

## 1. 核心逻辑：客户优先原则 (Customer Priority)

### 1.1 冲突定义
当同一参保地（address_id）存在多个通用方案时，系统必须决定展示哪一个。
- **平台方案**：`cust_id = 0`，由运维后台下发。
- **租户方案**：`cust_id > 0`，由具体客户（租户）自建。

### 1.2 解决规则
1. **租户未设置**：默认展示平台下发的通用方案。
2. **租户已设置**：如果租户自建了该城市的通用方案，则**查询结果必须以租户方案为准**。
3. **展示层动态压制**：在查询列表中，即便平台方案在数据库中 `is_general = 1`，如果存在同城租户通用方案，返回给前端的平台方案 `is_general` 必须强制设为 `0`。

### 1.3 技术实现
- **SQL 逻辑**：Mapper 文件中使用 `CASE WHEN EXISTS` 实时检测租户自建方案。
- **物理降级**：Service 层在设置新通用方案时，会物理更新该城市下该租户的其他所有方案为“非通用”。

## 2. 数据存储结构

### 2.1 方案主表 (ft_policy_social_product / ft_policy_accfund_product)
- `cust_id`：隔离标志。0 为平台，>0 为客户。
- `source_type`：来源。平台侧（1:导入九焱, 2:自建）；客户侧（1:平台方案, 2:自建）。
- `publish_status`：下发状态。仅平台方案（cust_id=0）有效。

### 2.2 租户引用表 (ft_policy_social_product_tenant / ft_policy_accfund_product_tenant)
- **自动生成逻辑**：无论平台方案是否通用，管理侧下发（SaaS）或独立部署侧同步（Standalone）后，都必须在引用表中为租户生成/更新一条记录。
- **字段引用**：当客户修改平台方案的名称、生效时间、通用标记或状态时，数据存入此表。
- **查询合并**：通过 `LEFT JOIN` 主表与此表，使用 `COALESCE(tenant.field, main.field)` 获取最终值。
- **状态过滤**：
    - 平台方案（`cust_id=0`）：使用 `COALESCE(t.is_active, p.is_active)` 过滤。
    - 客户方案（`cust_id>0`）：直接使用 `p.is_active` 过滤。

## 3. 跨系统同步机制

### 3.1 同步链路
SaaS (rpa-saas) -> 指令库 (rpa_robot_uat) -> 独立部署端 (rpa-standalone)

### 3.2 关键指令：policySchemeSync
- **触发点**：平台方案发布或更新时。
- **指令存储**：核心库 `rpa_robot_uat` 中的 `robot_customer_command` 表。
- **数据流**：SaaS 写入指令 -> Standalone 轮询并执行同步 -> 本地库 `rpa_client` 落位。

## 4. 常见校验规则
- **通用方案禁止禁用**：`is_general = 1` 的方案状态必须为“启用”。
- **通用方案禁止绑定公司**：通用方案作为该城市的默认规则，不针对特定申报账户。
- **取消通用需指定替代**：设置一个方案为非通用时，必须同时通过 `targetGeneralId` 指定另一个方案为通用。
- **同步任务安全性**：定时同步任务必须使用专用 upsert 方法（如 `upsertSocialTenantForSync`），避免依赖 `SecurityContext` 导致空指针。
