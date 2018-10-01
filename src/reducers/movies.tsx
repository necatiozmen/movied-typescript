import { actionTypes } from '../constants/actionTypes';
import { MovieList } from '../model';

const movies = (state : MovieList[] = [], action:any) => {
  switch (action.type) {
    case actionTypes.GET_MOVIES_REQUEST:
      return { ...state, getEntriesFromDatabase: false };
    case actionTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.data,
        getEntriesFromDatabase: true,
      };
    case actionTypes.GET_MOVIES_FAILURE:
      return { ...state, getEntriesFromDatabaseFailed: true };
    default:
      return state;
  }
};

export default movies;
