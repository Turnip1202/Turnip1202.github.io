
import { IAdminPanelType, EAdminPanelState } from "@/types"

export const adminPanelType:IAdminPanelType[] = [
  {
    name: "链接配置面板",
    type: "link" as const,
    value:EAdminPanelState.LINKS_ADMIN_PANEL
  },
  {
    name:"主题配置面板",
    type: "link" as const,
    value:EAdminPanelState.THEME_ADMIN_PANEL
  },
  {
    name:"网站配置面板",
    type: "link" as const,
    value:EAdminPanelState.SITE_ADMIN_PANEL
  }
]