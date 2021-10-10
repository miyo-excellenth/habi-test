import { homeActionTypes } from '../../actionTypes';

export default function homeActionNextStep() {
  return async dispatch => {
    return dispatch({ type: homeActionTypes.NEXT_STEP });
  };
}
