export interface ConfigVersion {
  id: string;
  name: string;
  description?: string;
  timestamp: number;
  data: {
    site: any;
    theme: any;
    links: any;
  };
  tags?: string[];
  isAutoSaved?: boolean;
}

export interface VersionManager {
  versions: ConfigVersion[];
  currentVersionId?: string;
  maxVersions: number;
}

export interface VersionCreateOptions {
  name: string;
  description?: string;
  tags?: string[];
  isAutoSaved?: boolean;
}

export interface VersionCompareResult {
  changes: {
    site?: string[];
    theme?: string[];
    links?: string[];
  };
  summary: string;
}