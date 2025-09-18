import React, { useState } from "react"
import { Modal, Button, Space, Row, Col, Typography, Card } from 'antd';
import { 
  LinkOutlined, 
  BgColorsOutlined, 
  SettingOutlined, 
  RocketOutlined 
} from '@ant-design/icons';
import { adminPanelType } from "@/config"
import { IAdminPanelType, EAdminPanelState } from "@/types"

  const getIcon = (panelType: EAdminPanelState) => {
    switch (panelType) {
      case EAdminPanelState.LINKS_ADMIN_PANEL:
        return <LinkOutlined />;
      case EAdminPanelState.THEME_ADMIN_PANEL:
        return <BgColorsOutlined />;
      case EAdminPanelState.SITE_ADMIN_PANEL:
        return <SettingOutlined />;
      case EAdminPanelState.ANTD_SHOWCASE_PANEL:
        return <RocketOutlined />;
      default:
        return null;
    }
  };

  const getDescription = (panelType: EAdminPanelState) => {
    switch (panelType) {
      case EAdminPanelState.LINKS_ADMIN_PANEL:
        return '管理链接分类和搜索引擎配置';
      case EAdminPanelState.THEME_ADMIN_PANEL:
        return '自定义主题风格和外观设置';
      case EAdminPanelState.SITE_ADMIN_PANEL:
        return '网站基本信息和SEO配置';
      case EAdminPanelState.ANTD_SHOWCASE_PANEL:
        return '查看Ant Design组件展示';
      default:
        return '';
    }
  };


interface IProps {
  visibleAdmin: boolean
  setIsShowAdmin: (isShowAdmin: boolean) => void
  setVisibleAdmin: (visibleAdmin: boolean) => void
  setToConfig: (toConfig: EAdminPanelState) => void
  isShowAdmin: boolean
}

export const MyModal: React.FC<IProps> = ({ visibleAdmin, setIsShowAdmin, setVisibleAdmin, setToConfig, isShowAdmin }) => {
  const toAdmin = (pannel: IAdminPanelType) => () => {
    console.log("toAdmin", pannel)
    switch (pannel.value) {
      case EAdminPanelState.LINKS_ADMIN_PANEL:
        setToConfig(EAdminPanelState.LINKS_ADMIN_PANEL);
        break;
      case EAdminPanelState.THEME_ADMIN_PANEL:
        setToConfig(EAdminPanelState.THEME_ADMIN_PANEL);
        break;
      case EAdminPanelState.SITE_ADMIN_PANEL:
        setToConfig(EAdminPanelState.SITE_ADMIN_PANEL);
        break;
      case EAdminPanelState.ANTD_SHOWCASE_PANEL:
        setToConfig(EAdminPanelState.ANTD_SHOWCASE_PANEL);
        break;
      default:
        setVisibleAdmin(true)
        break;
    }
    setVisibleAdmin(true)
    setIsShowAdmin(false)
  }
  return (<>
    <Modal
      title="选择管理面板"
      footer={[
        <Button 
          key="back" 
          style={{ display: !visibleAdmin ? 'none' : '' }} 
          onClick={() => { setIsShowAdmin(false); setVisibleAdmin(false) }}
        >
          退出面板
        </Button>
      ]}
      open={isShowAdmin} 
      onCancel={() => setIsShowAdmin(false)}
      width={800}
    >
      <Row gutter={[16, 16]}>
        {adminPanelType.map((item, index) => (
          <Col span={12} key={index}>
            <Card
              hoverable
              onClick={toAdmin(item)}
              style={{ height: '120px', cursor: 'pointer' }}
            >
              <Space direction="vertical" align="center" style={{ width: '100%' }}>
                <div style={{ fontSize: '24px', color: '#1890ff' }}>
                  {getIcon(item.value)}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    {getDescription(item.value)}
                  </div>
                </div>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Modal>
  </>)
}