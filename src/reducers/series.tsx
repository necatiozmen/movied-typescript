import { actionTypes } from '../constants/actionTypes';
import { SerieList } from '../model';

const series = (state : SerieList[] = [], action:any) => {
  switch (action.type) {
    case actionTypes.GET_SERIES_REQUEST:
      return { ...state, getEntriesFromDatabase: false };
    case actionTypes.GET_SERIES_SUCCESS:
      return {
        ...state,
        series: action.data,
        getEntriesFromDatabase: true,
      };
    case actionTypes.GET_SERIES_FAILURE:
      return { ...state, getEntriesFromDatabaseFailed: true };
    default:
      return state;
  }
};

export default series;
