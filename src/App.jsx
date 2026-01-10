import React from 'react'
import { Navbar,Welcome,Dock } from './components/index'
import { gsap } from 'gsap'
import Draggable from 'gsap/Draggable';
import { Terminal,Safari, Resume, Finder } from '#windows';

//import { Terminal } from './windows/index';
gsap.registerPlugin(Draggable);



const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
    </main>
  )
}

export default App