import React, { useState } from 'react';
import {
  Card,
  Space,
  Divider,
  Typography,
  Alert,
  Badge,
  Tag,
  Progress,
  Button,
  Rate,
  Input,
  Select,
  Table,
  List,
  Avatar,
  Modal,
  Form,
  Row,
  Col,
  message,
  notification,
  Switch,
  Slider,
  Checkbox,
  Radio,
  DatePicker,
  TimePicker,
  Steps,
  Breadcrumb,
  Tabs,
  Collapse,
  Tooltip,
  Popover,
  Drawer,
} from 'antd';
import {
  UserOutlined,
  StarOutlined,
  LikeOutlined,
  HeartOutlined,
  HomeOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  BugOutlined,
  RocketOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;
const { Option } = Select;
const { Step } = Steps;
const { TabPane } = Tabs;
const { Panel } = Collapse;

const AntdShowcase: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [rateValue, setRateValue] = useState(4);
  const [currentStep, setCurrentStep] = useState(1);
  const [form] = Form.useForm();

  // 示例数据
  const tableData = [
    { key: '1', name: '张三', age: 32, address: '北京市朝阳区', status: 'active' },
    { key: '2', name: '李四', age: 28, address: '上海市浦东区', status: 'inactive' },
    { key: '3', name: '王五', age: 35, address: '广州市天河区', status: 'active' },
  ];

  const tableColumns = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '地址', dataIndex: 'address', key: 'address' },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Badge
          status={status === 'active' ? 'success' : 'default'}
          text={status === 'active' ? '活跃' : '非活跃'}
        />
      ),
    },
  ];

  const listData = [
    {
      title: 'Ant Design 组件库',
      description: '企业级 UI 设计语言和 React 组件库',
      avatar: '🎨',
    },
    {
      title: 'React 19',
      description: '用于构建用户界面的 JavaScript 库',
      avatar: '⚛️',
    },
    {
      title: 'TypeScript',
      description: 'JavaScript 的强类型超集',
      avatar: '📘',
    },
    {
      title: 'Emotion.js',
      description: '高性能的 CSS-in-JS 库',
      avatar: '💅',
    },
  ];

  const showNotification = () => {
    notification.success({
      message: '操作成功',
      description: '这是一个成功的通知消息示例，展示了 Ant Design 的 notification 组件功能。',
      placement: 'topRight',
      duration: 4,
    });
  };

  const showMessage = () => {
    message.success('这是一个成功的消息提示');
  };

  const showWarningMessage = () => {
    message.warning('这是一个警告消息');
  };

  const showErrorMessage = () => {
    message.error('这是一个错误消息');
  };

  const handleSubmit = (values: unknown) => {
    console.log('表单提交:', values);
    message.success('表单提交成功！数据已记录到控制台');
  };

  const popoverContent = (
    <div>
      <p>这是一个 Popover 组件的内容</p>
      <p>可以包含任意的 React 元素</p>
    </div>
  );

  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>
        <RocketOutlined /> Ant Design 组件展示面板
      </Title>
      <Paragraph>
        这个面板展示了 Ant Design 在本项目中的集成效果，包含了常用组件的使用示例。
        所有组件都支持主题切换，并与项目的整体设计保持一致。
      </Paragraph>

      <Tabs defaultActiveKey="1">
        <TabPane tab="基础组件" key="1">
          {/* 按钮组件 */}
          <Divider orientation="left">
            <ThunderboltOutlined /> 按钮组件
          </Divider>
          <Space wrap style={{ marginBottom: 16 }}>
            <Button type="primary">主要按钮</Button>
            <Button>默认按钮</Button>
            <Button type="dashed">虚线按钮</Button>
            <Button type="text">文本按钮</Button>
            <Button type="link">链接按钮</Button>
            <Button type="primary" danger>
              危险按钮
            </Button>
            <Button
              type="primary"
              loading={loading}
              onClick={() => setLoading(!loading)}
            >
              {loading ? '加载中' : '切换加载'}
            </Button>
            <Button icon={<StarOutlined />}>图标按钮</Button>
          </Space>

          {/* 反馈组件 */}
          <Divider orientation="left">反馈组件</Divider>
          <Space direction="vertical" style={{ width: '100%', marginBottom: 16 }}>
            <Alert message="信息提示" type="info" showIcon />
            <Alert message="成功提示" type="success" showIcon closable />
            <Alert message="警告提示" type="warning" showIcon />
            <Alert message="错误提示" type="error" showIcon />

            <Space wrap>
              <Button onClick={showNotification}>显示通知</Button>
              <Button onClick={showMessage}>成功消息</Button>
              <Button onClick={showWarningMessage}>警告消息</Button>
              <Button onClick={showErrorMessage}>错误消息</Button>
              <Button onClick={() => setModalVisible(true)}>打开模态框</Button>
              <Button onClick={() => setDrawerVisible(true)}>打开抽屉</Button>
            </Space>
          </Space>

          {/* 数据展示 */}
          <Divider orientation="left">数据展示</Divider>
          <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
            <Col span={12}>
              <Card title="进度和评分" size="small">
                <Space direction="vertical" style={{ width: '100%' }}>
                  <div>
                    <Text>进度条:</Text>
                    <Progress percent={75} status="active" />
                  </div>
                  <div>
                    <Text>环形进度:</Text>
                    <Progress type="circle" percent={60} width={60} />
                  </div>
                  <div>
                    <Text>评分:</Text>
                    <Rate value={rateValue} onChange={setRateValue} />
                    <Text style={{ marginLeft: 8 }}>{rateValue} 星</Text>
                  </div>
                  <div>
                    <Text>标签:</Text>
                    <Space>
                      <Tag color="blue">React</Tag>
                      <Tag color="green">TypeScript</Tag>
                      <Tag color="orange">Ant Design</Tag>
                      <Tag color="purple">Emotion</Tag>
                    </Space>
                  </div>
                  <div>
                    <Text>徽章:</Text>
                    <Space>
                      <Badge count={5}>
                        <Avatar shape="square" icon={<UserOutlined />} />
                      </Badge>
                      <Badge dot>
                        <Avatar shape="square" icon={<UserOutlined />} />
                      </Badge>
                      <Badge count={99} overflowCount={10}>
                        <Avatar shape="square" icon={<UserOutlined />} />
                      </Badge>
                    </Space>
                  </div>
                </Space>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="步骤条" size="small">
                <Steps current={currentStep} size="small" style={{ marginBottom: 16 }}>
                  <Step title="已完成" description="第一步完成" />
                  <Step title="进行中" description="当前步骤" />
                  <Step title="等待中" description="待执行" />
                </Steps>
                <Space>
                  <Button
                    size="small"
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  >
                    上一步
                  </Button>
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => setCurrentStep(Math.min(2, currentStep + 1))}
                  >
                    下一步
                  </Button>
                </Space>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tab="表单组件" key="2">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card title="表单控件" size="small">
                <Form form={form} onFinish={handleSubmit} layout="vertical">
                  <Form.Item
                    name="username"
                    label="用户名"
                    rules={[{ required: true, message: '请输入用户名' }]}
                  >
                    <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
                  </Form.Item>
                  
                  <Form.Item name="email" label="邮箱">
                    <Input type="email" placeholder="请输入邮箱" />
                  </Form.Item>

                  <Form.Item name="city" label="城市">
                    <Select placeholder="请选择城市">
                      <Option value="beijing">北京</Option>
                      <Option value="shanghai">上海</Option>
                      <Option value="guangzhou">广州</Option>
                      <Option value="shenzhen">深圳</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item name="date" label="日期">
                    <DatePicker style={{ width: '100%' }} />
                  </Form.Item>

                  <Form.Item name="time" label="时间">
                    <TimePicker style={{ width: '100%' }} />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      提交表单
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="其他控件" size="small">
                <Space direction="vertical" style={{ width: '100%' }}>
                  <div>
                    <Text>开关:</Text>
                    <Switch
                      checked={switchValue}
                      onChange={setSwitchValue}
                      style={{ marginLeft: 8 }}
                    />
                    <Text style={{ marginLeft: 8 }}>
                      {switchValue ? '开启' : '关闭'}
                    </Text>
                  </div>

                  <div>
                    <Text>滑动条:</Text>
                    <Slider
                      value={sliderValue}
                      onChange={setSliderValue}
                      style={{ margin: '0 8px' }}
                    />
                    <Text>值: {sliderValue}</Text>
                  </div>

                  <div>
                    <Text>复选框:</Text>
                    <Checkbox.Group style={{ marginLeft: 8 }}>
                      <Checkbox value="option1">选项1</Checkbox>
                      <Checkbox value="option2">选项2</Checkbox>
                      <Checkbox value="option3">选项3</Checkbox>
                    </Checkbox.Group>
                  </div>

                  <div>
                    <Text>单选框:</Text>
                    <Radio.Group style={{ marginLeft: 8 }}>
                      <Radio value="a">选项A</Radio>
                      <Radio value="b">选项B</Radio>
                      <Radio value="c">选项C</Radio>
                    </Radio.Group>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tab="数据展示" key="3">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card title="表格组件" size="small">
                <Table
                  dataSource={tableData}
                  columns={tableColumns}
                  pagination={{ pageSize: 5 }}
                  size="small"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="列表组件" size="small">
                <List
                  itemLayout="horizontal"
                  dataSource={listData}
                  size="small"
                  renderItem={(item) => (
                    <List.Item
                      actions={[
                        <Button type="link" key="edit">
                          编辑
                        </Button>,
                        <Button type="link" key="more">
                          更多
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar style={{ backgroundColor: '#1890ff' }}>
                            {item.avatar}
                          </Avatar>
                        }
                        title={item.title}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>

          <Divider />

          <Card title="折叠面板" size="small">
            <Collapse>
              <Panel header="面板1 - 基础信息" key="1">
                <p>这是第一个面板的内容。可以包含任意的React组件。</p>
                <Button type="primary" size="small">
                  操作按钮
                </Button>
              </Panel>
              <Panel header="面板2 - 高级设置" key="2">
                <p>这是第二个面板的内容。支持嵌套组件和交互功能。</p>
                <Space>
                  <Button size="small">确定</Button>
                  <Button size="small">取消</Button>
                </Space>
              </Panel>
              <Panel header="面板3 - 帮助信息" key="3">
                <p>这是第三个面板的内容。可以用来展示帮助文档或说明。</p>
              </Panel>
            </Collapse>
          </Card>
        </TabPane>

        <TabPane tab="导航组件" key="4">
          <Card title="面包屑导航" size="small" style={{ marginBottom: 16 }}>
            <Breadcrumb>
              <Breadcrumb.Item href="">
                <HomeOutlined />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <UserOutlined />
                <span>用户管理</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>用户列表</Breadcrumb.Item>
              <Breadcrumb.Item>用户详情</Breadcrumb.Item>
            </Breadcrumb>
          </Card>

          <Card title="交互组件" size="small">
            <Space wrap>
              <Tooltip title="这是一个提示信息">
                <Button>悬停提示</Button>
              </Tooltip>

              <Popover content={popoverContent} title="弹出框标题">
                <Button>点击弹出</Button>
              </Popover>

              <Button icon={<LikeOutlined />}>
                点赞
              </Button>

              <Button icon={<HeartOutlined />} type="primary" danger>
                收藏
              </Button>
            </Space>
          </Card>
        </TabPane>
      </Tabs>

      {/* 模态框 */}
      <Modal
        title="模态框示例"
        open={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        width={500}
      >
        <p>这是一个模态框的内容示例。</p>
        <p>模态框支持各种配置选项：</p>
        <ul>
          <li>自定义宽度和高度</li>
          <li>确定和取消按钮</li>
          <li>遮罩层点击关闭</li>
          <li>键盘ESC关闭</li>
        </ul>
        <Alert
          message="提示"
          description="模态框内可以嵌套任意组件"
          type="info"
          showIcon
        />
      </Modal>

      {/* 抽屉 */}
      <Drawer
        title="抽屉组件示例"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        width={400}
      >
        <div>
          <Title level={4}>抽屉内容</Title>
          <Paragraph>
            抽屉组件可以从四个方向滑出，常用于展示详细信息或者侧边栏导航。
          </Paragraph>
          
          <Divider />
          
          <Space direction="vertical" style={{ width: '100%' }}>
            <Button type="primary" block>
              主要操作
            </Button>
            <Button block>次要操作</Button>
            <Button danger block onClick={() => setDrawerVisible(false)}>
              关闭抽屉
            </Button>
          </Space>

          <Divider />

          <Alert
            message="功能说明"
            description="抽屉组件适用于需要临时显示大量信息的场景"
            type="success"
            showIcon
          />
        </div>
      </Drawer>
    </div>
  );
};

export default AntdShowcase;