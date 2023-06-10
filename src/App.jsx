import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import './App.css'
import Card from './components/Card/Card'

function App() {

  return (
    <div className="App">
      <section className='navbar-section'>
      <Navbar/>
      </section>

      <section className='slider-section'>

      </section>


      <section className='next_releases-section'>
        <Title title="Próximos Estrenos"/>
      </section>


      <section className='login-section'>
        <Card/>
      </section>
    

      <Footer/>

    </div>
  )
}

export default App
