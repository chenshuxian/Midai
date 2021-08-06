import { SET_PAGE_POSITION } from "../actionTypes";
export function setPagePosition(page) {
  return { type: SET_PAGE_POSITION, payload: page };
}
