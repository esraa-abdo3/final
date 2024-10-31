import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import reminder1 from '../../assets/reminder img 2.jpeg';
import reminder2 from '../../assets/reminder img 1.jpeg';
import heart from '../../assets/Stethoscope.png';
import alarm from '../../assets/pinkAlarm.png';
import injection from '../../assets/Injection .png';
import './Home.css';

export default function Home() {
    const [visibleVectors, setVisibleVectors] = useState([true, false, false]); 

    useEffect(() => {
        const interval1 = setInterval(() => {
            setVisibleVectors((prev) => {
                const newVisible = [...prev];
                newVisible[0] = !newVisible[0]; 
                return newVisible;
            });
        }, 4000); 

        const interval2 = setInterval(() => {
            setVisibleVectors((prev) => {
                const newVisible = [...prev];
                newVisible[1] = !newVisible[1]; 
                return newVisible;
            });
        }, 2000);

        const interval3 = setInterval(() => {
            setVisibleVectors((prev) => {
                const newVisible = [...prev];
                newVisible[2] = !newVisible[2]; 
                return newVisible;
            });
        }, 3000);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        }; 
    }, []);

    return (
        <div>
            <div className="reminder">
                <h2>Reminders</h2>
                <img 
                    src={alarm} 
                    alt="img" 
                    className="vector1" 
                    style={{ opacity: visibleVectors[0] ? 1 : 0, transition: 'opacity 0.9s ease' }} 
                />
                <div>
                    <img src={reminder1} alt="img" className="remImg"/>
                    <h3>Medicine</h3>
                    <p>your children should take his medicines on time. we’ll remind you about your child’s medicine schedule.</p>
                    <button className="btn-explore">Explore Now</button>
                    <img 
                        src={injection} 
                        alt="img" 
                        className="vector2" 
                        style={{ opacity: visibleVectors[1] ? 1 : 0, transition: 'opacity 0.9s ease' }} 
                    />
                </div>
                <div>
                    <img src={reminder2} alt="img" className="remImg" />
                    <h3>Vaccinations</h3>
                    <p>getting all the recommended vaccines on time helps keep your child healthy and safe</p>
                    <button className="btn-explore">Explore Now</button>
                    <img 
                        src={heart} 
                        alt="img" 
                        className="vector3" 
                        style={{ opacity: visibleVectors[2] ? 1 : 0, transition: 'opacity 0.9s ease' }} 
                    />
                </div>
            </div>
        </div>
    );
}