import * as React from 'react';
import { connect } from 'react-redux';
import { getSeries, changeHeaderTitle } from '../../actions';
import Content from '../../components/Content/Content';

interface Props {
    series: Array<any>,
    isReady: boolean,
    isSomethingWrong: boolean,
    getSeries: () => void
    changeHeaderTitle: (data : string) => any;
}


class Series extends React.Component<Props, {}> {
  public componentDidMount() {
    this.props.getSeries();
    this.props.changeHeaderTitle('Popular Movies');
  };

  public render() {
    return (
      <Content
        entries={this.props.series}
        isReady={this.props.isReady}
        isSomethingWrong={this.props.isSomethingWrong}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  series: state.serieList.series,
  isReady: state.serieList.getEntriesFromDatabase,
  isSomethingWrong: state.serieList.getEntriesFromDatabaseFailed,
});

const mapDispatchToProps = (dispatch: any) => ({
  getSeries: () => dispatch(getSeries()),
  changeHeaderTitle: (data: string) => dispatch(changeHeaderTitle(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Series);
