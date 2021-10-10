import { homeActionTypes } from '../../actionTypes';

export default function homeActionOpenModal() {
  return async dispatch => {
    return dispatch({ type: homeActionTypes.OPEN_MODAL });
  };
}
