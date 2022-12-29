import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../App.css'
import Filter from "./filter";
import Gym from "./gym";

const GymList = () => {
    const [loading, setLoading] = useState()
    const [userdata, setUserdata]= useState(null)
    const [findgym, setFindgym]= useState(null)

    
    const postGym = async () => {
        // const gymInf = {
        //     method: "Post",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         gym_id: userdata.gym_id
        //     })
        // }
        // // let baseUrl="https://devapi.wtfup.me"
        // const response = await fetch(`https://devapi.wtfup.me/gym/plan`, gymInf);
        // const result = await response.json()


        const response = await fetch("https://devapi.wtfup.me/gym/plan", {
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "x-rapidapi-key": "apikey",
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                gym_id: userdata.gym_id,
            })
        })
        
        let result= response.json()
        console.log("aijajkhan", result)
        setFindgym(result)
        return response
    }

    let name, value;
    const inputHandle= async(event)=>{
        name= event.target.name
        value= event.target.value
        console.log("aijajvalue", value)
        setUserdata({...userdata, [name]: value})  //[] dynamic data for
    }


    return (
        <>
            <center><h1>Gym list location & Name</h1></center><br />
            {console.log("userdata", userdata)}
            <div className="container">
                <div className="col-3" >
                    <label for="gymid" className="col-form-label" >Gym Id:</label>
                    <input type="text" className="form-control" onChange={inputHandle} name="gymid" placeholder="Enter gymid..."  /> <br/>
                    <button className="btn btn-inf" onClick={postGym}>Find Plan </button>
                </div>
            </div>
            {/* <div className="container"> */}
            <ul className="row list-ul">
            {loading? "please wait data is loading": ""}

                {
                    findgym?.map((rest => {
                        {console.log("rest", rest)}
                        return (
                            <>
                            {/* <div className="" style={{textDecoration: "none", border: "3px solid green"}}> */}
                            <div className="col-8 li-list">
                                <div className="row" style={{backgroundColor: "#1e1e1f"}} >
                                    <div className="col-6 d-flex justify-content-right">
                                        <div className="card" style={{ width: "50rem", backgroundColor: "#1e1e1f" }}>
                                            <img className="card-img-top" src={rest.images} />
                                        </div>
                                    </div>
                                    <div className="col-6" style={{textAlign: "left", color: "#e6e6ed"}}>
                                        <h3 className="card-title">{  rest.plan_name}</h3>    
                                        <h3 className="card-title">{rest.plan_price}</h3>    
                                        <p className="card-text">{`duration: ${rest.duration}`}</p>
                                        <p className="card-text">{`original_price: ${rest.original_price}`}</p>
                                        <p className="card-text">{`plan_features: ${rest.plan_features}`}</p>
                                        <p className="card-text">{`plan_price: ${rest.plan_price}`}</p>
                                        <p className="card-text">{`description: ${rest.description}`}</p>
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
        </>
    );
};

export default GymList;