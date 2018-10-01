import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Home';
import Series from './Series/Series';
import Movies from './Movies/Movies';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App-container">
            <Header />
            <Route exact={true} path="/" component={Home}/>
            <Route exact path="/series" component={Series}/>
            <Route exact path="/movies" component={Movies}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
