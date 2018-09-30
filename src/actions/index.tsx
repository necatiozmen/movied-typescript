import { API } from '../middlewares/api';
import { actionTypes } from '../constants/actionTypes';

export const getMovies = () => ({
  type: actionTypes.GET_MOVIES,
  [API]: {
    endpoint: '/v1/api/feed/movies',
    method: 'GET',
  },
});

export const getSeries = () => ({
  type: actionTypes.GET_SERIES,
  [API]: {
    endpoint: '/v1/api/feed/series',
    method: 'GET',
  },
});

export const changeHeaderTitle = (data:string) => ({
  type: actionTypes.CHANGE_HEADER_TITLE,
  data,
});
