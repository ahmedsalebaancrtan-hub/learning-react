import {createRoot} from 'react-dom/client'

export const Header = ()=>{
    return (
     <h1>hello from react header</h1>
    )
}

export const Footer = ()=>{
    return (
        <footer>all rightes reserved</footer>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <>
   
    <Header/>
    <Footer/>
    </>

)