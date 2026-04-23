# 参保方案代码定位与排查指南

## 1. 核心文件导航

### 1.1 控制层 (Controller)
- **管理端 (SaaS Admin)**: [AdminInsuranceSchemeController](file:///d:/ACode/shitong/gitea/dev/rpa/rpa-saas/src/main/java/com/seebon/rpa/fronted/controller/insurance/AdminInsuranceSchemeController.java)
- **租户端 (SaaS Customer)**: [CustomerInsuranceSchemeController](file:///d:/ACode/shitong/gitea/dev/rpa/rpa-saas/src/main/java/com/seebon/rpa/fronted/controller/insurance/CustomerInsuranceSchemeController.java)
- **通用入口**: [CommInsuranceSchemeController](file:///d:/ACode/shitong/gitea/dev/rpa/rpa-saas/src/main/java/com/seebon/rpa/fronted/controller/insurance/CommInsuranceSchemeController.java)

### 1.2 业务层 (Service)
- **社保核心逻辑**: 
    - SaaS: [PolicySocialServiceImpl](file:///d:/ACode/shitong/gitea/dev/rpa/rpa-saas/src/main/java/com/seebon/rpa/service/insurance/impl/PolicySocialServiceImpl.java)
    - Standalone: [PolicySocialServiceImpl](file:///d:/ACode/shitong/gitea/dev/rpa/rpa-standalone/rpa-client-api/src/main/java/com/seebon/rpa/service/insurance/impl/PolicySocialServiceImpl.java)
- **公积金核心逻辑**: 
    - SaaS: [PolicyAccfundServiceImpl](file:///d:/ACode/shitong/gitea/dev/rpa/rpa-saas/src/main/java/com/seebon/rpa/service/insurance/impl/PolicyAccfundServiceImpl.java)
    - Standalone: [PolicyAccfundServiceImpl](file:///d:/ACode/shitong/gitea/dev/rpa/rpa-standalone/rpa-client-api/src/main/java/com/seebon/rpa/service/insurance/impl/PolicyAccfundServiceImpl.java)

### 1.3 持久层 (Mapper)
- **社保查询与优先级 SQL**: [PolicySocialProductMapper.xml](file:///d:/ACode/shitong/gitea/dev/rpa/rpa-saas/src/main/resources/mapper/insurance/PolicySocialProductMapper.xml)
- **公积金查询与优先级 SQL**: [PolicyAccfundProductMapper.xml](file:///d:/ACode/shitong/gitea/dev/rpa/rpa-saas/src/main/resources/mapper/insurance/PolicyAccfundProductMapper.xml)

## 2. 关键业务代码段

### 2.1 物理降级逻辑 (Demote)
在设置通用方案时，确保租户内该城市的其他方案被取消通用：
- `PolicySocialServiceImpl.demoteOtherSocialGeneralForCity`
- `PolicyAccfundServiceImpl.demoteOtherAccfundGeneralForCity`

### 2.2 租户引用处理 (Tenant Override)
- **核心管理器**: [InsuranceSchemeTenantOverrideManager](file:///d:/ACode/shitong/gitea/dev/rpa/rpa-standalone/rpa-client-api/src/main/java/com/seebon/rpa/service/insurance/support/InsuranceSchemeTenantOverrideManager.java)
- **标准方法**: `upsertSocialTenant`, `upsertAccfundTenant` (依赖 SecurityContext)
- **同步/定时任务专用**: `upsertSocialTenantForSync`, `upsertAccfundTenantForSync` (需显式传入编辑人)

### 2.3 跨系统同步推送
- SaaS 侧推送: `SyncSchemeService.pushPlatformSocialSchemeSync`
- Standalone 侧接收: `PolicySocialServiceImpl.syncPlatformSocialScheme`

## 3. 常见排查路径

### 3.1 方案通用状态或显示不符合预期
1. 检查 SQL Mapper 中的 `CASE WHEN EXISTS` 逻辑，确认是否有同城租户自建通用方案。
2. 检查 SQL 中的 `is_active` 过滤逻辑，确认是否使用了 `CASE` 区分平台与客户方案。
3. 检查 `*_product_tenant` 表中是否存在针对该平台方案的引用配置。

### 3.2 同步失败或空指针排查
1. 检查 SaaS 指令库：`rpa_robot_uat.robot_customer_command` 记录。
2. 检查是否在定时任务中使用了依赖 `SecurityContext` 的方法。
3. 检查 Standalone 本地库：`rpa_client` 中的方案数据。
