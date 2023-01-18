import Basket from "../../Icons/Basket";
import Elogo from "../../Icons/Elogo";
import SignIn from "../../Icons/SignIn";
import "../../styles/ subStyle/navbar.css"

export default function NavbarBlue () {
    return(
        <div className="navbar">
            <Elogo />

            <form>
            <input className="search" type="search" placeholder="Search any things"></input>
            <button className="searchButton">Search</button>
            </form>

            <div className="navGroup headNav">

                <div className="navGroup">
                <SignIn />
                <p>Sign in</p>
                </div>

                <div className="navGroup">
                <Basket />
                <span className="navNum">0</span>
                </div>
                
            </div>

        </div>
    );
}