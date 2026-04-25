// src/components/AdminPanel/templates/config/index.tsx
// 链接管理相关的配置和工具函数

import type { Link, LinkCategory } from '@/types';
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { Button, Space, Tag } from 'antd';
import React from 'react';

/**
 * 格式化URL显示
 * @param url - 完整URL
 * @param maxLength - 最大显示长度
 * @returns 格式化后的URL
 */
export const formatUrl = (url: string, maxLength = 50): string => {
  if (!url) return '';
  if (url.length <= maxLength) return url;
  return `${url.substring(0, maxLength)}...`;
};

/**
 * 验证URL格式
 * @param url - 待验证的URL
 * @returns 是否为有效URL
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * 表单验证规则
 */
export const formRules = {
  categoryName: [
    { required: true, message: '请输入分类名称！' },
    { min: 1, max: 20, message: '分类名称长度应在1-20个字符之间！' },
  ],
  linkName: [{ max: 30, message: '链接名称不能超过30个字符！' }],
  linkUrl: [
    { required: true, message: '请输入链接地址！' },
    {
      validator: (_: any, value: string) => {
        if (!value) return Promise.resolve();
        if (isValidUrl(value)) return Promise.resolve();
        return Promise.reject(new Error('请输入有效的URL地址！'));
      },
    },
  ],
  linkIcon: [
    { required: true, message: '请输入图标！' },
    { max: 10, message: '图标不能超过10个字符！' },
  ],
};

/**
 * 默认表单值
 */
export const defaultFormValues = {
  category: {
    name: '',
  },
  link: {
    categoryId: undefined,
    name: '',
    url: 'https://',
    icon: '🔗',
  },
};

/**
 * 常用图标选项
 */
export const commonIcons = [
  '🔗',
  '🌐',
  '📚',
  '🎵',
  '🎬',
  '🎮',
  '💻',
  '📱',
  '🛒',
  '📧',
  '📰',
  '🔍',
  '⭐',
  '❤️',
  '🏠',
  '🎨',
  '📊',
  '💼',
  '🔧',
  '⚙️',
  '📝',
  '📋',
  '📌',
  '🏷️',
];

export default {
  formatUrl,
  isValidUrl,
  formRules,
  defaultFormValues,
  commonIcons,
};
