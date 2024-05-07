import { Row } from "antd"
import Cake from "./Cake"
import { useEffect, useState } from "react"
import axios from "axios"

function CakeList(props){

    var [cakes,setCakes] = useState()

    useEffect(()=>{
        getCakeList()
    },[])   


    function getCakeList(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/allcakes",
            method:"get"
        }).then((response)=>{
            console.log("Response from the API : ", response.data.data);
            setCakes(response.data.data)
        },(error)=>{
            console.log("Error from the API : ", error)
        })
    }
    
    // var cakes = [{
    //     name:"ChocoLoaded",
    //     type:"Chocolate",
    //     price:"8000",
    //     image:"ChocolateCake.jpg",
    //     tag:"Best Seller"
    //   },
    //   {
    //     name:"DarkChocolate",
    //     type:"DarkChocolate",
    //     price:"2000",
    //     image:"DarkChocolate.avif"
    //   },
    //   {
    //     name:"DoubleChocolatee",
    //     type:"DoubleChocolatee",
    //     price:"1800",
    //     image:"DoubleChocolatee.jpg.webp",
    //     tag:"Best Seller"
    //   }, 
    //   {
    //     name:"BlackForestCake",
    //     type:"BlackForestCake",
    //     price:"1200",
    //     image:"BlackForestCake.webp",
    //     tag:"Best Seller"
    //   }
    // ]
      return(
        <div>
            <h1 style={{textAlign:"center"}}>Welcome to cake bakery</h1>
            <Row style={{textAlign:"center"}}>

                {cakes?.map((each,index)=>{
                    return(
                        <Cake data={each} key={index}/>
                    )
                })
            }

            {/* <Cake data={cake1}/>
            <Cake data={cake2}/>
            <Cake data={cake1}/>
            <Cake data={cake2}/>
            </Row> 
            <Row>
            <Cake data={cake2}/>
            <Cake data={cake1}/>
            <Cake data={cake2}/>
            <Cake data={cake1}/> */}
            </Row>  

        </div>
      )
}

export default CakeList