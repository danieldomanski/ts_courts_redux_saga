export interface Courts {
  resource_uri: string;
  id: string;
  pacer_court_id?: any;
  pacer_has_rss_feed?: any;
  fjc_court_id: string;
  date_modified: Date;
  in_use: boolean;
  has_opinion_scraper: boolean;
  has_oral_argument_scraper: boolean;
  position: number;
  citation_string: string;
  short_name: string;
  full_name: string;
  url: string;
  start_date: string;
  end_date?: any;
  jurisdiction: string;
}

export interface Schools {
  resource_uri: string;
  id: number;
  is_alias_of: string;
  date_created: Date;
  date_modified: Date;
  name: string;
  ein?: any;
}
