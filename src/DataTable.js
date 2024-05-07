import Title from "antd/es/skeleton/Title"
import { Table } from "antd"
import { render } from "@testing-library/react";

function DataTable({studentNames,deleteUser}){
    console.log("props............",studentNames)
    var users = studentNames;
    var totalKeys = []
    users.forEach((element) => {
        var keys = Object.keys(element)
        totalKeys.push(...keys)
        
    });
    console.log("Total Keys", totalKeys)
    var uniqueKeys = new Set(totalKeys)
    var columns = []
    uniqueKeys.forEach((eachKey)=>{
        columns.push({
            title: eachKey.toUpperCase(),
            dataIndex: eachKey,
            key: eachKey
            
        })

    })

    columns.push({
        title: "Action".toUpperCase(),
        render:(text,record,index)=>{
            return(
                <button onClick={()=>deleteUser(index)}> Delete </button>
            )
        }
    })



    // var columns = keys.map((eachKey)=>{ // UserName, UserID
    //     return({
    //         title: eachKey.toUpperCase(),
    //         dataIndex: eachKey,
    //         key: eachKey
    //     }
    //     )
    // }
//)
    
    return(
       <Table dataSource={users} columns={columns}/>
    )

}

export default DataTable