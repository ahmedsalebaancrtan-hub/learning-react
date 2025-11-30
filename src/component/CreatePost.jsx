import { useState, useRef } from "react"


const CreatePost = ({ user ,posts , setposts }) => {
const [ Content , setContent] = useState("")
const [Image, setImage] = useState(null);
const ImageRef = useRef();
const COntentRef = useRef()
const HandleSubmit =(event) =>
    
    {   
         event.preventDefault();
       const newpost = {Content , Image ,user}
        setposts([ newpost , ...posts ]);
        setContent("");
        setImage("")
        ImageRef.current.value = "";
        COntentRef.current.focus();


}
    return (
        <>
        <div>
            <h1>create post</h1>
            <form onSubmit={HandleSubmit}>
                <input type="text"  placeholder="create post"
                onChange={(event)=>setContent(event.target.value)}
                value={Content}
                ref={COntentRef}
                />
                <input type="file" 
                onChange={(event)=> setImage(event.target.files[0])}
                ref={ImageRef}
                />
                <button type="submit">Submit</button>
            </form>
             {/* <p>{Content}</p>
            {Image && (<img src={URL.createObjectURL(Image)} alt=""
            style={{width:100}}
            
            /> )}  */}
        </div>  
        
        </>
    )
}

export default CreatePost