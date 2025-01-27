import React from 'react'

import Header from './components/Header'
import './index.css';
import About from './components/About';
import Projects from './components/Projects';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default App