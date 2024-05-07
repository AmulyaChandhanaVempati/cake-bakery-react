import DComponent from "./DComponent"

function CComponent(props){
    var money = props
    return(
        <div>
        {console.log("Data Coming from C component: ", money)}
        <DComponent data={money}/>

    </div>
    )
}

export default CComponent