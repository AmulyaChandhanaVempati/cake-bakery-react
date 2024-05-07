import BComponent from "./BComponent"

function AComponent(props){
    var money = props
    return(
        <div>
        {console.log("Data Coming from A component: ", money)}

        <BComponent data={money}/>

    </div>
    )
}

export default AComponent