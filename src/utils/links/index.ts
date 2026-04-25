import { linkCategories, searchEngines } from '@/config/links';
import { LinksManager } from './LinksManager';

export const linksManager = new LinksManager(linkCategories, searchEngines);
export { LinksManager };
