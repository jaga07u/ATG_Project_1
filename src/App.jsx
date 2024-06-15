/* eslint-disable no-unused-vars */
import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Header from './Components/Header'
import Section from './Components/Section'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full min-h-[100vh] font-ibm-plex-sans">
        <Nav/>
        <Header/>
        <Section/>
      </div>
    </>
  )
}

export default App
