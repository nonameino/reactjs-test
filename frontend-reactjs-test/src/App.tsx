import React from 'react';
import ViewBanner from './components/ViewBanner';
import ViewEvents from './components/ViewEvents';
import ViewRegister from './components/ViewRegister';
import { ViewStickyBottom, ViewStickyTop } from './components/ViewSticky';

import './css/utils.scss';

function App() {

  return (
    <>
      <ViewStickyTop />
      <ViewBanner />
      <ViewRegister />
      <ViewEvents />
      <ViewStickyBottom />
    </>
  );
}

export default App;
