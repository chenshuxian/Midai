import { GET_ACTIVITY_LIST } from "../actionTypes";
export function getActivityList(list) {
  return { type: GET_ACTIVITY_LIST, payload: list };
}
