import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../App.css'
import Filter from "./filter";
import Gym from "./gym";

const GymList = () => {
    const [gymlist, setGymlist] = useState([])
    const [loading, setLoading]= useState(null)
    
    const allgym_list = async () => {
        let baseUrl="https://devapi.wtfup.me"
        const response = await axios.get(`${baseUrl}/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`);
        console.log("response4", response)
        setGymlist(response.data.data)
        return response
    }

    useEffect(() => {
        allgym_list()
    }, [])

    return (
        <>
            <center><h1>Gym list location & Name</h1></center><br />
            <Gym/> <br/>
            {/* {gymlist ?  */}
                <Filter result={gymlist}/> 
                    {/* : */}
            {/* <div className="container"> */}
            <ul className="row list-ul">
            {loading? "please wait data is loading": ""}

                {console.log("gymlist", gymlist)}
                {
                    gymlist?.map((rest => {
                        {console.log("rest", rest)}
                        return (
                            <>
                            {/* <div className="" style={{textDecoration: "none", border: "3px solid green"}}> */}
                            <div className="col-8 li-list">
                                <div className="row" style={{backgroundColor: "#1e1e1f"}} >
                                    <div className="col-6 d-flex justify-content-right">
                                        <div className="card" style={{ width: "50rem", backgroundColor: "#1e1e1f" }}>
                                            <img className="card-img-top" src={rest.cover_image} />
                                        </div>
                                    </div>
                                    <div className="col-6" style={{textAlign: "left", color: "#e6e6ed"}}>
                                        <h3 className="card-title">{  rest.gym_name}</h3>    
                                        <h3 className="card-title">{rest.name}</h3>    
                                        <p className="card-text">{`address1: ${rest.address1}`}</p>
                                        <p className="card-text">{`address2: ${rest.address2}`}</p>
                                        <p className="card-text">{`city: ${rest.city}`}</p>
                                        <p className="card-text">{`state: ${rest.state}`}</p>
                                        <p className="card-text">{`numOfReviews: 4` }</p>
                                        <p className="card-text">{`address1: ${rest.address1}`}</p>
                                        <NavLink to={`/gymdetails/${rest.user_id}`} className="btn btn-primary">Book</NavLink>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    }))
                }
            </ul>
            {/* </div> */}
        {/* } */}
        </>
    );
};

export default GymList;