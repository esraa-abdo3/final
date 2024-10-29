 import Navbar from "../../Componets/Navbar/Navbar"
import Welcome from "./Welcome"
import svg from "../../assets/clouds-bottom.svg"
import Top from "./Topfeaturs"
import Cry from "./Cryguide"
export default function Home() {
    return (
        <>
                 <Navbar />
            <Welcome />
          
            <Top />
            <img src={svg}  style={{backgroundColor:"rgb(215, 239, 249)"}}>
            </img>
          
            <Cry />
           
        
        </>
   
    )
}