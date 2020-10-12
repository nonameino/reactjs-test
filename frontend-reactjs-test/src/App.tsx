import React from 'react';
import './App.css';
import ViewBanner from './components/ViewBanner';
import ViewEvents from './components/ViewEvents';
import ViewFooter from './components/ViewFooter';
import ViewRegister from './components/ViewRegister';
import { ViewStickyBottom, ViewStickyTop } from './components/ViewSticky';

import './css/utils.scss';

function App() {
  return (
    <div className='App'>
      <ViewStickyTop />
      <ViewBanner />
      <ViewRegister />
      <ViewEvents />
      <ViewFooter />
      <ViewStickyBottom />
    </div>
  );
}

export default App;
