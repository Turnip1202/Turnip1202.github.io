# 核心业务概念指南

在 RPA 社保/公积金项目中，有几个非常核心的名词和概念。理解它们是看懂代码的前提。

## 1. 报盘 (Offer / Declare Export)
- **含义**：将系统内的参保/停保请求数据，按照各地社保局/公积金中心要求的特定 Excel 模板格式导出的过程。
- **关联代码**：通常涉及 `OfferExport` 相关类和方法。
- **特点**：各地格式差异巨大，因此依赖于 `policy_declare_column_setting` 表进行动态字段映射。

## 2. 回盘 (Counter Offer / Declare Import)
- **含义**：社保局/公积金中心处理完申报后，返回的反馈结果文件（成功或失败原因）。系统解析这个文件并更新对应员工申报状态的过程。
- **关联代码**：通常涉及 `CounterOffer` 相关类和方法。

## 3. 在户名单 / 名册 (Insured Register)
- **含义**：当前在某个客户、某个单位下，处于正常参保状态的所有员工的快照。
- **特点**：
  - 一个员工如果同时缴纳养老、医疗、公积金，在底层 MongoDB 的 `customer_insured_register_detail` 集合中通常会有**多条**记录（通过 `businessType` 和 `tplTypeCode` 区分）。
  - 在导出汇总表时（如 `CustomerInsuredRegisterSummaryDTO`），需要通过按员工身份（身份证+城市+单位）进行 `groupingBy`，将多条记录**拍平**成一行展示。

## 4. 脱敏与加密 (Desensitization & Encryption)
- **背景**：为了安全，数据库中（如 `employee_base` 表）的敏感信息（特别是 `idCard`）已经过加密处理。
- **查询难点**：
  - 过去明文时，可以使用 SQL 的 `LEFT()` 或 `SUBSTRING()` 函数进行脱敏数据（如 `4401****1234`）的模糊匹配。
  - 现在密文状态下，SQL 模糊匹配失效。
- **标准解法**：
  1. 优先通过未脱敏的条件（如姓名）查询出候选人列表。
  2. 在 Java 代码中，对候选人的 `idCard` 调用 `ConvertUtl.decryptValue()` 进行解密。
  3. 使用解密后的明文与前端传入的脱敏规则（前缀/后缀）进行手动匹配校验。