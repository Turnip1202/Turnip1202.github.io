export const linkColumns = [
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
    title: 'URL',
    dataIndex: 'url',
    key: 'url',
  },
  {
    title: 'Icon',
    dataIndex: 'icon',
    key: 'icon',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button type="primary" icon={<EditOutlined />} onClick={() => handleEditLink(record)}>
          Edit Link
        </Button>
        <Button type="danger" icon={<DeleteOutlined />} onClick={() => handleDeleteLink(record.id)}>
          Delete Link
        </Button>
      </Space>
    ),
  },
];
