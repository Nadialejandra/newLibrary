import { Link } from "react-router-dom"
import Header from "../components/Header"
import "../index.css"



function Welcome(){
    return(
        <div className="welcome">
            <Header/>
            <p className="title-welcome"> Bienvenidos a Violet Librery</p>
            <Link to="/Home">Vamos a Home</Link>
        </div>
    )

}

export default Welcome;
