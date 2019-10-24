import { action } from "typesafe-actions";
import { SchoolActionTypes, Schools } from "./model";

export const fetchRequest = () => action(SchoolActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: Schools[]) => {
  return action(SchoolActionTypes.FETCH_SUCCESS, data);
};

export const fetchError = (message: string) =>
  action(SchoolActionTypes.FETCH_ERROR, message);
