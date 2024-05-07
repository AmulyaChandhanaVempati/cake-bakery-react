import axios from "axios"
import { useEffect, useState } from "react"
import { Row } from "antd"
import Cake from "./Cake"


function CakeCart(){
    var[cartItems, setCartItems] = useState([])

    useEffect(()=>{
        getCartItems()
    },[])

    function getCartItems(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/cakecart",
            method:"get",
            headers:{Authorization:localStorage.token}
        }).then((response)=>{
            setCartItems(response.data.data)

        }, (error)=>{

        })
    }


    return(
        <div>
            <h1>Cart page</h1>
            <Row style={{textAlign:"center"}}>
            {
                cartItems.map((each)=>{
                    return(
                        <Cake data={each}/>
                    )
                })
            }
            </Row>

        </div>
    )
}

export default CakeCart