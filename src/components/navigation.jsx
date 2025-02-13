import 'boxicons';
import "../styles/navigation.css"

function Nav(){

    return(
        <>
            <div>
                <span>Message Board</span>
                <button><box-icon name='rotate-left'></box-icon></button>
                <button><box-icon name='rocket'></box-icon></button>
            </div>
            <div>
                <box-icon name='edit-alt' color='white'></box-icon>
                <box-icon name='sun' color='white'></box-icon>
            </div>
        </>
    )
}

export default Nav