import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div class="content">
        {/*<Profile /> */}
        <Dialogs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
