# 可拖动待办清单 (Tolist) - 产品需求文档

## Overview
- **Summary**: 在页面上添加一个可拖动、可贴边自动隐藏的待办清单工具，提供完整的待办管理功能
- **Purpose**: 为用户提供一个方便的待办管理工具，可以在浏览网页时随时记录和管理任务
- **Target Users**: 所有使用 Turnip Nav 网站的用户，特别是需要同时处理多个任务的用户

## Goals
- 提供可拖动、可贴边隐藏的待办面板
- 实现完整的待办增删改查功能
- 支持待办分类、优先级、截止时间等功能
- 提供良好的交互体验和动画效果
- 实现数据持久化，使用网站现有存储方案
- 支持暗黑/浅色模式适配

## Non-Goals (Out of Scope)
- 后端API开发
- 云端同步功能（可选进阶功能，第一阶段暂不实现）
- 多用户协作功能
- 复杂的数据分析和报表功能

## Background & Context
- 现有技术栈：React 19 + TypeScript + Ant Design 6 + Emotion CSS-in-JS
- 已有的存储方案：SmartStorageManager (localStorage + IndexedDB 自动选择)
- 已有主题系统：支持暗黑/浅色模式切换
- 现有组件库：已集成完整的 Ant Design 组件

## Functional Requirements
- **FR-1**: 可拖动面板
  - 支持面板在整个屏幕范围内拖动
  - 限制拖动范围，防止拖出屏幕
- **FR-2**: 智能贴边隐藏
  - 双向贴边（左/右/顶部）自动隐藏
  - 隐藏时显示小把手，鼠标悬浮展开
  - 智能吸附到边缘
  - 记忆位置和状态
- **FR-3**: 待办增删改查
  - 添加待办
  - 删除待办
  - 编辑待办文字
  - 标记完成/未完成
- **FR-4**: 分类和优先级
  - 优先级：高/中/低（不同颜色标记）
  - 分类：工作/生活/学习（标签切换）
- **FR-5**: 时间功能
  - 设置截止时间
  - 超时自动标红
  - 自动记录创建时间
- **FR-6**: 快捷操作
  - 一键清空已完成
  - 一键全选/反选
  - 双击快速编辑
- **FR-7**: 交互体验
  - 展开/折叠面板
  - 拖拽排序待办
  - 快捷键支持
  - 右键菜单
  - 动画效果
- **FR-8**: 智能隐藏
  - 智能触发条件（鼠标离开3秒+贴边才隐藏）
  - 隐藏状态交互
  - 小红点提示
  - 窗口大小适配
- **FR-9**: 数据持久化
  - 本地存储保存所有待办
  - 实时自动保存
  - 数据导出
  - 清空数据（带确认）
- **FR-10**: 视觉美化
  - 暗黑/浅色模式适配
  - 自定义主题色
  - 面板透明度调节
  - 滚动优化

## Non-Functional Requirements
- **NFR-1**: 性能：面板响应快速，拖动流畅，无明显延迟
- **NFR-2**: 兼容性：支持主流浏览器（Chrome, Firefox, Safari, Edge）
- **NFR-3**: 可访问性：遵循基本的可访问性原则
- **NFR-4**: 可靠性：数据持久化稳定，不丢失用户数据

## Constraints
- **Technical**: 
  - 必须使用现有技术栈（React 19 + TypeScript + Ant Design 6）
  - 必须使用现有的 SmartStorageManager 进行数据持久化
  - 必须适配已有的主题系统
- **Business**: 
  - 无明确商业约束
- **Dependencies**: 
  - Ant Design 组件库
  - SmartStorageManager 存储系统
  - 现有主题上下文

## Assumptions
- 用户希望待办功能不干扰正常的网页浏览
- 用户希望待办数据能够在刷新页面后保持
- 用户希望有良好的视觉体验和交互反馈

## Acceptance Criteria

### AC-1: 可拖动面板
- **Given**: 用户打开待办清单
- **When**: 用户按住面板标题拖动
- **Then**: 面板跟随鼠标移动，不会拖出屏幕外，松手后停止在新位置
- **Verification**: `human-judgment`

### AC-2: 智能贴边隐藏
- **Given**: 用户拖动面板到屏幕边缘
- **When**: 面板距离边缘足够近
- **Then**: 面板自动吸附到边缘，鼠标离开3秒后自动隐藏，只显示小把手
- **Verification**: `human-judgment`

### AC-3: 记忆位置
- **Given**: 用户调整了面板位置和状态
- **When**: 用户刷新页面
- **Then**: 面板自动恢复到上次的位置和状态
- **Verification**: `human-judgment`

### AC-4: 待办增删改查
- **Given**: 用户打开待办清单
- **When**: 用户添加、编辑、删除待办，标记完成
- **Then**: 待办列表实时更新，操作反馈清晰
- **Verification**: `human-judgment`

### AC-5: 分类和优先级
- **Given**: 用户有待办项目
- **When**: 用户设置优先级和分类
- **Then**: 待办显示对应颜色，可以按分类筛选
- **Verification**: `human-judgment`

### AC-6: 时间功能
- **Given**: 用户设置了待办截止时间
- **When**: 当前时间超过截止时间
- **Then**: 待办自动标红提醒
- **Verification**: `human-judgment`

### AC-7: 拖拽排序
- **Given**: 待办列表有多个项目
- **When**: 用户拖拽待办项上下移动
- **Then**: 待办项顺序实时调整
- **Verification**: `human-judgment`

### AC-8: 数据持久化
- **Given**: 用户添加了待办
- **When**: 用户刷新页面或关闭浏览器后再次打开
- **Then**: 待办数据完整恢复
- **Verification**: `human-judgment`

### AC-9: 主题适配
- **Given**: 用户切换了暗黑/浅色模式
- **When**: 待办面板显示
- **Then**: 面板样式自动适配当前主题
- **Verification**: `human-judgment`

### AC-10: 快捷键支持
- **Given**: 待办面板打开
- **When**: 用户使用快捷键（Enter添加、Ctrl+D完成、Esc收起）
- **Then**: 对应功能正常执行
- **Verification**: `human-judgment`

## Open Questions
- [ ] 是否需要在管理面板中添加待办功能的开关？
- [ ] 是否需要预设一些常用待办模板？
- [ ] 面板的默认位置应该在哪里？
