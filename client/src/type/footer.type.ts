export interface FooterDetailPopular {
  key: string;
  content: string;
}
export type FooterDetailsPopular = FooterDetailPopular[]
export interface FooterCategoryContent {
  key: string;
  content: FooterDetailsPopular;
}
