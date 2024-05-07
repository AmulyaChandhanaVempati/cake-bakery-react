import { Alert } from "antd";
import { useState } from "react";
import axios from "axios";

function SignUp(){
    var[userDetails,setUserDetails] = useState([{}])
    var user={}
    function handleUserName(event){
       // console.log("Typing...", event.target.value)
        user.name = event.target.value;
    }
    function handlePassword(event){
      //  console.log("Typing...", event.target.value)
        user.password = event.target.value;

    }
    function handleEmail(event){
      //  console.log("Typing...", event.target.value)
        user.email = event.target.value;

    }
    function CreateAccount(){
        //alert("UserName: "+ username + " "+ "Password: "+ password+ " "+ "Email: "+ email)
        console.log("User Details: ", user)
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/register",
            method:"post",
            data:user
        }).then(
            (response)=>{
                console.log("Response from Register API", response)
                setUserDetails([...user])

            },(error)=>{
                console.log("Error from Register API", error)

            }
        )

    }
    return(
        <div>
            <h3>Please Sign Up first</h3>
            <label style={{ height:200, width:400}}>UserName  :</label>
            <input placeholder="user name" onChange={handleUserName}></input><br></br>
            <label>Password:</label>
            <input placeholder="password" type="password" onChange={handlePassword}></input><br></br>
            <label>Email:</label>
            <input placeholder="email" onChange={handleEmail}></input> <br></br>
            <button onClick={CreateAccount}>Create Account</button>
        </div>
    )

}

export default SignUp


// import React from 'react'
// import {Input,Button,Alert} from 'antd'
// import { useState } from 'react';
// import axios from 'axios';
// function Signupp() {
//   var [name,setName] = useState("");
//   var [email,setEmail] = useState("");
//   var [password,setPassword] = useState("");
//   function CreateAccount(){
//     console.log(name,' ',email,' ',password)
//     axios({
//         url:"http://apibyauw.eu-4.evennode.com/api"+"/register",
//         method:"post",
//         data:{name,email,password}
//     }).then((response) => {
//         console.log(response)
//         console.log("data is")
//         console.log(response.data)
//         console.log("response coming from create account api ",response.data.data)
//     }, (error) => {
//         console.log("error from register/create account api",error)
//     })
// }
//   console.log("naam hai : ",name)
//   function yo(){
//     alert("name is : "+name+"\nemail is : "+email+"\npassword is : "+password)
//   }
//   function nameChange(e){
//     var x = e.target.value;
//     setName(x);
//     console.log(x);
//   }
//   function emailChange(e){
//     var x = e.target.value
//     setEmail(x);
//     console.log(email)
//   }
//   function passwordChange(e){
//     var x = e.target.value
//     setPassword(x);
//     console.log(password)
//   }
//   return (
//     <div>
//         <input placeholder="UserName" type="text" onChange={nameChange}></input><br></br>
//         <input placeholder="Email" type="text" onChange={emailChange}></input><br></br>
//         <input placeholder="Password" type="password" onChange={passwordChange}></input><br></br>
//         <input placeholder="Confirm Password" type="password" onChange={passwordChange}></input><br></br><br></br>
//         <Button onClick = {yo}>Sign Up</Button>
//         <Button onClick = {CreateAccount}>Create Account</Button>
//     </div>
//   )
// }
// export default Signupp

