
import { IAdminPanelType, EAdminPanelState } from "@/types"

export const adminPanelType:IAdminPanelType[] = [
  {
    name: "链接配置面板",
    type: "default" as const,
    value:EAdminPanelState.LINKS_ADMIN_PANEL
  },
  {
    name:"主题配置面板",
    type: "primary" as const,
    value:EAdminPanelState.THEME_ADMIN_PANEL
  },
  {
    name:"网站配置面板",
    type: "dashed" as const,
    value:EAdminPanelState.SITE_ADMIN_PANEL
  },
  {
    name:"配置版本管理",
    type: "dashed" as const,
    value:EAdminPanelState.VERSION_ADMIN_PANEL
  },
  {
    name:"Ant Design 展示",
    type: "link" as const,
    value:EAdminPanelState.ANTD_SHOWCASE_PANEL
  }
]