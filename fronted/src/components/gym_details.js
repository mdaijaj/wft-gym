import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import '../App.css'


const Gymdetails = (props) => {
    const [loading, setLoading] = useState()
    const [userdata, setUserdata]= useState(null)
    const [findgym, setFindgym]= useState([])
    const [filter,setFilter]= useState("");

    let { id } = useParams()
    console.log("iiiiiiiiii", id)

    const allgym_list = async () => {
        let baseUrl="https://devapi.wtfup.me"
        const response = await axios.get(`${baseUrl}/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`);
        let gymlistdata=response.data.data
        let filterdata=await gymlistdata.filter(item=> item.user_id==id)
        setFilter(filterdata)
        return filterdata
    }

     
    const postGym = async () => {
        console.log("proppppppppppppppp", userdata.gymid)
        const response = await fetch("https://devapi.wtfup.me/gym/plan", {
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                gym_id: userdata.gymid,
            })
        })
        let result= await response.json()
        setFindgym(result)
        return response
    }

    let name, value;
    const inputHandle= async(event)=>{
        name= event.target.name
        value= event.target.value
        setUserdata({...userdata, [name]: value})  //[] dynamic data for
    }


    useEffect(() => {
        allgym_list()
    }, [])  


    return (
        <>
            <center><h1>Gym list location & Name</h1></center><br />
            <div className="container">
                <div className="col-3" >
                    <label for="gymid" className="col-form-label" >Gym Id:</label>
                    <input type="text" className="form-control" onChange={inputHandle} name="gymid" placeholder="Enter gymid..."  /> <br/>
                    <button className="btn btn-inf" onClick={postGym}>Find Plan </button>
                </div>
            </div>
            {console.log("aijaj", filter)}
            {filter? 
            <>
            <div className="main">
                <div className="namedetails">
                    <h1>{filter[0].gym_name}</h1>
                    <h3>{filter[0].address2} {filter[0].city}</h3>
                </div>

                <div className="description">
                    <h1>{`Description:- `}</h1>
                    <h4>{filter[0].description}</h4>
                </div>

                <div className="description">
                    <h1>Facilities</h1>
                </div>

                <div className="description">
                    <h1>Why we choose WFT?</h1>
                    <div classna>Earn WFT Rewards Coin</div>
                    <div>Fully Vaccinated Staff</div>
                    <div>Track Fitness Journey</div>
                    <div>Pocket Friendly Membership</div>

                </div>

                <div className="description">
                    <h1 clas>How it work?</h1>
                    <p>
                        pick membership start data and complete your subscription process by clicking
                        Buy now below.
                    </p> <br/>
                    <p>
                        A dedicated general trainer will be assigned after your have taken your subscription
                    </p><br/>

                    <p>
                        Explore WTF and start your fitness journey.
                    </p>
                </div>
            </div>
            </>
            : ""
            }
            {/* <div className="container"> */}
            <ul className="row list-ul">
            {loading? "please wait data is loading": ""}
                {
                    findgym.data?.map((rest => {
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

export default Gymdetails;