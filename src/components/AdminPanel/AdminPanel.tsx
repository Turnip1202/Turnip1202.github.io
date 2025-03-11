import React from 'react';
import { EAdminPanelState } from '@/types';




type AdminPanelProps = {
    config: EAdminPanelState
}


const ThemeAdminPanel: React.FC<AdminPanelProps> = (props) => {
    switch (props.config) {
        case EAdminPanelState.THEME_ADMIN_PANEL:
            return (<div>主题管理面板</div>)
        case EAdminPanelState.SITE_ADMIN_PANEL:
            return (<div>网站管理面板</div>)
        case EAdminPanelState.LINKS_ADMIN_PANEL:
            return (<div>链接管理面板</div>)
        default:
            return (<div>未知面板</div>)
    }

}