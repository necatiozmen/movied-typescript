import * as React from 'react';
import { connect } from 'react-redux';
import { getMovies, changeHeaderTitle } from '../../actions';
import Content from '../../components/Content/Content';

interface Props {
  movies: Array<any>,
  isReady: boolean,
  isSomethingWrong: boolean,
  getMovies: () => void
  changeHeaderTitle: (data : string) => any;
}

class Movies extends React.Component<Props, {}> {
  public componentDidMount() {
    this.props.getMovies();
    this.props.changeHeaderTitle('Popular Movies');
  };

  public render() {
    return (
      <Content
        entries={this.props.movies}
        isReady={this.props.isReady}
        isSomethingWrong={this.props.isSomethingWrong}
      />
    );
  }
}

const mapStateToProps = (state:any) => ({
  movies: state.movieList.movies,
  isReady: state.movieList.getEntriesFromDatabase,
  isSomethingWrong: state.movieList.getEntriesFromDatabaseFailed,
});

const mapDispatchToProps = (dispatch: any) => ({
  getMovies: () => dispatch(getMovies()),
  changeHeaderTitle: (data: string) => dispatch(changeHeaderTitle(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Movies);
