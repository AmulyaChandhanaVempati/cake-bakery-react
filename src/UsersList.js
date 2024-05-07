import { type } from "@testing-library/user-event/dist/type"
import { Alert, message } from "antd"
import DataTable from "./DataTable"

function UsersList(){
    //var users = ["Thanuj", "Lakshmi", "Ravi"]
    var users = [
    {
        userName:"Amulya",
        userID: "4149",
    },
    {
        userName:"Lakshmi",
        userID: "4148",
        age: 29
    },
    {
        userName:"Thanuj",
        userID: "4147",
        age: 22,
        location: "Hyderabad"
    },
    {
        userName:"Ravi",
        userID: "4146",
        age: 14
    }
    ]
    return(
        <div>
        {/* {
        users.map((each)=>{
             var value = Object.values(each)// this return an array of values
             var key = Object.keys(each) // this returns an array of keys
             console.log("keys:: ",key)
             console.log("Values:: ",value)
             return(
                key.map((elements)=>{
                    return(
                        <h4>{elements}:{each[elements]}</h4>
                    )
                })
             )
             {<br></br>}
           
            }
               // <Alert message={each.userName} type="Success"/>
            )
        } */}
        {
            <DataTable users = {users}/>
        }
  
        </div>
    )
    }
    


export default UsersList

// return (key.map((properties)=>{
//     console.log(properties)
//    return( <h1>{properties}</h1>)
//  }))

