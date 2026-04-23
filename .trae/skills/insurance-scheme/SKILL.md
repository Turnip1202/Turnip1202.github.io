---
name: insurance-scheme
description: 专门用于处理“参保方案管理”相关业务逻辑、代码维护及数据排查的技能。当用户要求（1）修改社保或公积金方案的 SQL 优先级逻辑、（2）处理“客户优先”原则相关的业务冲突、（3）排查 SaaS 与独立部署端的数据同步问题、（4）维护方案主表与租户引用表的关系时，应触发此技能。
---

# Insurance Scheme (参保方案管理)

## 0. 核心决策树 (Workflow Decision Tree)

处理参保方案任务时，请按以下路径判断：

1.  **修改查询逻辑？**
    *   重点关注 `PolicySocialProductMapper.xml` 和 `PolicyAccfundProductMapper.xml`。
    *   必须遵循 **“客户优先原则”**：使用 `CASE WHEN EXISTS` 动态压制平台方案状态。
    *   必须正确处理 `is_active`：平台方案用 `COALESCE`，客户方案用 `p.is_active`。
2.  **修改方案设置/更新逻辑？**
    *   重点关注 `PolicySocialServiceImpl` 和 `PolicyAccfundServiceImpl`。
    *   涉及通用方案变更时，必须调用 **“物理降级逻辑”** (`demoteOther...GeneralForCity`)。
3.  **处理跨系统同步或定时任务？**
    *   **下发逻辑**：无论是否通用，管理侧下发后均需写入租户引用表。
    *   **同步逻辑**：独立部署侧同步时必须使用 `upsert...ForSync` 方法，避免依赖 `SecurityContext`。
    *   **编辑人**：使用下发方案传递过来的 `latestEditor`，不要硬编码 "system"。

## 1. 业务准则 (Business Rules)

详细的业务逻辑、数据模型及同步机制，请查阅：
- [business_rules.md](references/business_rules.md)

**核心要点：**
- **租户隔离**：通过 `cust_id` 区分。
- **引用覆盖**：租户修改平台方案时，数据落入 `*_product_tenant` 表。
- **无条件生成**：下发/同步时即生成引用记录，不限于通用方案。

## 2. 代码导航 (Code Mapping)

快速定位文件、方法及排查路径，请查阅：
- [code_mapping.md](references/code_mapping.md)

**常用入口：**
- `AdminInsuranceSchemeController`: 管理端接口。
- `CustomerInsuranceSchemeController`: 租户端接口。
- `PolicySocialServiceImpl`: 社保核心服务 (SaaS & Standalone)。

## 3. 排查指南 (Troubleshooting)

若遇到方案展示不一致或同步失效，请执行以下步骤：
1.  **检查数据库状态**：核实 `rpa_robot_uat` (核心) 与 `rpa_client` (本地) 数据，重点关注 `cust_id` 和引用表覆盖。
2.  **验证指令流转**：核查 `robot_customer_command` 指令状态及参数。
3.  **核实 Mapper 优先级**：检查 SQL 中是否正确实现了动态压制逻辑和 `is_active` 过滤。
