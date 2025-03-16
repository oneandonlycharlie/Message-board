import { useState,useEffect } from 'react'
import './styles/App.css'
import Nav from './components/navigation'
import Board from './components/board'



function App() {
  const [messages,setMessages] = useState([])
  useEffect(()=>{
    fetch("./api/message")
    .then((res)=> res.json())
    .then((res)=>{
      setMessages(res.data)
    })
  },[])
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Board messages={messages}/>
      </main>
      <footer><a href=""><img src="github-mark.svg" alt="" /></a></footer>
    </>
  )
}

export default App
