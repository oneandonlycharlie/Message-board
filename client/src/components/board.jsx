import "../styles/board.css"

function Board({messages}) {
    const calculateTime = (time)=>{
        console.log(time)
        const currentTime = new Date();
        const logTime = new Date(time);
        const timeDiff = (currentTime - logTime);
        console.log(currentTime)
        console.log(logTime)
        console.log(timeDiff)
        if (timeDiff/(1000*60) < 1){
            // posted less than 1 minute ago
            time = "just now"
        } else if (timeDiff/(1000*60) <= 60){
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
    // Capitalize user name and message
    messages.map((message)=>{
        message.name = message.name.charAt(0).toUpperCase() + message.name.slice(1)
        message.message = message.message.charAt(0).toUpperCase() + message.message.slice(1)
        message.time = calculateTime(message.time)
    })

    return(
        <>
            <h1>"Dear past me ..."</h1>
            <div className="line"></div>
            <div className="content-container">
                {messages.map((message)=>(
                    <Message 
                        key={message.message_id}
                        message={message.message}
                        name={message.name}
                        time={message.time} />
                ))}
            </div>
        </>
    )
}

function Message({key, name, message, time}){

    return(
        <div key={key} className="entry">
            <div>
                <span className="name">{name}</span>
                <span className="time">{time}</span>
            </div>
            <p className="message">"{message}"</p>
        </div>
    )
}


export default Board