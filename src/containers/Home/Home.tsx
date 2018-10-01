import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeHeaderTitle } from '../../actions';
import './Home.css';

const styles: React.CSSProperties = {fontWeight: 400};

interface Props {
  changeHeaderTitle: (data : string) => any;
}


class Home extends React.Component<Props, {}> {
  public componentDidMount() {
    this.props.changeHeaderTitle('Popular Titles');
  }
  
  public render() {
    return (
      <div className="container">
        <div className="home-container">
          <div className="box-container">
            <Link to='/series' style={{ textDecoration: 'none', color: '#fff' }}>
              <div className="box">
                <h1 style={styles}>SERIES</h1>
              </div>
            </Link>
            <div className="box-under-title"><p>Popular Series</p></div>
          </div>
          <div className="box-container">
            <Link to='/movies' style={{ textDecoration: 'none', color: '#fff' }}>
              <div className="box">
                <h1 style={styles}>MOVIES</h1>
              </div>
            </Link>
            <div className="box-under-title"> <p>Popular Movies</p></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  changeHeaderTitle: (data:string) => dispatch(changeHeaderTitle(data)),
});

export default connect(null, mapDispatchToProps)(Home);
