import "../styles/board.css"

function Board() {

    return(
        <>
            <h3>Dear past me ..</h3>
            <div className="content-container">
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
        </>
    )
}

function Message({name="Charlie", message="You got this!", time="today"}){

    return(
        <div className="entry">
            <div>
                <span className="name">{name}:</span>
                <span className="time">{time}</span>
            </div>
            <p className="message">"{message}"</p>
        </div>
    )
}

export default Board