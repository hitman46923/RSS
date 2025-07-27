import React from "react";
import { Link } from 'react-router-dom';




function Header () {

    

    return (
        <div>
        <input type="text" />

        <button>Search</button>
        <Link to="/about">
        <button>About Page</button>
        </Link>
        </div>
    )
}







export default Header;







/* class Header extends React.Component {



    render(): React.ReactNode {

        return (
            <div>
            <input type="text" />

            <button>Search</button>
            </div>
        )
    }

}



export default Header; */