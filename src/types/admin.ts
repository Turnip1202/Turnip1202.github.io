export enum EAdminPanelState {
  THEME_ADMIN_PANEL = 0,
  SITE_ADMIN_PANEL = 1,
  LINKS_ADMIN_PANEL = 2,
  VERSION_ADMIN_PANEL = 3,
  ANTD_SHOWCASE_PANEL = 4,
}
declare const ButtonTypes: readonly [
  'default',
  'primary',
  'dashed',
  'link',
  'text',
];
export type ButtonType = (typeof ButtonTypes)[number];

export interface IAdminPanelType {
  name: string;
  type: ButtonType;
  value: EAdminPanelState;
}
