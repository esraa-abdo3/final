
import  { useEffect, useRef, useState } from 'react';
import "./Top.css";

import one from "../../assets/second_vectors-removebg-preview.png";
import two from "../../assets/one_vectors-removebg-preview.png";
import three from "../../assets/thirds_vectors-removebg-preview.png";
import aicry from "../../assets/814c07e1-028e-45ae-ad0b-30a0286635d8.jpg";
import health from "../../assets/c1677ffc-a8d9-485a-89c1-be9e4c6d026c.jpg";
import shoppinng from "../../assets/Screenshot 2024-10-31 184619.png";
import micro from "../../assets/3097ebb115dae92cfcbbfd2a7e16e279.jpg";


export default function Top() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true); 
                }
            },
            { threshold: 0.2 } 
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
        <div className={`top ${isVisible ? 'active' : ''}`} ref={sectionRef}>
            <div className="baby-tools1">
                <img src={one} alt="Tool 1" />
            </div>
            <div className="baby-tools2">
                <img src={two} alt="Tool 2" />
            </div>
            <div className="baby-tools3">
                <img src={three} alt="Tool 3" />
            </div>
            <h2>Our best services</h2>
            <div className="cont">
                <div className="featur-1">
                    <img src={micro} style={{ maxWidth: "70px",height:"70px" }} alt="Cry Analysis" />
                    <div className="header">
                        <h4>Cry analysis</h4>
                        <p> With Cry analysis helps you understand your baby's needs with personalized tips and insights for comfort and care.</p>
                    </div>
                </div>
                <div className="featur-1">
                    <img src={health} style={{ maxWidth: "70px",height:"70px" }} alt="Health Care" />
                    <div className="header">
                        <h4>Health care and development</h4>
                        <p>Easily track your baby's health and development with vaccination reminders and health tips for your support.</p>
                    </div>
                </div>
                <div className="featur-1">
                    <img src={shoppinng} style={{ maxWidth: "70px",height:"70px" }} alt="Shopping and Entertainment" />
                    <div className="header">
                        <h4>Entertainment and shopping</h4>
                        <p>Enjoy precious moments with your baby! from stories and games to shopping essentials.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
