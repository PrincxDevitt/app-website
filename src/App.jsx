import React from 'react'

import Header from './components/Header'
import './index.css';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App