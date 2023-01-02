import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{color: "white", fontSize: "18px"}}>
                {/* <a className="navbar-brand" href="#"></a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink className="icon-holder" to="/"> <img src="data:image/png;base64,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" width="60px" height="60px" style={{borderRadius: "40px"}}/></NavLink>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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