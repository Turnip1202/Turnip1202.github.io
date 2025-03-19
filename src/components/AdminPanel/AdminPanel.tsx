import React from 'react';
import { EAdminPanelState } from '@/types';
import Links from './templates/Links';




type AdminPanelProps = {
    config: EAdminPanelState
}


export const AdminPanel: React.FC<AdminPanelProps> = (props) => {
    switch (props.config) {
        case EAdminPanelState.THEME_ADMIN_PANEL:
            return (<div>主题管理面板(未完成)</div>)
        case EAdminPanelState.SITE_ADMIN_PANEL:
            return (<div>网站管理面板(未完成)</div>)
        case EAdminPanelState.LINKS_ADMIN_PANEL:
            return (<Links></Links>)
        default:
            return (<div>未知面板</div>)
    }

}