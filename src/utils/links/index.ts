import { LinksManager } from "./LinksManager"
import { linkCategories, searchEngines } from '@/config/links';

export const linksManager = new LinksManager(linkCategories, searchEngines);
export {
  LinksManager
}