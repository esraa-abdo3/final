// import babycary from "../../assets/done.png"
// import "./Top.css"
// import cloudes from "../../assets/clouds.png"
 
// export default function Cry() {
//     return (
//         <div className="cry">
//             <h2>Listen to your baby's cries, and let us help you understand the reason!</h2>
//             <div className="cont">
//                 <div className="img">
                  

             
//                     <img src={babycary}>
//                     </img>
//                     <div className="cloudes-animation">
//                     <img src={cloudes}>
//                     </img>
                   
//                     </div>
                   
//                 </div>
//                 <div className="cryes-options">
//                     <div style={{display:"flex" ,gap :"15px"}}>
//                     <div className="type">
//         <h3>Hunger</h3>
//         <p>Babies cry when they're hungry and need feeding.</p>
//     </div>
//     <div className="type">
//         <h3>Sleepiness</h3>
//         <p>When babies are tired, they cry to show they need sleep.</p>
//     </div>
                        
//                      </div>

                  
//                     <div style={{ display: "flex"  ,gap :"15px"}}>
//                     <div className="type">
//         <h3>Discomfort</h3>
//         <p>Babies cry if they're uncomfortable, like from a dirty diaper or being too hot or cold.</p>
//     </div>
//     <div className="type">
//         <h3>Gas and Colic</h3>
//         <p>Gas or colic can make babies cry from stomach pain.</p>
//     </div>
                        
//   </div>
 
//     <div className="type">
//         <h3>Burping</h3>
//         <p>If babies need to burp, they might cry due to trapped air.</p>
//     </div>
// </div>



//             </div>
          
          
            
//         </div>
//     )
// }
import  { useEffect, useRef, useState } from 'react';
import babycary from "../../assets/done.png";
import cloudes from "../../assets/clouds.png";
import hungryimg from "../../assets/2.webp"
import sleepimg from "../../assets/5.png"
import discomfrotimg from "../../assets/8.png"
import Bupring from "../../assets/1.png"
import b from "../../assets/9.png"
import "./Top.css";


export default function Cry() { 
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true); 
                }
            },
            { threshold: 0.1 } 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className={`cry ${isVisible ? 'active' : ''}`} ref={sectionRef}>
            <h2>Listen to your baby's cries, and let us help you understand the reason!</h2>
            <div className="cont">
                <div className="img">
                    <img src={babycary} alt="Baby Crying" />
                    <div className="cloudes-animation">
                        <img src={cloudes} alt="Clouds Animation" />
                    </div>
                </div>
                <div className="cryes-options">
                    <div style={{ display: "flex", gap: "15px" }}>
                        <div className="type">
                            <div style={{display:"flex" , alignItems:"center" ,gap:"10px"}}>
                                <img src={hungryimg} style={{maxWidth:"40px"}}>
                                </img>
                            <h3>Hunger</h3>
                            </div>
                           
                            <p>Babies cry when they're hungry and need feeding.</p>
                        </div>
                        <div className="type">
                            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                <img src={sleepimg} style={{maxWidth:"40px"}}>
                                </img>
                                <h3>Tired</h3>
                            </div>
                            
                            <p>When babies are tired, they cry to show they need sleep.</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "15px" }}>
                        <div className="type">
                            <div style={{ display: "flex", gap: "15px", alignItems:"center" }}>
                                <img src={discomfrotimg} alt="" style={{maxWidth:"40px"}} />
                                <h3>Discomfort</h3>

                            </div>
                        
                            <p>Babies cry if they're uncomfortable, like from a dirty diaper or being too hot or cold.</p>
                        </div>
                        <div className="type">
                            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                                <img src={Bupring} alt="" style={{maxWidth:"40px"}} />
                               
                                <h3>Burping</h3>

                            </div>
                            
                            <p>Gas or colic can make babies cry from stomach pain.</p>
                        </div>
                    </div>
                    <div className="type">
                        <div style={{ display: "flex", alignItems:"center", gap: "15px" }}>
                            <img src={ b} style={{ maxWidth:"40px"}}>
                          
                            </img>
                            
                            <h3>Burping</h3>
                    </div>
                    
                        <p>If babies need to burp, they might cry due to trapped air.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
