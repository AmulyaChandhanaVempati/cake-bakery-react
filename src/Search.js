import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import axios from "axios";
import Cake from "./Cake";
import { Row } from "antd"

function Search(){
    var[query, setQuery] = useSearchParams()
    var text = query.get("q")
    var [searchresult,setSearchResults] = useState([])
    useEffect(()=>{
        getSearchresult()
    },[])

    function getSearchresult(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/searchcakes"+"?q="+text,
            method:"get",
        }).then((response)=>{
            console.log("Response from Search Cakes API: ",response.data.data)
            setSearchResults(response.data.data)

        },(error)=>{
            console.log("Error from Search Cakes API: ", error)
        })
    }

    return(
        <div>
            <Row style={{textAlign:"center"}}>
            {
                searchresult.map((each)=>{
                    return(
                        <Cake data={each}/>
                    )
                })
            }
            </Row>
            


        </div>
    )
}

export default Search