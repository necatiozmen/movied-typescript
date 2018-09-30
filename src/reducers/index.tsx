import { combineReducers } from 'redux';
import { SerieList, MovieList, HeaderType } from '../model';
import movies from './movies';
import series from './series';
import headerType from './headerType';

 interface State {
    movieList: MovieList[];
    serieList: SerieList[];
    headerType: HeaderType;
}

export default combineReducers<State>({
  movieList: movies,
  serieList: series,
  headerType: headerType,
});
