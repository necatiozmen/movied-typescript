import { actionTypes } from '../constants/actionTypes';

const defaultState = {
  headerTitle: '',
};

const headerType = (state = defaultState, action:any) => {
  switch (action.type) {
    case actionTypes.CHANGE_HEADER_TITLE:
      return { ...state, headerTitle: action.data };
    default:
      return state;
  }
};

export default headerType;
