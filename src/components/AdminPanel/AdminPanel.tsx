import React from 'react';


enum AdminPanelState {
    THEME_ADMIN_PANEL,
    SITE_ADMIN_PANEL,
    LINKS_ADMIN_PANEL
}

interface AdminPanelProps {
    theme: AdminPanelState.THEME_ADMIN_PANEL
    site: AdminPanelState.SITE_ADMIN_PANEL
    links: AdminPanelState.LINKS_ADMIN_PANEL
}









const ThemeAdminPanel: React.FC<AdminPanelProps> = (props) => {




    return (<>测试</>)
}