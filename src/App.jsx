import { useState } from 'react'
import Header from './Header/header.jsx'
import GoalList from './List/GoalsList.jsx'   
import Navigation from './Options/Navigation.jsx'
import Footer from './Footer/Footer.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <div className="flex flex-col min-h-screen">
      <Header/>

      <main className="flex-grow w-full grid grid-cols-3 gap-4 gap-6">
        <Navigation />
        <GoalList />
      </main>

      <Footer/>
    </div>
  )
}

export default App
