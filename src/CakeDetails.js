
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Image } from "antd"
import { Space,Button } from "antd";

function CakeDetails(){
    var params = useParams() //using params hook function to get parameter values from link
    var cakeid = params.cakeid;
    var [cakeDetails, setCakeDetails] = useState()
    useEffect(()=>{
        getCakeDetails()

    },[])
    function getCakeDetails(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+ "/cake/"+cakeid,
            method:"get"
        }).then(
            (response)=>{
                console.log("Cake details : ",response.data.data)
                setCakeDetails(response.data.data)
            }
        )
    }
    return(
        <>
        <Space direction="horizontal" style={{paddingLeft:50 , paddingTop:50}}>
            <img src={cakeDetails?.image} style={{height:450 , width:450}}/>
            
            <ul>
                <h1>{cakeDetails?.name}</h1>
                <h3> Cake Details: </h3>
                <li>Name : {cakeDetails?.name}</li>
                <li>Price : {cakeDetails?.price}</li>
                <li>Rating : {cakeDetails?.ratings}</li>
                <li>Description : {cakeDetails?.description}</li>
                <li>Likes : {cakeDetails?.likes}</li>
                <li><Button type="primary">Add to Cart</Button></li>
            </ul>
        </Space>
        </>
    )
}

export default CakeDetails