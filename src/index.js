import {createRoot} from 'react-dom/client'
import { useEffect, useState } from 'react';

// const App = () =>{
//     const [ developer , setdeveloper] = useState({
//         nationality:"",
//         age:0
//     })
//     return (
//         <>

//         <div>
//             <button  onClick={()=>setdeveloper({
//                 ...developer , nationality:"hargaisa"
//             })}> change the nationality</button>

//             <div>
//                 <input
//                 type='number'
//                 onChange={(event)=> setdeveloper({
//                     ...developer,age: event.target.value
//                 })}
                
//                 />
//             </div>
           
            
         
//         </div>

//        <p> my nationality is {developer.nationality}</p>
//        <p> my age is  {developer.age}</p>
//        </>

//     )
// }


// const Counter = ()=>{
//     const [count , setcount] = useState(0)

//     return(
//         <>
//        < div>
//         <h2>count : {count}</h2>

//        <button onClick={()=> setcount(count + 1)}>increase</button>
//        <button onClick={()=> setcount(count - 1)}>decrease</button>
//        </div>
//        </>
//     )
// }

// const App  = () =>{
//     const [name , setName ] = useState("")
//     return (
//         <>
//          <div>

//          <input 
//          type='text'

//          onChange={(event) => setName(event.target.value)}


         
//          />
         
//          </div>


//          <p> your name is {name}</p>
//          </>

//     )
// }
 const api = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const response = await fetch(api);
      const data = await response.json();
      setPosts(data); // <--- data is an ARRAY
      setLoading(false);
    };
    getPosts();
  }, []);

  if (loading) return <h1>LOADING.....</h1>;

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </>
  );
};


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
 
  
 
<App/>

 


)