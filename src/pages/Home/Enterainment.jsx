
import "./Enterainment.css"
import t1 from "../../assets/t1.jpg"
import t2 from "../../assets/t2.jpg"
import t3 from "../../assets/t3.jpg"
import ballon from "../../assets/bullon.png"
export default function Enterainment() {
    return (
        <div className="Enterainment">
           
            <div className="cont">
                <div className="img">
                    <div className="flex-column">
                        <img src={t3}>
                        </img>
                        <img src={t2}>
                        </img>

                    </div>
                    <div className="column">
                 
                        <img src={t1} className="t">
                        </img>
                        <img src={ballon} alt=""  className="bullon" />
                    </div>
                </div>
               
                <div className="text">
                    <h2>
                    Enterainment
                    </h2>
                    <p>Our website offers a calming collection of sleep-inducing music, enchanting children's stories, and engaging short educational videos designed to create a nurturing environment for kids.
                        Explore our resources to support your child’s relaxation and growth.</p>
                    <button>
                        explore now
                  </button>
                </div>

            </div>
            
            
         </div>
     )
}
