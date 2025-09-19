export enum EAdminPanelState {
  THEME_ADMIN_PANEL,
  SITE_ADMIN_PANEL,
  LINKS_ADMIN_PANEL,
  VERSION_ADMIN_PANEL,
  ANTD_SHOWCASE_PANEL
}
declare const ButtonTypes: readonly ["default", "primary", "dashed", "link", "text"]
export type ButtonType = (typeof ButtonTypes)[number];


export interface IAdminPanelType {
  name: string
  type: ButtonType
  value: EAdminPanelState
}