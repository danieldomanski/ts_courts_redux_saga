import { action } from "typesafe-actions";
import { CourtsActionTypes, Courts } from "./model";

export const fetchRequest = () => action(CourtsActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: Courts[]) => {
  return action(CourtsActionTypes.FETCH_SUCCESS, data);
};

export const fetchError = (message: string) =>
  action(CourtsActionTypes.FETCH_ERROR, message);
