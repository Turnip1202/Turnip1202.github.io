---
name: rpa-dev-guide
description: 专门用于指导 RPA（社保/公积金）项目后续开发、Bug排查及业务理解的核心知识库技能。当需要了解 `rpa-saas` 与 `rpa-saas-agent` 的职责划分、理解“报盘/回盘/在户名单”等核心业务概念、以及处理 EasyExcel 导出或多数据源（MySQL+MongoDB）同步时，应触发此技能。
---

# RPA 项目开发与排查指南 (RPA Dev Guide)

本技能汇集了该 RPA（社保、公积金）项目在开发与排查问题时的核心知识。系统具有明显的微服务分层特征和复杂的“MySQL+MongoDB”双数据源结构。

## 快速入口

在开始编写代码或排查 Bug 之前，请先根据任务类型查阅对应的参考文档：

- **关于系统架构与服务调用**：请参阅 [references/architecture.md](references/architecture.md)
- **关于核心业务概念（报盘/回盘/在户/参保等）**：请参阅 [references/business_concepts.md](references/business_concepts.md)
- **关于 Excel 导出与模板处理**：请参阅 [references/excel_export.md](references/excel_export.md)

## 核心排查原则 (Core Debugging Principles)

1. **先定位服务层级**：当遇到“接口没数据”或“导出缺少列”时，首先确认当前代码位于 `rpa-saas-agent` 还是 `rpa-saas`。业务组装逻辑（如 `castEntity`）必须下沉在 `rpa-saas`。
2. **确认数据来源**：明细数据与非标字段（如“深圳”的“投保类别”）通常存放在 MongoDB 的 `otherInfo` 等动态字段中，而不是 MySQL 中。
3. **不要在 agent 层聚合数据**：`rpa-saas-agent` 仅负责对外暴露接口和最终的数据渲染（如 EasyExcel 写入），不要在此层编写复杂的循环匹配或聚合逻辑。

## 典型操作场景

### 场景 1：新增/修改 Excel 导出列
如果你需要像“在户名单汇总表”中增加列：
1. 查阅 [references/excel_export.md](references/excel_export.md)。
2. 在 common 模块修改 DTO（增加 `@ExcelProperty`）。
3. 在 `rpa-saas` 服务层中修改数据映射与聚合逻辑（如 `CustomerInsuredRegisterServiceImpl.castEntity`）。
4. 在 `rpa-saas-agent` 层中通过 EasyExcel 的 API（如 `excludeColumnFiledNames`）处理动态列隐藏逻辑。

### 场景 2：处理“脱敏”数据
如果在数据库中查询身份证或姓名，且数据库中可能存在密文：
1. 优先使用按姓名（明文）查询全量候选人。
2. 在 Java 内存中通过 `ConvertUtl.decryptValue()` 解密后，再与用户输入的脱敏条件（如 `4401**********1234`）进行首尾匹配。
