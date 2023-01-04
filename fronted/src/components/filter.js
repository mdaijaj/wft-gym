import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../index.css";

const Filter = (props) => {
    console.log("props", props)
    // const navigate = useNavigate()
    const [userdata, setUserdata] = useState("");
    let [single_city, setSingle_city] = useState("")
    const [singleGymId, setSingleGymId] = useState("")

    let handleCityChange = (e) => {
        setSingle_city(e.target.value)
    }

    const inputHandle = (e) => {
        setUserdata({ ...userdata, [e.target.name]: e.target.value })
    }

    const aboutGym = (userId) => {
        console.log("aijaj", userId)
        setSingleGymId(userId)
    }

    let all_cities = [
        { label: "Delhi", value: "Delhi" },
        { label: "Noida", value: "Noida" },
        { label: "Gurugao", value: "Gurugao" }
    ]
    return (
        <>
            <div className="">
                <div className="main" style={{ textAlign: "left", margin: "auto", border: "2px solid black", borderRadius: "5px", backgroundColor: "#1e1e1f", color: "gray" }}>
                    <h2 style={{ textAlign: "center" }}>Filters form</h2>
                    <div className="col-12" >
                        <label for="user-name" className="col-form-label" >Location:</label>
                        <input type="text" className="form-control" onChange={inputHandle} name="firstname" placeholder="Enter Location..." />
                    </div>
                    <div className="col-6">
                        <label for="price" className="col-form-label" >Price:</label>
                        <input type="number" className="form-control" onChange={inputHandle} name="price" placeholder="min..." /><br />
                        <input type="number" className="form-control" onChange={inputHandle} name="price" placeholder="max..." />

                    </div>
                    <div className="col-12">
                        <label for="cities" className="col-form-label" onChange={inputHandle}>Cities: </label> <br />
                        <select onChange={handleCityChange}>
                            {all_cities.map((item) => <option value={item.value}>{item.label}</option>)}
                        </select>
                    </div>
                    <div className="col-12">
                        <label for="text" className="col-form-label">Locations:</label>
                        {props.itemfilter(single_city)}
                        {props.singleGymDetails(singleGymId)}
                        {props.result.filter(item => item.city == single_city).map(itemdata =>
                        (
                            <div className="card" style={{ background: "#1e1e1f" }}>
                                <div onClick={() => { aboutGym(itemdata.user_id) }} className="fakeimg">{itemdata.gym_name} {itemdata.city} {itemdata.address1} {itemdata.address2}</div><br />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter;