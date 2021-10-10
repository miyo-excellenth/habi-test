import { homeActionTypes } from '../actionTypes';

const initialState = {
  modal: {
    isOpen: false,
  },
  form: {
    name: '',
  },
  steps: {
    index: 0,
    limit: 0,
  },
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case homeActionTypes.OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: true,
        },
      };

    case homeActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: false,
        },
      };

    case homeActionTypes.FORM_CHANGE_NAME:
      return {
        ...state,
        form: {
          ...state.form,
          name: action.payload,
        },
      };

    case homeActionTypes.CHANGE_STEP_LIMIT:
      return {
        ...state,
        steps: {
          ...state.steps,
          limit: action.payload,
        },
      };

    case homeActionTypes.NEXT_STEP:
      if (state.steps.index + 1 > state.steps.limit) return state;

      return {
        ...state,
        steps: {
          ...state.steps,
          index: state.steps.index + 1,
        },
      };

    case homeActionTypes.PREVIOUS_STEP:
      if (state.steps.index - 1 < 0) return state;

      return {
        ...state,
        steps: {
          ...state.steps,
          index: state.steps.index - 1,
        },
      };

    default:
      return state;
  }
}
