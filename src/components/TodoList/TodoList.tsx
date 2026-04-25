import { useThemeContext } from '@/contexts';
import { designTokens } from '@/styles/design-tokens';
import type {
  TodoCategory,
  TodoItem as TodoItemType,
  TodoPriority,
} from '@/types';
import {
  CheckSquareOutlined,
  ClearOutlined,
  DownloadOutlined,
  PlusOutlined,
  StopOutlined,
} from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Input,
  Modal,
  Select,
  Tabs,
  Tooltip,
  message,
} from 'antd';
import type React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { TodoItem } from './TodoItem';

const { TextArea } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

interface TodoListProps {
  todos: TodoItemType[];
  currentCategory: TodoCategory | 'all';
  onAddTodo: (
    content: string,
    priority: TodoPriority,
    category: TodoCategory,
    dueDate?: string,
  ) => void;
  onUpdateTodo: (
    id: number,
    data: Partial<Omit<TodoItemType, 'id' | 'createdAt'>>,
  ) => void;
  onDeleteTodo: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onCategoryChange: (category: TodoCategory | 'all') => void;
  onClearCompleted: () => void;
  onToggleAllComplete: (complete: boolean) => void;
  onExport: () => void;
}

const categoryConfig = [
  { key: 'all', label: '全部' },
  { key: 'work', label: '工作' },
  { key: 'life', label: '生活' },
  { key: 'study', label: '学习' },
];

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  currentCategory,
  onAddTodo,
  onUpdateTodo,
  onDeleteTodo,
  onToggleComplete,
  onCategoryChange,
  onClearCompleted,
  onToggleAllComplete,
  onExport,
}) => {
  const { isDark } = useThemeContext();
  const [newTodoContent, setNewTodoContent] = useState('');
  const [newTodoPriority, setNewTodoPriority] =
    useState<TodoPriority>('medium');
  const [newTodoCategory, setNewTodoCategory] = useState<TodoCategory>('work');
  const [newTodoDueDate, setNewTodoDueDate] = useState<string | undefined>();
  const [confirmClear, setConfirmClear] = useState(false);

  const filteredTodos =
    currentCategory === 'all'
      ? todos
      : todos.filter((todo) => todo.category === currentCategory);

  const handleAddTodo = useCallback(() => {
    if (!newTodoContent.trim()) return;
    onAddTodo(
      newTodoContent.trim(),
      newTodoPriority,
      newTodoCategory,
      newTodoDueDate,
    );
    setNewTodoContent('');
    setNewTodoDueDate(undefined);
  }, [
    newTodoContent,
    newTodoPriority,
    newTodoCategory,
    newTodoDueDate,
    onAddTodo,
  ]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleAddTodo();
      }
    },
    [handleAddTodo],
  );

  const handleClearCompleted = useCallback(() => {
    Modal.confirm({
      title: '确认清空已完成任务',
      content: '确定要清空所有已完成的任务吗？此操作不可撤销。',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        onClearCompleted();
        message.success('已清空已完成任务');
      },
    });
  }, [onClearCompleted]);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const addSectionStyle: React.CSSProperties = {
    padding: '16px',
    borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
  };

  const inputRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    marginBottom: '12px',
  };

  const optionsRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  };

  const tabsStyle: React.CSSProperties = {
    padding: '0 16px',
  };

  const actionsStyle: React.CSSProperties = {
    padding: '12px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
    background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
  };

  const listStyle: React.CSSProperties = {
    flex: 1,
    overflow: 'auto',
  };

  const emptyStyle: React.CSSProperties = {
    padding: '40px 20px',
    textAlign: 'center',
    color: isDark
      ? designTokens.dark.text.secondary
      : designTokens.light.text.secondary,
    fontSize: '14px',
  };

  return (
    <div style={containerStyle}>
      <div style={addSectionStyle}>
        <div style={inputRowStyle}>
          <TextArea
            placeholder="添加新待办..."
            value={newTodoContent}
            onChange={(e) => setNewTodoContent(e.target.value)}
            onKeyDown={handleKeyPress}
            autoSize={{ minRows: 1, maxRows: 3 }}
            style={{ flex: 1 }}
          />
          <Tooltip title="添加">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleAddTodo}
            />
          </Tooltip>
        </div>
        <div style={optionsRowStyle}>
          <Select
            value={newTodoPriority}
            onChange={(value) => setNewTodoPriority(value as TodoPriority)}
            style={{ width: 80 }}
            size="small"
          >
            <Option value="high">高</Option>
            <Option value="medium">中</Option>
            <Option value="low">低</Option>
          </Select>
          <Select
            value={newTodoCategory}
            onChange={(value) => setNewTodoCategory(value as TodoCategory)}
            style={{ width: 80 }}
            size="small"
          >
            <Option value="work">工作</Option>
            <Option value="life">生活</Option>
            <Option value="study">学习</Option>
          </Select>
          <DatePicker
            placeholder="截止日期"
            onChange={(date) => setNewTodoDueDate(date?.toISOString())}
            allowClear
            size="small"
            style={{ width: 120 }}
          />
        </div>
      </div>
      <Tabs
        activeKey={currentCategory}
        onChange={(key) => onCategoryChange(key as TodoCategory | 'all')}
        style={tabsStyle}
        size="small"
      >
        {categoryConfig.map((category) => (
          <TabPane tab={category.label} key={category.key} />
        ))}
      </Tabs>
      <div style={listStyle}>
        {filteredTodos.length === 0 ? (
          <div style={emptyStyle}>暂无待办任务</div>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={onToggleComplete}
              onUpdate={onUpdateTodo}
              onDelete={onDeleteTodo}
            />
          ))
        )}
      </div>
      <div style={actionsStyle}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Tooltip title="全部标记完成">
            <Button
              size="small"
              icon={<CheckSquareOutlined />}
              onClick={() => onToggleAllComplete(true)}
            />
          </Tooltip>
          <Tooltip title="全部取消完成">
            <Button
              size="small"
              icon={<StopOutlined />}
              onClick={() => onToggleAllComplete(false)}
            />
          </Tooltip>
          <Tooltip title="清空已完成">
            <Button
              size="small"
              icon={<ClearOutlined />}
              onClick={handleClearCompleted}
            />
          </Tooltip>
        </div>
        <Tooltip title="导出待办">
          <Button size="small" icon={<DownloadOutlined />} onClick={onExport} />
        </Tooltip>
      </div>
    </div>
  );
};

export default TodoList;
