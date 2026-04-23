---
name: "mongodb-connector"
description: "连接 MongoDB/MongoDB Atlas 并执行数据库操作。用于扫描数据库结构、查看集合、验证连接等 MongoDB 相关操作时调用。"
---

# MongoDB Connector

本 skill 用于连接 MongoDB/MongoDB Atlas 数据库并执行各种操作。

## 可用 MCP 工具

| 工具 | 用途 |
|------|------|
| `mcp_MongoDB_connect` | 连接到 MongoDB 实例 |
| `mcp_MongoDB_list-databases` | 列出所有数据库 |
| `mcp_MongoDB_list-collections` | 列出指定数据库中的集合 |
| `mcp_MongoDB_atlas-list-projects` | 列出 Atlas 项目 |
| `mcp_MongoDB_atlas-list-clusters` | 列出 Atlas 集群 |
| `mcp_MongoDB_atlas-inspect-cluster` | 检查集群详情 |
| `mcp_MongoDB_atlas-create-free-cluster` | 创建免费 Atlas 集群 |

## 当前项目配置

**连接字符串:** `mongodb://192.168.0.81:27018/rpa_uat?authSource=admin`

**数据库:** `rpa_uat`

## 使用示例

### 1. 连接到数据库
```
mcp_MongoDB_connect("mongodb://192.168.0.81:27018/rpa_uat?authSource=admin")
```

### 2. 列出所有数据库
```
mcp_MongoDB_list-databases({})
```

### 3. 列出集合
```
mcp_MongoDB_list-collections("rpa_uat")
```

## 快速操作流程

1. **连接** - 使用 `mcp_MongoDB_connect` 建立连接
2. **列出数据库** - 使用 `mcp_MongoDB_list-databases` 查看所有库
3. **列出集合** - 使用 `mcp_MongoDB_list-collections` 查看集合列表
4. **进一步操作** - 根据需要执行其他查询操作

## 注意事项

- Atlas 连接需要配置 `MDB_MCP_API_CLIENT_ID` 和 `MDB_MCP_API_CLIENT_SECRET` 环境变量
- 普通 MongoDB 连接只需提供 `MDB_MCP_CONNECTION_STRING`
