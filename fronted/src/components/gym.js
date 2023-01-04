import { useNavigate, NavLink } from "react-router-dom";
import "../index.css";
import Footer from "./footer";

const Gym = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">

        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search" name="search"/>
          <div class="input-group-btn">
            <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
          </div>
        </div>
      </div>
    </>
  );
};



export default Gym;
