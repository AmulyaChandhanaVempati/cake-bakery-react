import { Card,Image,Space,Badge } from "antd"
import { Link } from "react-router-dom"

function Cake(props){
    console.log("Props: ",props)

    console.log("Tag Value: ",props.data)
        var Component
    if(props.data.tag){
        Component =  
        <Badge.Ribbon size="small" color="green" text={props.data.tag} >
        <Card style={{ width: 250, marginLeft: 40 }}>
            <Link to={"/cakeDetails/"+ props.data.cakeid}><Image preview={false} src={props.data.image} width={200}></Image></Link>
            <p>{props.data.name}</p>
            <p>{props.data.price}</p>
        
        </Card>
       </Badge.Ribbon>
    }
    else{
        Component =  <Card style={{ width: 250, marginLeft: 40 }}>
        <Link to={"/cakeDetails/"+ props.data.cakeid}><Image preview={false} src={props.data.image} width={200}></Image></Link>
        <p>{props.data.name}</p>
        <p>{props.data.price}</p>
    </Card>
    }
    return (
    Component
)



    // var data = {
    //     name:"Thanuj",
    //     price: 2,
    //     image: "image.jpg"
    // }
    // return(
    //     <Space direction="horizontal" size={16}>
    //     <Card>
    //       <Image preview={true} src={props.data.image} width={200}></Image>
    //       <p>{props.data.name}</p>
    //       <p>{props.data.type}</p>
    //       <p>{props.data.price}</p>
    //       {props.data.tag && <p>{props.data.tag}</p>}
    //     </Card>
    //     </Space>

        // <div>
        //     <img src="image.jpg" height={200} width={400} ></img>
        // </div>
    
}
export default Cake