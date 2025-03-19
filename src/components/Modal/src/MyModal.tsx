import React, { useState } from "react"
import { Modal, Button } from 'antd';
import { adminPanelType } from "@/config"
import { IAdminPanelType, EAdminPanelState } from "@/types"


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
      default:
        setVisibleAdmin(true)
        break;
    }
    setVisibleAdmin(true)
    setIsShowAdmin(false)
  }
  return (<>
    <Modal
      title="请选择进入哪一个面板"
      footer={[<Button key="back" style={{ display: !visibleAdmin ? 'none' : '' }} onClick={() => { setIsShowAdmin(false); setVisibleAdmin(false) }}>退出面板</Button>]}
      open={isShowAdmin} onCancel={() => setIsShowAdmin(false)}>
      {
        adminPanelType.map((item, index) => <Button key={index} onClick={toAdmin(item)} type={item.type}>{item.name}</Button>)
      }
    </Modal>
  </>)
}