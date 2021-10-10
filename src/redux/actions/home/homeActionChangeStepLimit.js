import { homeActionTypes } from '../../actionTypes';
import PropTypes from 'prop-types';

homeActionChangeStepLimit.protoType = PropTypes.number.isRequired;

export default function homeActionChangeStepLimit(limit = 0) {
  return async dispatch => {
    return dispatch({ type: homeActionTypes.CHANGE_STEP_LIMIT, payload: limit });
  };
}
