export interface SourceType {
  id: string;
  name: string;
  size: number;
  mime: string;
  position: string;
  cid: string;
  mediaInfo: { duration: number };
}

export interface CategoryType {
  id: string;
  name: string;
  createTime: number;
}

export interface AppData {
  sources: Array<SourceType>;
  categories: Array<CategoryType>;
  showSide: boolean;
}
