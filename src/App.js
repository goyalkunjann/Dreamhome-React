
import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Steps from './components/Steps/Steps';
import Onestop from './components/Onestop/Onestop';
import Section from './components/Section/Section'; 
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import MeetingSteps from './components/MeetingSteps/MeetingSteps';  


function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Steps />
      <Onestop />
      <MeetingSteps />
     <Section/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
