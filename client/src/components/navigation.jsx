import 'boxicons';
import "../styles/navigation.css"
import { useState } from 'react';

function Nav(){
    const [theme, setTheme] = useState("dark")
    const root = document.documentElement

    const [isOpen, setWindow] = useState(false)

    root.className = theme
    const switchThme = ()=>{
        root.className == 'dark'? setTheme("light"):setTheme("dark")
    }

    const openWindow = ()=>{
        setWindow(true)
    }

    const closeWindow = ()=>{
        setWindow(false)
    }

    return(
        <>
            <div className='title'>
                <h3>Message Board</h3>
            </div>
            <button onClick={openWindow}className='edit'><box-icon class='icon'name='edit-alt'></box-icon></button>
            <button onClick={switchThme}
            className='switch'><box-icon class='icon' name='sun'></box-icon></button>
            {isOpen? <NewMessage closeWindow={closeWindow} /> : <></>}
        </>
    )
}

function NewMessage({closeWindow}){
const [errorMessage,setMessage] = useState({name:"",message:""})
const validateMessage = (e)=>{
    console.log(e)
    const name = e.target[1].value;
    const message = e.target[2].value;
    // if user inputs empty string, show error message and stop form submission
    if (name.trim() == ""){
        setMessage((prev)=>({ ...prev, name:"Please tell us your name."}))
        console.log(name.trim() == "")
        console.log(errorMessage)
        e.preventDefault();
    } else {
        setMessage((prev)=>({ ...prev, name:""}))
    } 
    if (message.trim() == ""){
        console.log(message.trim() == "")
        setMessage((prev)=>({ ...prev, message:"Your massage is empty."}))
        console.log(errorMessage)
        e.preventDefault()
    } else {
        setMessage((prev)=>({ ...prev, message:""}))
    }
}
    return(
        <div className="window" >
            <form action="/api/message" method='POST' onSubmitCapture={validateMessage}>
                <button onClick={closeWindow}className="close">Close</button>
                <label htmlFor="name">Name<span>{errorMessage.name}</span></label>
                <input type="text" name="name" id="name" placeholder="Your name" />
                <label htmlFor="massage">A message to your past self:<span>{errorMessage.message}</span></label>
                <textarea type="text" name="message" id="message" 
                    placeholder="Hi! I want to tell you that ..." />
                <button className='submit' type="submit">Send</button>
            </form>
        </div>
    )
}
export default Nav