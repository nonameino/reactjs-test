import React from 'react';
import EventsNPromotions from './components/events_promo/EventsNPromotions';
import HotSpotBanner from './components/hotspot/HotspotBanner';
import RegisterForm from './components/register/RegisterForm';
import StickyBottom from './components/stickybar/StickyBottom';
import StickyTop from './components/stickybar/StickyTop';

function App() {

  return (
    <>
      <StickyTop />
      <HotSpotBanner />
      <RegisterForm />
      <EventsNPromotions />
      <StickyBottom />
    </>
  );
}

export default App;
