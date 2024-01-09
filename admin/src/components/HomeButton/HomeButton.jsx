import { Link } from "react-router-dom"
import "./HomeButton.css"
function HomeButton() {
    return (
        <div>
            <Link to="/" style={{ textDecoration: "none" }} ><button className="homeButton"> Home</button></Link>
        </div>
    )
}

export default HomeButton