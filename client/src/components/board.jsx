import "../styles/board.css"
import { useState } from "react";

function Board({messages}) {
    const [startNumber, setStart] = useState(0)

    const formatTime = (time)=>{
        const currentTime = new Date();
        const logTime = new Date(time);
        const timeDiff = (currentTime - logTime);
        if (timeDiff/(1000*60) < 1){
            // posted less than 1 minute ago
            time = "just now"
        } else if (timeDiff/(1000*60) < 60){
            // posted within 1 hour
            time = +Math.round(timeDiff/(1000*60)) + ' ' + 'minutes ago'
        } else if (timeDiff/(1000*60*60) > 1 && timeDiff/(1000*60*60) <= 24){
            // posted within 1 day
            time = +Math.round(timeDiff/(1000*60*60)) + ' ' +  'hours ago'
        } else if (timeDiff/(1000*60*60*24) > 1 && timeDiff/(1000*60*60*24) <= 30 ){
            // posted within 1 month
            time = +Math.round(timeDiff/(1000*60*60*24)) + ' ' +  'days ago'
        } else if (timeDiff/(1000*60*60*24*30) > 1 && timeDiff/(1000*60*60*24*30*12) <= 1){
            // posted within a year
            time = +Math.round(timeDiff/(1000*60*60*24*30)) + ' ' +  'months ago'
        } else if (timeDiff/(1000*60*60*24*30*12) > 1){
            // posted over 1 year ago
            time = +Math.round(timeDiff/(1000*60*60*24*30)) + ' ' +  'years ago'
        }
        return time
    }

    // Select entries for the current page
    const displayMessages = messages.slice(startNumber,startNumber+5);

    // Capitalize user name and message
    displayMessages.map((message)=>{
        message.name = message.name.charAt(0).toUpperCase() + message.name.slice(1)
        message.message = message.message.charAt(0).toUpperCase() + message.message.slice(1)
        message.time = formatTime(message.time)
    })

    const hendleLeftClick=()=>{
        setStart((prev)=>prev-5)
    }

    const hendleRightClick=()=>{
        setStart((prev)=>prev+5)
    }
    return(
        <>
            <h1>"Dear past me ..."</h1>
            <div className="content-container">
                {displayMessages.map((message)=>(
                    <Message 
                        key={message.message_id}
                        message={message.message}
                        name={message.name}
                        time={message.time} />
                ))}
                <span className="count">Page {1+startNumber/5} / {Math.ceil(messages.length/5)}</span>
                {startNumber >= 5 && 
                    <button className="left"
                            onClick={hendleLeftClick}
                    ><box-icon class='icon' name='chevron-left' ></box-icon></button>}
                {startNumber+5 <= messages.length && 
                    <button className="right"
                            onClick={hendleRightClick}
                    ><box-icon class='icon' name='chevron-right'></box-icon></button>}
            </div>
        </>
    )
}

function Message({name, message, time}){

    return(
        <div className="entry">
            <div >
                <span className="name">{name}</span>
                <span className="time">{time}</span>
            </div>
            <p className="message">"{message}"</p>
        </div>
    )
}


export default Board