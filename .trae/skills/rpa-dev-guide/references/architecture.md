# 系统架构与服务调用指南

本项目是一个多模块的微服务架构，核心模块及职责划分如下：

## 模块职责与数据库映射划分

### 1. `rpa-saas` (核心业务与中枢层)
- **对应数据库**：`rpa_uat` + MongoDB
- **核心表**：`customer_base` (客户信息表), `employee_base` (员工基础表), 各种申报与回调相关表 (`employee_social_declare_change`, `customer_config` 等)。
- **定位**：系统的“中枢大脑”。
- **职责**：
  - 处理复杂的政策配置、账户数据。
  - 与底层数据库进行直接交互。
  - 负责所有复杂的数据组装、映射和聚合逻辑（例如 `CustomerInsuredRegisterServiceImpl` 中的 `castEntity` 方法）。
  - 处理社保、公积金核心的业务规则（如投保类别判定、参保状态判定等）。
- **注意**：部分极为复杂、需要大量内部服务调用的接口也会下沉至此层编写，而非强制放在 agent 层。

### 2. `rpa-saas-agent` (客户服务接口与渲染层)
- **对应数据库**：`rpa_agent_uat`
- **核心表**：如 `employee_register_detail` (员工明细表) 和各类的导入导出统计表。
- **定位**：面向客户的对外服务接口与展示渲染层。
- **职责**：
  - 一般情况下，所有与客户直接相关的 RESTful API 接口都应写在这里。
  - 接收 HTTP 请求并进行初步的参数校验（如文件读取、基础格式校验）。
  - **调用 `rpa-saas` 提供的 Feign 接口获取业务数据**。
  - 负责最终的数据渲染（如使用 EasyExcel 将 DTO 写入到 Excel 文件流中并返回给用户）。
- **例外**：如果某个接口逻辑涉及非常复杂的内部系统远程调用（RPC），则不必拘泥于“必须写在 agent”，可以将其直接写在 `rpa-saas` 中。

### 3. `rpa-auth` (网关与授权层)
- **对应数据库**：`rpa_auth_uat`
- **核心表**：`sys_user` (用户表), `sys_role` (角色表), `sys_menu` (菜单表), 以及 `oauth2` 相关的认证表。
- **定位**：系统的安全门户。
- **职责**：处理网关路由、用户认证、权限校验（Token 等）。

### 4. `rpa-design` (指令调度与同步层)
- **对应数据库**：`rpa_robot_uat`
- **核心表**：`robot` (机器人), `robot_action` (机器人操作指令), `robot_app` (机器人应用), `robot_client` (机器人客户端) 等。
- **定位**：自动化任务的核心引擎。
- **职责**：
  - 处理各种 RPA 机器人执行指令。
  - 管理定时任务。
  - 负责与独立部署端（`rpa-standalone`）进行数据交互与同步。

### 5. `rpa-standalone` (独立部署端)
- **对应数据库**：`rpa_client`
- **核心表**：`customer_insured_register` (客户社保公积金名册), `calculate_bill_base` (员工账单测算), `customer_pay_fee_file` (客户缴费单据凭证表) 等。
- **定位**：为特定大客户提供的私有化部署版本。
- **背景**：部分客户不希望数据存放在公有 SaaS 环境，要求系统独立部署在其本地服务器。
- **职责**：
  - 大部分敏感及核心数据存放在客户本地数据库。
  - 仅将必须的数据通过 `rpa-design` 与主系统进行交互和同步。

### 6. `rpa-common` (公共模块)
- **定位**：系统公共基座。
- **职责**：存放各模块通用的 DTO/VO 类、枚举类、工具类（Utils）以及跨模块共用的基础组件。

## 双数据源协同 (MySQL + MongoDB)

### MySQL
- 用于存储高度结构化、相对静态的基础配置信息和主表数据。
- 例如：客户信息、组织架构、城市社保规则配置（`policy_declare_column_setting` 等）。

### MongoDB
- 用于存储海量的、结构多变、动态扩展的业务明细数据。
- 例如：员工参保名册明细（`customer_insured_register_detail`）、每次的申报报文等。
- **关键特性 `otherInfo`**：各地社保局要求的非标准字段（如深圳的“投保类别”、“医疗档次”），在解析后会被统库存放到 MongoDB 文档的 `otherInfo` (Map 结构) 字段中，通过 `containsKey` 进行动态提取。