import { useNavigate, NavLink } from "react-router-dom";
import "../index.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="headings">Welcome Home Page </h1>
      {/* <button className="btn btn-success" > Register </button> */}
      <div className="container">
        <div className="row">
          <NavLink to={"/register"} className="btn btn-primary">Register</NavLink>
       
            <div className="main">
                <NavLink to={"/binary"} className="btn btn-primary"> View</NavLink>
            </div>
        </div>
        {/* <button className="btn btn-info" > View </button> */}
      </div>
      <div>
      <img src="https://i.imgur.com/EZkA5Fc.png" width="90%"></img>
      </div>
    </>
  );
};

export default Home;
