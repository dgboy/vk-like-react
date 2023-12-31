import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = props => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
          <Route path='/profile' render={ () => <Profile state={ props.state.profilePage } /> } />
          <Route path='/dialogs' render={ () => <Dialogs state={ props.state.dialogsPage } dispatch={props.dispatch}/> }/>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
