import React from 'react'
import enterainmentimg1 from "../../assets/enterainment img1.jpeg"
import enterainmentimg2 from'../../assets/enterainment img2.jpeg'
import enterainmentimg3 from'../../assets/enterainment img3.jpeg'
import './Home.css'

export default function Enterainment() {
  return (
    <div className='enterainment'>
        <div className='cont'>
        <h2>Enterainment</h2>
        <div className='cardss'>
            <div className='cardss1'>
                <img src={enterainmentimg1} alt="img" />
            </div>
            <div className='cardss2'>
                <img src={enterainmentimg2} alt="img" />
            </div>
            <div className='cardss3'>
                <img src={enterainmentimg3} alt="img" />
            </div>
        </div>
        <p>Our website offers a calming collection of sleep-inducing music, enchanting children's stories, and engaging short educational videos designed to create a nurturing environment for kids.Explore our resources to support your child’s relaxation and growth.</p>
        <div className='btnex'> <button className="btn-explore">Explore Now</button> </div>
        </div>
    </div>
  )
}
