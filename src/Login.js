import { Button, Alert } from "antd"
import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
function Login (){

    var[userDetails, setUserDetails] = useState([])
    var [error, setError] = useState("");
    var navigate = useNavigate()// navigation function to navigate to other page

    console.log("login page")
    var user = {}
    function handleEmail(event){
        user.email = event.target.value;
    }
    function handlePassword(event){
        user.password = event.target.value;
    }
    //checking that given user details are present, if present we are going to home page or
    // else we are provding sign up button in UI
    function loginAccount(){
        console.log("User details in loginPage: ", user);
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/login",
            method:"post",
            data:user
        }).then((response)=>{
            console.log("Response from the API : ", response)
            if(response.status == 200){
                localStorage.token = response.data.token;
                navigate("/cakelist");
            } else {
                setError("********No user found*********");
            }
        
        },(error)=>{
            console.log("Error from the API : ", error)

        })

    }

    return(
        <div>
            {error && <Alert type="error" message={error}/>}
            <h3> Please Login to continue...</h3>
            <label>Email</label>
            <input placeholder="Email" width={100} onChange={handleEmail}></input>
            <br></br>
            <label>Password</label>
            <input placeholder="Password" width={100} onChange={handlePassword}></input>
            <br></br>
            <div>
            <Link to="/signup">New User? Signup here</Link>
            </div>
            <Button type="primary" onClick={loginAccount}>Login</Button>

        </div>
    )
}

export default Login