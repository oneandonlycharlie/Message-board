import { useState } from 'react'
import './styles/App.css'
import Nav from './components/navigation'
import Board from './components/board'



function App() {

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Board />
      </main>
      <footer>Contacts goes here</footer>
    </>
  )
}

export default App
