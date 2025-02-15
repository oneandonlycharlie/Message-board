import 'boxicons';
import "../styles/navigation.css"
import { useState } from 'react';

function Nav(){
    const [theme, setTheme] = useState("dark")
    const root = document.documentElement

    root.className = theme
    const switchThme = ()=>{
        root.className == 'dark'? setTheme("light"):setTheme("dark")
    }

    return(
        <>
            <div className='title'>
                <h3>Message Board</h3>
                <button><box-icon class='icon' name='rotate-left'></box-icon></button>
                <button><box-icon class='icon'name='rocket'></box-icon></button>
            </div>
            <button className='edit'><box-icon class='icon'name='edit-alt'></box-icon></button>
            <button onClick={switchThme}
            className='switch'><box-icon class='icon' name='sun'></box-icon></button>
        </>
    )
}

export default Nav