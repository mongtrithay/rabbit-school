import './App.css'
import Menu from './companents/Menu'
import ButtonDonate from './companents/ButtonDonate'
import ButtonReadMore from './companents/ButtonReadMore'
import ButtonTranslate from './companents/ButtonTranslate'
import Footer from './companents/Footer'
import KeyFigures from './companents/KeyFigures'
import Homepage from './pages/Home'
import OurAction from './pages/OurAction'
import DetailOurAction1 from './pages/DetailOurAction1'
import DetailOurAction2 from './pages/DetailOurAction2'
import DetailOurAction3 from './pages/DetailOurAction3'
import DetailOurAction4 from './pages/DetailOurAction4'
import PlayerComponent from './companents/Video'
import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './companents/Video';
// import ImageSlider from './companents/Slider'
import AboutPage from './pages/About'





function App() {

  return (
    <>

    {/* <Involved /> */}
    <Homepage/>
    <OurAction/>
    <DetailOurAction1/>
    <DetailOurAction2/>
    <DetailOurAction3/>
    <DetailOurAction4/>
    {/* <SliderPartner /> */}
    
    {/* <KeyFigures /> */}

    {/* <Menu /> */}

    {/* <AboutPage/> */}


    </>
  )
}


export default App;
