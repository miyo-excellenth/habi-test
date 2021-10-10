import { homeActionTypes } from '../../actionTypes';

export default function homeActionPreviousStep() {
  return async dispatch => {
    return dispatch({ type: homeActionTypes.PREVIOUS_STEP });
  };
}
