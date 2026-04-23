# Excel 导出与模板处理指南

本项目大量使用 Alibaba EasyExcel 进行数据的导入导出。各地社保局复杂的表头要求使得 Excel 处理具有一些特殊的开发范式。

## 1. DTO 静态列映射
- **使用方式**：在 `common` 模块下的 DTO 类中使用 `@ExcelProperty(value = "列名", index = N)` 注解静态绑定列。
- **适用场景**：所有城市通用的标准字段（如姓名、身份证、单位名称等）。
- **优势**：类型安全，导出速度快，代码可读性高。

## 2. 动态表头与列隐藏 (Exclude Columns)
- **业务场景**：某些列只在特定条件（如特定城市）下才需要显示。如果使用静态 DTO，非特定城市也会出现空表头。
- **标准解法**：在 `rpa-saas-agent` 进行写流时，动态排除不需要的字段。
- **代码示例**：
  ```java
  // 1. 判断是否需要显示特定列（如深圳的特有列）
  boolean hasShenzhen = summaryList.stream().anyMatch(it -> "深圳".equals(it.getAddrName()));
  
  // 2. 将不需要的字段名（DTO 中的属性名）加入排除集合
  Set<String> excludeColumnFiledNames = Sets.newHashSet(); // 注意版本拼写：可能是 FiledNames 
  if (!hasShenzhen) {
      excludeColumnFiledNames.add("insuranceType");
      excludeColumnFiledNames.add("medicalLevel");
  }

  // 3. 在 WriteSheet 构建时注入
  WriteSheet writeSheet = EasyExcel.writerSheet("Sheet1")
      .head(YourDTO.class)
      .excludeColumnFiledNames(excludeColumnFiledNames) // 动态隐藏列
      .build();
  ```
- **⚠️ 避坑警告**：注意 EasyExcel 低版本中存在拼写错误，方法名为 `excludeColumnFiledNames`（少了一个 `i`），而不是 `excludeColumnFieldNames`。

## 3. 动态扩展列的写入
对于完全无法预知的列（动态表头），不能依赖 DTO 的注解，需要构建 `List<List<String>> headTitles` 和 `List<List<Object>> listData`，通过非注解的方式使用 EasyExcel 进行无模型写入。
这种方式通常用于报盘文件的生成环节，因为各地字段差异巨大，依赖数据库表 `policy_declare_column_setting` 来驱动生成。