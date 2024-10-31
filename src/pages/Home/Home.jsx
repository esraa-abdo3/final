 import Navbar from "../../Componets/Navbar/Navbar"
import Welcome from "./Welcome"
import svg from "../../assets/clouds-bottom.svg"
import Top from "./Topfeaturs"
import Cry from "./Cryguide"
import Doctors from "./Doctors"

import wav from "../../assets/Untitled.svg"
import Enterainment from "./Enterainment"
export default function Home() {
    return (
        <>
                 <Navbar />
            <Welcome />
          
            <Top />
            <img src={svg}  style={{backgroundColor:"rgb(215, 239, 249)"}}>
            </img>
       
            <Cry />
          
          
            <Doctors />
            <img src={wav}  >
            </img>
            <Enterainment/>
             
          
         
           
        
        </>
   
    )
}