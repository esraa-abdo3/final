
import  { useEffect, useRef, useState } from 'react';

import "./Cry.css";
import fram1 from "../../assets/Frame 101.png"
import fram2 from "../../assets/Frame 102.png"
import fram3 from "../../assets/Frame 101 3.png"
import fram4 from "../../assets/fram4.png"
import fram5 from "../../assets/fram5.png"


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
            <div className="header">
            <h2>Cry Analysis</h2>
            <p>Listen to your baby's cries, and let us help you understand the reason! With cry analysis, we'll provide you with the right tips to meet your baby's needs</p>
            </div>
         
            <div className="cont">
                <div className='box'>
                    <img src={fram1} alt='img'>
                    </img>
                    <div className="text">
                        <h3>
                        Hunger
                        </h3>
                        <p>Babies cry when they're hungry and need feeding</p>
                    </div>
                    
               </div>  <div className='box'>
                    <img src={fram2} alt='img'>
                    </img>
                    <div className="text">
                        <h3>
                        Tired
                        </h3>
                        <p>When babies are tired, they cry to show they need sleep</p>
                    </div>
                    
                </div>
                <div className='box'>
                    <img src={fram3} alt='img'>
                    </img>
                    <div className="text">
                        <h3>
                        Belly pain
                        </h3>
                        <p>Gas or colic can make babies cry from stomach pain</p>
                    </div>
                    
                </div>
                <div className='box'>
                    <img src={fram4} alt='img'>
                    </img>
                    <div className="text">
                        <h3>
                        Discomfort
                        </h3>
                        <p>Babies cry when they're uncomfortable, like from a dirty diaper or temperature discomfort</p>
                    </div>
                    
                </div>
                <div className='box'>
                    <img src={fram5} alt='img'>
                    </img>
                    <div className="text">
                        <h3>
                      
                        Burping </h3>
                        <p>If babies need to burp, they might cry due to trapped ai</p>
                    </div>
                    
               </div>
                  
                </div>
       
          
        </div>
    );
}
