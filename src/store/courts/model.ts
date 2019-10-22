export type Courts = {
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
};

export enum CourtsActionTypes {
  FETCH_REQUEST = "FETCH_COURTS_REQUEST",
  FETCH_SUCCESS = "FETCH_COURTS_SUCCESS",
  FETCH_ERROR = "FETCH_COURTS_ERROR"
}

export interface ICourtsState {
  readonly items: Courts[];
  readonly loading: boolean;
  readonly errors?: string;
}
