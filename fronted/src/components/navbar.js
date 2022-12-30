import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{color: "white", fontSize: "18px"}}>
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav mr-right" >
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/gymlist'>GymLIst</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to='/fitness'>Fitness</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/binary'>Nutrition</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/binary'>Become WTF Partner</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/binary'>About Us</NavLink>
                        </li>
                         <li className="nav-item">
                            {/* <button className="btn btn-danger"> */}
                            <NavLink className="nav-link" to='/register'>Login</NavLink>
                            {/* </button> */}
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;