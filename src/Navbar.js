import { Menu } from "antd"
import Login from "./Login"
import { Link } from "react-router-dom"
import { Button } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import {  useNavigate } from "react-router-dom"


function Navbar(){
    var searchText
    function search(){
        var navigate = useNavigate()
        console.log("user issearching for" , searchText)
        var url = "/search?q="+searchText
        navigate(url)
    }
    function handleSearchText(event){
        searchText=event.target.value

    }
    const menuItems = [
        {label:(<Link to="/cakelist">Cake Gallery</Link>)},
        {label:(<label type="primary" color="white">Home</label>)},
        {label: "About Us"},
        {label: "Contact Us"},
        {label: (<Link to="/login"><Button type="primary">Login</Button></Link>)},
        {icon:(
            <>
            <input placeholder="search" onChange={handleSearchText}></input>
            <SearchOutlined onClick={search}></SearchOutlined>
            </>
        )

        }
    ]
    return(
        <div>
            <Menu style={{background:"#ffcccc"}} mode="horizontal" items={menuItems} />
        </div>
    )
}

export default Navbar
