import React from 'react'

import { Contact, Footer, Header, Resources, Trade} from './containers';
import {  Navbar } from './components';
import './App.css';
import CoolMarquee from './containers/marquee/CoolMarquee';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg"> 
        <Navbar />
        <Header />
        <Trade />
        <Resources />
        <CoolMarquee />
        <Contact />
      </div>     
      
      <Footer /> 
    </div>
  )
}

export default App
