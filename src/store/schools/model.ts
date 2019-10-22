export type Schools = {
  resource_uri: string;
  id: number;
  is_alias_of: string;
  date_created: Date;
  date_modified: Date;
  name: string;
  ein?: any;
};

export enum SchoolActionTypes {
  FETCH_REQUEST = "FETCH_REQUEST",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR"
}

export interface ISchoolsState {
  readonly items: Schools[];
  readonly loading: boolean;
  readonly errors?: string;
}
