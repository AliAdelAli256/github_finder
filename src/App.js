import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Home from './components/pages/Home';
import PageNotFound from './components/pages/PageNotFound';
import ALert from './components/layout/ALert';
import About from './components/pages/About';

import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <ALert />
              <Routes>
                <Route exact path={`/`} element={<Home />} />
                <Route exact path={`/about`} element={<About />} />
                <Route exact path={`/user/:Login`} element={<User />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
