import React from 'react';
import EventsNPromotions from './components/events_promo/EventsNPromotions';
import HotSpotBanner from './components/hotspot/HotspotBanner';
import RegisterForm from './components/register/RegisterForm';
import StickyBottom from './components/stickybar/StickyBottom';
import StickyTop from './components/stickybar/StickyTop';
import ViewBanner from './components/ViewBanner';
import { ViewStickyBottom, ViewStickyTop } from './components/ViewSticky';

import './css/utils.scss';

function App() {

  return (
    <>
      {/* <StickyTop /> */}
      {/* <HotSpotBanner /> */}
      <ViewStickyTop />
      <ViewBanner />
      <RegisterForm />
      <EventsNPromotions />
      <ViewStickyBottom />
      {/* <StickyBottom /> */}
    </>
  );
}

export default App;
