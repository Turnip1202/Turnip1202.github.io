import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Select, Form, Input, Space, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, LinkOutlined } from '@ant-design/icons';

import { linksManager } from "@/utils"
import type { LinkCategory, SearchEngine, Link } from '@/types';


const Links = () => {
  const [categories, setCategories] = useState<LinkCategory[]>([]);
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);
  const [isLinkModalVisible, setIsLinkModalVisible] = useState(false);
  const [categoryForm] = Form.useForm();
  const [linkForm] = Form.useForm();
  const [editingCategory, setEditingCategory] = useState<LinkCategory>();
  const [editingLink, setEditingLink] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    // Initialize test data if no data exists in localStorage
    const storedData = linksManager.getAllCategories()
    setCategories(storedData);
  }, []);

  const showCategoryModal = () => {
    categoryForm.resetFields();
    setEditingCategory(undefined);
    setIsCategoryModalVisible(true);
  };

  const handleCategoryOk = () => {
    categoryForm.validateFields().then(values => {
      console.log(values)
      if (editingCategory) {
        // Update existing category
        const updatedCategories = categories.map(category =>
          category.id === editingCategory.id ? { ...category, ...values } : category
        );
        setCategories(updatedCategories);
        linksManager.updateCategory(values.id, values.name);
        message.success('Category updated successfully!');
      } else {
        // Add new category
        const newCategories = [...categories, { id: Date.now(), ...values, links: [] }];
        setCategories(newCategories);
        linksManager.addCategory(values.name);
        message.success('Category added successfully!');
      }
      setIsCategoryModalVisible(false);
    });
  };

  const clearCatgorys = () => {
    linksManager.clearStorage();
    setCategories([]);
    message.success('All categories deleted successfully');
  }

  const handleCategoryCancel = () => {
    setIsCategoryModalVisible(false);
  };

  const handleEditCategory = (category: LinkCategory) => {
    console.log("Editing category: ", category)
    setEditingCategory(category);
    categoryForm.setFieldsValue(category);
    setIsCategoryModalVisible(true);
  };

  const handleDeleteCategory = (id: number) => {
    const filteredCategories = categories.filter(category => category.id !== id);
    setCategories(filteredCategories);
    linksManager.deleteCategory(id);
    message.success('Category deleted successfully!');
  };

  const handleOpenLinkModal = () => {
    setIsLinkModalVisible(true);
    linkForm.resetFields();
    setEditingLink(null);
  };

  const handleLinkOk = () => {
    linkForm.validateFields().then(values => {
      const selectedCategoryIndex = categories.findIndex(cat => cat.id === selectedCategoryId);
      let updatedCategories = [...categories];
      if (editingLink) {
        console.log("updating link")
        // Update existing link
        const linkId = values.id
        const updatedLinks = { icon: values.icon, name: values.name, url: values.url };
        linksManager.updateLink(selectedCategoryIndex, linkId, updatedLinks);
        message.success('Link updated successfully!');
      } else {
        console.log("adding link")
        // Add new link
        linksManager.addLink(values.id, values.name, values.url, values.icon);
        message.success('Link added successfully!');
      }
      setCategories(updatedCategories);
      setIsLinkModalVisible(false);
    });
  };

  const handleLinkCancel = () => {
    setIsLinkModalVisible(false);
  };

  const handleEditLink = (link: LinkCategory) => {
    console.log("Editing link: ", link)
    linkForm.setFieldsValue(link);
    setIsLinkModalVisible(true);
  };
  const handleDeleteAllLink = (record: LinkCategory) => {
    const allCategories = linksManager.getAllCategories();
    //清空对应id的links
    let updatedCategories = allCategories.map(category => {
      if (category.id === record.id) {
        category.links.forEach(item => {
          linksManager.deleteLink(category.id, item.id)
        })
        category.links = [];
      }
      return category;
    })
    setCategories(updatedCategories);

  }

  const handleDeleteLink = id => {
    const selectedCategoryIndex = categories.findIndex(cat => cat.id === selectedCategoryId);
    let updatedCategories = [...categories];
    updatedCategories[selectedCategoryIndex].links = updatedCategories[selectedCategoryIndex].links.filter(link => link.id !== id);
    setCategories(updatedCategories);
    localStorage.setItem('yourDataKey', JSON.stringify(updatedCategories));
    message.success('Link deleted successfully!');
  };
  const categoryColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Links',
      dataIndex: 'links',
      key: 'links',
      render: (links: Link[]) => (
        <Space size="middle">
          {links.map(link => `${link.icon}: ${link.name ? `${link.name}-> ` : ''}${link.url}`).join(', ')}
        </Space>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record: LinkCategory) => (
        <Space size="middle">
          {/* <Button type="primary" icon={<EditOutlined />} onClick={() => handleEditLink(record)}>
            Edit Link(功能未完善)
          </Button> */}

          <Button type="primary" icon={<EditOutlined />} onClick={() => handleEditCategory(record)}>
            Edit Category
          </Button>
          <Button type="dashed" icon={<DeleteOutlined />} onClick={() => handleDeleteCategory(record.id)}>
            Delete Category
          </Button>
          {/* <Button type="dashed" icon={<DeleteOutlined />} onClick={() => handleDeleteAllLink(record)}>
            Delete All Link
          </Button> */}
        </Space>
      ),
    },
  ];


  return (
    <div style={{ padding: 24 }}>
      <h1>Data Management Panel</h1>
      <Button type="primary" icon={<PlusOutlined />} onClick={showCategoryModal} style={{ marginBottom: 16 }}>
        Add New Category
      </Button>
      <Button type="primary" icon={<LinkOutlined />} onClick={() => handleOpenLinkModal()}>
        Add Links
      </Button>
      <Button type="dashed" icon={<PlusOutlined />} onClick={clearCatgorys} style={{ marginBottom: 16 }}>
        清空数据
      </Button>
      <Table dataSource={categories} columns={categoryColumns} rowKey="id" pagination={{ pageSize: 5 }} />

      {/* 关于分类 */}
      <Modal
        title={`${editingCategory ? 'Edit' : 'Add'} Category`}
        open={isCategoryModalVisible}
        onOk={handleCategoryOk}
        onCancel={handleCategoryCancel}
      >
        <Form form={categoryForm} layout="vertical">
          <Form.Item name="id" label="ID" rules={[{ required: true, message: 'Please input ID!' }]}>
            <Input disabled={!!editingCategory} />
          </Form.Item>
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input Name!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      {/* 关于链接 */}
      <Modal
        title={`${editingLink ?? 'Add'} Link`}
        open={isLinkModalVisible}
        onOk={handleLinkOk}
        onCancel={handleLinkCancel}
      >
        <Form form={linkForm} layout="vertical">
          <Form.Item name="id" label="ID" rules={[{ required: true, message: 'Please input ID!' }]}>
            <Select disabled={!!editingLink} options={categories.map(cat => ({ value: cat.id, label: cat.name }))} />
          </Form.Item>
          <Form.Item name="name" label="Name" rules={[{ required: false, message: 'Please input Name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="url" label="URL" rules={[{ required: true, message: 'Please input URL!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="icon" label="Icon" rules={[{ required: true, message: 'Please input Icon!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Links;



