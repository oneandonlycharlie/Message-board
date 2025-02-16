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

    return(
        <div className="window">
            <form action="">
                <button onClick={closeWindow}className="close">Close</button>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Your name"/>
                <label htmlFor="massage">A message to your past self:</label>
                <textarea type="text" name="message" id="message" 
                    placeholder="Hi! I want to tell you that ..." />
                <button className='submit' type="submit">Send</button>
            </form>
        </div>
    )
}
export default Nav