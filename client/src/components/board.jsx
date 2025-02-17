import "../styles/board.css"

function Board({messages}) {
    // Capitalize user name and message
    messages.map((message)=>{
        message.name = message.name.charAt(0).toUpperCase() + message.name.slice(1)
        message.message = message.message.charAt(0).toUpperCase() + message.message.slice(1)
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

function Message({name="Charlie", message="You got this!", time="today"}){

    return(
        <div className="entry">
            <div>
                <span className="name">{name}</span>
                <span className="time">{time}</span>
            </div>
            <p className="message">"{message}"</p>
        </div>
    )
}


export default Board