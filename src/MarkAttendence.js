import { Table } from "antd"
import { useState } from "react"
import DataTable from "./DataTable"


function MarkAttendence(){
    var [studentNames, setStudentName] = useState([
        {
        name: "Thanuj",
        email: "thanuj@gmail.com",
        studentId: "4150"

       }
])
    var student = {}
    function handleNames(event){
        student.name = event.target.value
    }
    function handleEmail(event){
        student.email = event.target.value
    }
    function handleIds(event){
        student.studentId = event.target.value
    }
    function addStudent(event){
        console.log(student)
        console.log("typing...", student)
        studentNames.push(student)
        studentNames = [...studentNames]
        console.log("Student added... ", student)
        console.log("ListOFstudents:",studentNames )
        setStudentName(
            studentNames
        )
    }
    function deleteUser(index){
        studentNames.splice(index,0)
        setStudentName(
            studentNames = [...studentNames]
        )
    }
    return(
        <div>
            <label>Enter student Names : </label>
            <input placeholder="Student Name" onChange={handleNames}></input> <br></br>
            <label>Enter student Email : </label>
            <input placeholder="Student Email" onChange={handleEmail}></input><br></br>
            <label>Enter student ID : </label>
            <input placeholder="Student ID" onChange={handleIds}></input><br></br>
            <button onClick={addStudent}> Mark Attendence</button>
            <br></br>
            {console.log("name : ",studentNames)}
            <DataTable studentNames = {studentNames} deleteUser={deleteUser}/>

            

        </div>
    )
}

export default MarkAttendence


    // var totalkeys=[]
    // studentNames.forEach((each)=>{
    //     var keys = Object.keys(each)
    //     totalkeys.push(keys)
    //     console.log("each : ",each)
    // })
    // var uniqueKeys = new Set(totalkeys)//["name"]
    // console.log(uniqueKeys)
    // var column = []
    // uniqueKeys.forEach((eachKey)=>{//name
    //     column.push(
    //             {
    //                 title: eachKey.toUpperCase(),
    //                 dataIndex: eachKey,
    //                 key: eachKey
    //             }
    //     )
    // })

    
                        {/* <div>
                {
                    studentNames.map((each)=>{
                        return(
                            <h3>{each}</h3>
        
                        )
                    })
                }

            </div> */}