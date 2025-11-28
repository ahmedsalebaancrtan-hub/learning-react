import {createRoot} from 'react-dom/client'
import { useState} from 'react'

export const App = ()=>{
const [nationality , setnationality] = useState("hargaisa");
const [age , setage] = useState (0)
    return(
        <>
        <div>
            <button onClick={()=> setnationality("muqdisho")}>change nationality</button>


        </div>
        <input
        type='number'
        onChange={(event) => setage(event.target.value)}
        
        />
        <p>my age is {age}</p>
        <p>my nationality is {nationality}</p>
        
        </>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <App/>

)