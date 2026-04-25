import { EAdminPanelState } from '@/types';
import type React from 'react';
import AntdShowcase from './templates/AntdShowcase';
import Links from './templates/Links';
import SiteAdmin from './templates/SiteAdmin';
import ThemeAdmin from './templates/ThemeAdmin';
import VersionAdmin from './templates/VersionAdmin';

type AdminPanelProps = {
  config: EAdminPanelState;
};

export const AdminPanel: React.FC<AdminPanelProps> = (props) => {
  console.log('AdminPanel', props.config);
  switch (props.config) {
    case EAdminPanelState.THEME_ADMIN_PANEL:
      return <ThemeAdmin />;
    case EAdminPanelState.SITE_ADMIN_PANEL:
      return <SiteAdmin />;
    case EAdminPanelState.LINKS_ADMIN_PANEL:
      return <Links />;
    case EAdminPanelState.VERSION_ADMIN_PANEL:
      return <VersionAdmin />;
    case EAdminPanelState.ANTD_SHOWCASE_PANEL:
      return <AntdShowcase />;
    default:
      return <div>未知面板</div>;
  }
};
