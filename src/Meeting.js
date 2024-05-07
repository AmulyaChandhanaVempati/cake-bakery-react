
import { Button } from "antd";
import { useState } from "react";

function Meeting(){
    var [users,setUsers] = useState(0)
    var totalUsersJoined=0;
    function joinMeeting(){
        totalUsersJoined = totalUsersJoined+1
        setUsers(users+1)
       // alert("Number of users joined : "+ totalUsersJoined);
    }

    return(
        <div>
            <label>Please Join the Meeting</label>
            <button onClick={joinMeeting} >Join Meeting</button>
            <br></br>
            <label>Total Users Joined : {users}</label>

        </div>
    )
}

export default Meeting