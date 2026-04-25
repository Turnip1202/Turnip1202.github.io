# 可拖动待办清单 (Tolist) - 实施计划

## [ ] Task 1: 创建数据类型定义
- **Priority**: P0
- **Depends On**: None
- **Description**: 
  - 在 src/types/index.ts 中添加 Todo 相关的类型定义
  - 定义 TodoItem、TodoCategory、TodoPriority、TodoState 等类型
- **Acceptance Criteria Addressed**: AC-4, AC-5, AC-6
- **Test Requirements**:
  - `programmatic` TR-1.1: 类型定义完整，包含 id、content、priority、category、dueDate、createdAt、completed 等字段
  - `human-judgement` TR-1.2: 类型定义清晰，与现有代码风格一致
- **Notes**: 参考现有 Link 类型的定义风格

## [ ] Task 2: 创建待办数据管理器 (TodoManager)
- **Priority**: P0
- **Depends On**: Task 1
- **Description**: 
  - 在 src/utils/todo/ 目录下创建 TodoManager.ts
  - 使用 SmartStorageManager 进行数据持久化
  - 实现待办的增删改查、标记完成等核心功能
- **Acceptance Criteria Addressed**: AC-4, AC-8
- **Test Requirements**:
  - `programmatic` TR-2.1: TodoManager 实现完整的 CRUD 方法
  - `programmatic` TR-2.2: 使用 SmartStorageManager 正确保存和读取数据
  - `human-judgement` TR-2.3: 代码结构清晰，与现有 LinksManager 风格一致

## [ ] Task 3: 创建可拖动面板组件 (DraggablePanel)
- **Priority**: P0
- **Depends On**: None
- **Description**: 
  - 创建可拖动的面板容器组件
  - 实现拖动逻辑，限制拖动范围
  - 实现智能吸附边缘
  - 记忆位置和状态
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3
- **Test Requirements**:
  - `human-judgement` TR-3.1: 面板可以自由拖动，不会拖出屏幕
  - `human-judgement` TR-3.2: 拖动到边缘自动吸附
  - `human-judgement` TR-3.3: 刷新页面后位置和状态保持

## [ ] Task 4: 实现贴边自动隐藏功能
- **Priority**: P0
- **Depends On**: Task 3
- **Description**: 
  - 实现双向贴边（左/右/顶部）自动隐藏
  - 隐藏时显示小把手，鼠标悬浮展开
  - 智能触发条件（鼠标离开3秒+贴边才隐藏）
- **Acceptance Criteria Addressed**: AC-2, AC-3
- **Test Requirements**:
  - `human-judgement` TR-4.1: 拖动到左/右/顶部边缘都能触发隐藏
  - `human-judgement` TR-4.2: 隐藏后鼠标悬浮到小把手可以展开
  - `human-judgement` TR-4.3: 鼠标离开3秒后自动隐藏

## [ ] Task 5: 创建待办列表展示组件
- **Priority**: P0
- **Depends On**: Task 2
- **Description**: 
  - 创建待办列表组件 TodoList
  - 创建待办项组件 TodoItem
  - 展示待办的基本信息和状态
- **Acceptance Criteria Addressed**: AC-4
- **Test Requirements**:
  - `human-judgement` TR-5.1: 待办列表正确显示所有待办
  - `human-judgement` TR-5.2: 完成的待办有明显的视觉标记

## [ ] Task 6: 实现待办增删改查 UI
- **Priority**: P0
- **Depends On**: Task 5
- **Description**: 
  - 添加输入框用于创建新待办
  - 添加删除按钮
  - 实现编辑功能（双击编辑）
  - 添加完成/未完成复选框
- **Acceptance Criteria Addressed**: AC-4
- **Test Requirements**:
  - `human-judgement` TR-6.1: 可以正常添加新待办
  - `human-judgement` TR-6.2: 可以删除待办
  - `human-judgement` TR-6.3: 双击可以编辑待办内容
  - `human-judgement` TR-6.4: 可以标记待办完成/未完成

## [ ] Task 7: 实现分类和优先级功能
- **Priority**: P1
- **Depends On**: Task 6
- **Description**: 
  - 添加分类标签切换（工作/生活/学习）
  - 添加优先级选择（高/中/低）
  - 不同优先级显示不同颜色
- **Acceptance Criteria Addressed**: AC-5
- **Test Requirements**:
  - `human-judgement` TR-7.1: 可以按分类筛选待办
  - `human-judgement` TR-7.2: 不同优先级有不同颜色标记
  - `human-judgement` TR-7.3: 可以设置和修改优先级

