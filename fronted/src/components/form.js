import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Register = () => {

    // const navigate = useNavigate()
    const [userdata, setUserdata] = useState("");
    

    const inputHandle = (e) => {
        setUserdata({ ...userdata, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userArr=[];
        const userInf={
            email: userdata.email,
            firstName: userdata.firstName, 
            lastName: userdata.firstName, 
            referal: userdata.firstName, 
            city: userdata.firstName 
        }


        userArr.push(userInf)
        localStorage.setItem('userarr', JSON.stringify(userArr))
        
        alert("user add success!")
        // navigate('/login')
    
    }
    return (
        <>
            <div className="container" style={{marginTop: "100px"}}>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-6">
                        
                        <div className="main" style={{ textAlign: "left", margin: "auto", padding: "30px 30px", border: "2px solid black", borderRadius: "5px" }}>
                        <h2 style={{textAlign: "center"}}>Register form</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label for="user-name" className="col-form-label" >First Name:</label>
                                    <input type="text" className="form-control" onChange={inputHandle} name="firstname" />
                                </div>
                                <div className="mb-3">
                                    <label for="user-name" className="col-form-label" >Last Name:</label>
                                    <input type="text" className="form-control" onChange={inputHandle} name="lastname" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="col-form-label" onChange={inputHandle}>Email:</label>
                                    <input type="email" className="form-control" onChange={inputHandle} name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label for="mobile" className="col-form-label">Mobile number:</label>
                                    <input type="number" className="form-control" onChange={inputHandle} name="mobile" minLength={5} required />
                                </div>
                                
                                <center><button type="submit" className="btn btn-primary" >Submit</button></center>
                            </form>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </>
    )
}

export default Register;