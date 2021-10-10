import { homeActionTypes } from '../../actionTypes';
import PropTypes from 'prop-types';

homeActionChangeInputForm.propTypes = {
  inputFormType: PropTypes.oneOf([homeActionTypes.FORM_CHANGE_NAME]),
  value: PropTypes.string.isRequired,
};

export default function homeActionChangeInputForm(inputFormType, value) {
  return async dispatch => {
    if (inputFormType) {
      return dispatch({ type: inputFormType, payload: value });
    }

    return;
  };
}
