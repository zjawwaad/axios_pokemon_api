import React, {useState} from 'react'
import axios from 'axios'

const AxiosPoke = () => {
    const [poke, setPoke] = useState([])

    const fetchData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=900")
        .then((response) =>{
            console.log(response.data)
            setPoke(response.data.results)

        })
        .catch((err)=>{
        console.log(err)
        })
    }

        return (
        <div>
            <h1>AxiosPoke</h1>
            <button onClick={fetchData}>Pokemon</button>
            {
                poke.map((p, i) => {
                    return(
                        <div key ={i}>
                        <h2>{p.name}</h2>
                        </div>
                    )})
        }
    </div>
)
}

export default AxiosPoke