import { EAdminPanelState } from '@types';

export const proxyFn = (visibleAdmin:any,
    al:string,
    setIsShow:any,
    setVisibleAdmin:any) =>()=> {
        if (!visibleAdmin) {
          const show = prompt(al)
          if (show === null || show === "") return;
          console.log(show);
          switch (show) {
            case "1":
              setIsShow(EAdminPanelState.THEME_ADMIN_PANEL);
              break;
            case "2":
              setIsShow(EAdminPanelState.SITE_ADMIN_PANEL);
              break;
            case "3":
              setIsShow(EAdminPanelState.LINKS_ADMIN_PANEL);
              break;
            default:
              break;
          }
        }
        setVisibleAdmin(!visibleAdmin);
  }