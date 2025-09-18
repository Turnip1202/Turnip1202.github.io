import React from 'react';
import { EAdminPanelState } from '@/types';
import Links from './templates/Links';
import ThemeAdmin from './templates/ThemeAdmin';
import SiteAdmin from './templates/SiteAdmin';
import AntdShowcase from './templates/AntdShowcase';




type AdminPanelProps = {
    config: EAdminPanelState
}


export const AdminPanel: React.FC<AdminPanelProps> = (props) => {
    console.log('AdminPanel', props.config);
    switch (props.config) {
        case EAdminPanelState.THEME_ADMIN_PANEL:
            return (<ThemeAdmin />)
        case EAdminPanelState.SITE_ADMIN_PANEL:
            return (<SiteAdmin />)
        case EAdminPanelState.LINKS_ADMIN_PANEL:
            return (<Links />)
        case EAdminPanelState.ANTD_SHOWCASE_PANEL:
            return (<AntdShowcase />)
        default:
            return (<div>未知面板</div>)
    }

}