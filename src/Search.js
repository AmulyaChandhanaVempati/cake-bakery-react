import { useSearchParams } from "react-router-dom"

function Search(){
    var[query, setQuery] = useSearchParams()
    var text = query.get("q")
    return(
        <div>
            <h1>Search Result for {text}</h1>

        </div>
    )
}

export default Search