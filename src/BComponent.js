import CComponent from "./CComponent"
function BComponent(props){
    var money = props
    return(
        <div>
            {console.log("Data Coming from B component: ", money)}
            <CComponent data={money}/>

        </div>
    )
}

export default BComponent