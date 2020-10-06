import React from 'react';
import HotSpotBanner from './components/hotspot/HotspotBanner';
import ImageSlider from './components/ImageSlider';
import RegisterForm from './components/register/RegisterForm';
import StickyBottom from './components/stickybar/StickyBottom';
import StickyTop from './components/stickybar/StickyTop';

function App() {

  return (
    <>
      <StickyTop />
      <HotSpotBanner />
      <RegisterForm />
      <ImageSlider />
      <StickyBottom />
    </>
  );
}

export default App;
