import { SiteManager } from "./SiteManager"
import { siteConfig } from '@/config/site';


export const siteManager = new SiteManager(siteConfig)


export {
  SiteManager
}