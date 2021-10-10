import { homeActionTypes } from '../../actionTypes';

export default function homeActionCloseModal() {
  return async dispatch => {
    return dispatch({ type: homeActionTypes.CLOSE_MODAL });
  };
}