## [ ] Task 8: 实现时间功能
- **Priority**: P1
- **Depends On**: Task 6
- **Description**: 
  - 添加截止时间选择器
  - 超时自动标红
  - 自动记录创建时间
- **Acceptance Criteria Addressed**: AC-6
- **Test Requirements**:
  - `human-judgement` TR-8.1: 可以设置截止时间
  - `human-judgement` TR-8.2: 超时待办自动标红
  - `human-judgement` TR-8.3: 创建时间正确显示

## [ ] Task 9: 实现拖拽排序功能
- **Priority**: P1
- **Depends On**: Task 5
- **Description**: 
  - 实现待办项的拖拽排序
  - 使用 Ant Design 的 DragDrop 或 react-dnd
- **Acceptance Criteria Addressed**: AC-7
- **Test Requirements**:
  - `human-judgement` TR-9.1: 可以拖拽待办项调整顺序
  - `human-judgement` TR-9.2: 排序后自动保存

## [ ] Task 10: 添加快捷操作按钮
- **Priority**: P1
- **Depends On**: Task 6
- **Description**: 
  - 一键清空已完成
  - 一键全选/反选
- **Acceptance Criteria Addressed**: AC-4
- **Test Requirements**:
  - `human-judgement` TR-10.1: 清空已完成功能正常工作
  - `human-judgement` TR-10.2: 全选/反选功能正常工作

## [ ] Task 11: 实现快捷键支持
- **Priority**: P2
- **Depends On**: Task 6
- **Description**: 
  - Enter 快速添加待办
  - Ctrl/Command + D 标记完成
  - Esc 取消编辑/收起面板
- **Acceptance Criteria Addressed**: AC-10
- **Test Requirements**:
  - `human-judgement` TR-11.1: 快捷键功能正常工作
  - `human-judgement` TR-11.2: 不影响其他功能的快捷键

## [ ] Task 12: 添加动画效果
- **Priority**: P2
- **Depends On**: Task 4, Task 5
- **Description**: 
  - 新增/删除待办时淡入淡出
  - 贴边隐藏/展开平滑动画
  - 使用 Emotion CSS-in-JS 实现动画
- **Acceptance Criteria Addressed**: AC-2, AC-4
- **Test Requirements**:
  - `human-judgement` TR-12.1: 待办添加/删除有平滑动画
  - `human-judgement` TR-12.2: 贴边隐藏/展开动画流畅

## [ ] Task 13: 实现主题适配
- **Priority**: P1
- **Depends On**: Task 3
- **Description**: 
  - 使用 ThemeContext 适配暗黑/浅色模式
  - 面板样式根据主题自动切换
- **Acceptance Criteria Addressed**: AC-9
- **Test Requirements**:
  - `human-judgement` TR-13.1: 暗黑模式下样式正确
  - `human-judgement` TR-13.2: 浅色模式下样式正确
  - `human-judgement` TR-13.3: 切换主题时面板样式同步更新

## [ ] Task 14: 添加数据导出功能
- **Priority**: P2
- **Depends On**: Task 2
- **Description**: 
  - 一键导出待办为文本/TXT文件
- **Acceptance Criteria Addressed**: AC-4
- **Test Requirements**:
  - `human-judgement` TR-14.1: 导出功能正常工作
  - `human-judgement` TR-14.2: 导出的文件内容正确

## [ ] Task 15: 实现面板展开/折叠功能
- **Priority**: P2
- **Depends On**: Task 3
- **Description**: 
  - 点击小箭头折叠列表
  - 只留标题栏，节省空间
- **Acceptance Criteria Addressed**: AC-2
- **Test Requirements**:
  - `human-judgement` TR-15.1: 可以展开/折叠面板
  - `human-judgement` TR-15.2: 折叠后只显示标题栏

## [ ] Task 16: 添加小红点提示功能
- **Priority**: P2
- **Depends On**: Task 4
- **Description**: 
  - 隐藏状态下显示小红点
  - 提示有未完成待办
- **Acceptance Criteria Addressed**: AC-2
- **Test Requirements**:
  - `human-judgement` TR-16.1: 有未完成待办时显示小红点
  - `human-judgement` TR-16.2: 所有待办完成后小红点消失

## [ ] Task 17: 集成到主应用
- **Priority**: P0
- **Depends On**: Task 3, Task 5
- **Description**: 
  - 将待办面板集成到 App.tsx
  - 添加开关控制待办面板的显示/隐藏
- **Acceptance Criteria Addressed**: AC-1
- **Test Requirements**:
  - `human-judgement` TR-17.1: 待办面板在页面上正确显示
  - `human-judgement` TR-17.2: 可以正常打开和关闭待办面板
