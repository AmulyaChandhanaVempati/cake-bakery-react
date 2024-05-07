
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
    var cakecartdetails = {
        cakeid:cakeDetails?.cakeid,
        name: cakeDetails?.name,
        price: cakeDetails?.price,
        image: cakeDetails?.image,
        weight: cakeDetails?.weight
    }
    function handleAddToCart(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/addcaketocart",
            method:"post",
            data:cakecartdetails, 
            headers:{Authorization:localStorage.token}
        }).then((response)=>{
            console.log("Response from Add Card API: ", response.data.data)
            alert("Cake is added to the cart")
        }, (error)=>{
            console.log("Error from Add Card API: ", error)
        })
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
                <Button type="primary" onClick={handleAddToCart}>Add to Cart</Button>
            </ul>
        </Space>
        </>
    )
}

export default CakeDetails