import { siteConfig } from '@/config/site';
import { SiteManager } from './SiteManager';

export const siteManager = new SiteManager(siteConfig);

export { SiteManager };
