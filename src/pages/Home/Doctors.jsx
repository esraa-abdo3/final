import "./Doctors.css"


import ballon from "../../assets/bullon.png"
export default function Doctors() {
    return (
      
        <>
          
            <div className="Doctors">
            {/* <img  className ="ballon"src={ballon} >
            </img> */}
             
             
                <div className="cont">
              
                    <div className="header">
                
                    <h2>Welcome to Our Doctors Network</h2>
                    <p>Our website connects you with qualified doctors for quick, easy access to consultations, advice, and support, ensuring expert care for your child's health needs.</p>
                 
                </div>
            </div>
         
                <div className="cont d">
               
            <div className="doc">
                    <div className="img1">

                    </div>
                    <div className="text">
                    <h3>Dr. Sarah Johnson</h3>
      <p>Family doctor with a focus on preventive care and family health.</p>

                    </div>
                    
                 </div>
                <div className="doc">
                    <div className="img2">
                        
                  </div>
                    <div className="text">
                    <h3>Dr. John Smith</h3>
                    <p>Pediatrician specializing in child healthcare and wellness.</p>

                    </div>
                    
                </div>
                <div className="doc">
                    <div className="img3">
                        
                  </div>
                    <div className="text">
                    <h3>Dr. Emily Davis</h3>
                    <p>General practitioner providing comprehensive medical consultations.</p>

                    </div>
                    
                </div>
            

            </div>
            
            </div>
        
                    
        
           
                 
</>
        
    )
}
// import { useEffect, useRef } from "react";
// import "./Doctors.css";

// import foot from "../../assets/foot.png";

// export default function Doctors() {
//     const sectionRef = useRef(null);
//     const docsRef = useRef([]);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         docsRef.current.forEach((doc, index) => {
//                             setTimeout(() => {
//                                 doc.classList.add("animate");
//                             }, index * 200); // تأخير كل عنصر بمقدار 200 مللي ثانية
//                         });
//                     }
//                 });
//             },
//             { threshold: 0.2 } // Trigger when 20% of the section is visible
//         );

//         const section = sectionRef.current;
//         if (section) {
//             observer.observe(section);
//         }

//         return () => {
//             if (section) {
//                 observer.unobserve(section);
//             }
//         };
//     }, []);

//     return (
//         <div className="Doctors" ref={sectionRef}>
//             <img src={foot} alt="footer img" />
//             <div className="cont">
//                 <div className="header">
//                     <h2>Welcome to Our Doctors Network</h2>
//                     <p>
//                         Our website provides easy access to a network of qualified doctors who are ready to assist you and your family. With just a few clicks, you can connect with healthcare professionals for consultations, advice, and support, ensuring that your child’s health needs are met with care and expertise.
//                     </p>
//                 </div>
//             </div>

//             <div className="cont d">
//                 <div className="doc img1" ref={(el) => (docsRef.current[0] = el)}>
//                     <div className="text">
//                         <h3>Dr. Sarah Johnson</h3>
//                         <p>Family doctor with a focus on preventive care and family health.</p>
//                     </div>
//                 </div>
//                 <div className="doc img2" ref={(el) => (docsRef.current[1] = el)}>
//                     <div className="text">
//                         <h3>Dr. John Smith</h3>
//                         <p>Pediatrician specializing in child healthcare and wellness.</p>
//                     </div>
//                 </div>
//                 <div className="doc img3" ref={(el) => (docsRef.current[2] = el)}>
//                     <div className="text">
//                         <h3>Dr. Emily Davis</h3>
//                         <p>General practitioner providing comprehensive medical consultations.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

