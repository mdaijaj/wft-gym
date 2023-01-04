import { useNavigate, NavLink } from "react-router-dom";
// import "../index.css";

const Home = () => {
  const navigate = useNavigate();

  const register=()=>{
    navigate("/register")
  }

  return (
    <>
      <h1 className="headings">Welcome Home Page </h1>
      <button className="btn btn-success"  onClick={register}> Register </button>
      <div className="container"><br/>
        {/* <div className="row">
         <NavLink to={"/register"} className="btn btn-primary">Register</NavLink>
        </div> */}
      </div>
      <div>
        <img src="https://i.imgur.com/EZkA5Fc.png" width="90%"></img>
      </div>
      <div>
      </div>
    </>
  );
};

export default Home;
