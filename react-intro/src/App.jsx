import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Footer from './assets/components/Footer'
import Main from './assets/components/Main'
import Header from './assets/components/Header'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
