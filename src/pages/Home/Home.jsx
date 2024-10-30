 import Navbar from "../../Componets/Navbar/Navbar"
import Welcome from "./Welcome"
import svg from "../../assets/clouds-bottom.svg"
import Top from "./Topfeaturs"
import Cry from "./Cryguide"
import Reminders from "./Reminders"
import Enterainment from "./Enterainment"
import Growth from "./Growth"
export default function Home() {
    return (
        <>
                 <Navbar />
            <Welcome />
          
            <Top />
            <img src={svg}  style={{backgroundColor:"rgb(215, 239, 249)"}}>
            </img>
          
            <Cry />
            <Reminders />
            <Enterainment />
            <Growth />
           
        
        </>
   
    )
}