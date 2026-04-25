import { useThemeContext } from '@/contexts';
import { designTokens } from '@/styles/design-tokens';
import type {
  TodoCategory,
  TodoItem as TodoItemType,
  TodoPriority,
} from '@/types';
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Button, Checkbox, DatePicker, Input, Select, Tooltip } from 'antd';
import type React from 'react';
import { useState } from 'react';

interface TodoItemProps {
  todo: TodoItemType;
  onToggleComplete: (id: number) => void;
  onUpdate: (
    id: number,
    data: Partial<Omit<TodoItemType, 'id' | 'createdAt'>>,
  ) => void;
  onDelete: (id: number) => void;
}

const { TextArea } = Input;
const { Option } = Select;

const priorityColors: Record<TodoPriority, string> = {
  high: '#ff4d4f',
  medium: '#faad14',
  low: '#52c41a',
};

const priorityNames: Record<TodoPriority, string> = {
  high: '高',
  medium: '中',
  low: '低',
};

const categoryNames: Record<TodoCategory, string> = {
  work: '工作',
  life: '生活',
  study: '学习',
};

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleComplete,
  onUpdate,
  onDelete,
}) => {
  const { isDark } = useThemeContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(todo.content);

  const isOverdue =
    todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed;

  const itemStyle: React.CSSProperties = {
    padding: '12px 16px',
    borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    background: isOverdue
      ? isDark
        ? 'rgba(255, 77, 79, 0.1)'
        : 'rgba(255, 77, 79, 0.05)'
      : 'transparent',
    transition: 'background 0.2s ease',
  };

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  const textStyle: React.CSSProperties = {
    flex: 1,
    fontSize: '14px',
    color: todo.completed
      ? isDark
        ? 'rgba(255,255,255,0.4)'
        : 'rgba(0,0,0,0.4)'
      : isDark
        ? designTokens.dark.text.primary
        : designTokens.light.text.primary,
    textDecoration: todo.completed ? 'line-through' : 'none',
    wordBreak: 'break-word',
  };

  const priorityBadgeStyle: React.CSSProperties = {
    fontSize: '11px',
    padding: '2px 8px',
    borderRadius: '10px',
    background: priorityColors[todo.priority],
    color: '#fff',
    fontWeight: 500,
  };

  const categoryBadgeStyle: React.CSSProperties = {
    fontSize: '11px',
    padding: '2px 8px',
    borderRadius: '10px',
    background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)',
    color: isDark
      ? designTokens.dark.text.secondary
      : designTokens.light.text.secondary,
  };

  const dueDateStyle: React.CSSProperties = {
    fontSize: '12px',
    color: isOverdue
      ? '#ff4d4f'
      : isDark
        ? designTokens.dark.text.secondary
        : designTokens.light.text.secondary,
  };

  const handleSaveEdit = () => {
    if (editContent.trim()) {
      onUpdate(todo.id, { content: editContent.trim() });
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditContent(todo.content);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSaveEdit();
    }
    if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <div style={itemStyle} onDoubleClick={() => setIsEditing(true)}>
      <div style={rowStyle}>
        <Checkbox
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
        />
        {isEditing ? (
          <div
            style={{
              flex: 1,
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <TextArea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              onKeyDown={handleKeyPress}
              autoSize={{ minRows: 1, maxRows: 4 }}
              autoFocus
              variant="borderless"
              style={{ flex: 1 }}
            />
            <Tooltip title="保存">
              <Button
                type="text"
                icon={<CheckOutlined />}
                size="small"
                onClick={handleSaveEdit}
              />
            </Tooltip>
            <Tooltip title="取消">
              <Button
                type="text"
                icon={<CloseOutlined />}
                size="small"
                onClick={handleCancelEdit}
              />
            </Tooltip>
          </div>
        ) : (
          <>
            <span style={textStyle}>{todo.content}</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <Tooltip title="编辑">
                <Button
                  type="text"
                  icon={<EditOutlined />}
                  size="small"
                  onClick={() => setIsEditing(true)}
                  style={{
                    color: isDark
                      ? designTokens.dark.text.secondary
                      : designTokens.light.text.secondary,
                  }}
                />
              </Tooltip>
              <Tooltip title="删除">
                <Button
                  type="text"
                  icon={<DeleteOutlined />}
                  size="small"
                  onClick={() => onDelete(todo.id)}
                  danger
                />
              </Tooltip>
            </div>
          </>
        )}
      </div>
      <div style={{ ...rowStyle, paddingLeft: '28px' }}>
        <span style={priorityBadgeStyle}>{priorityNames[todo.priority]}</span>
        <span style={categoryBadgeStyle}>{categoryNames[todo.category]}</span>
        {todo.dueDate && (
          <span style={dueDateStyle}>
            {isOverdue ? '⚠️ ' : ''}
            截止: {new Date(todo.dueDate).toLocaleDateString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
