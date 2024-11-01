
import  './Growth.css'
import growthimg from "../../assets/baby Growth.jpeg"
import g from "../../assets/growth.png"
export default function Growth() {
  return (
    <div className='growth'>
          
      <div className='cont'>
        
            <div className='card-growth'>
                <img src={growthimg} alt="img" className='babyimggro'/>
          <div >
          <h2>Baby Growth</h2>
                  <img src={g} alt="" className='g'style={{width:'10%'}}/>
                    <p>We understand how crucial it is for you to stay informed about your child's development. As a parent, you want the best for your little one.</p>
                    <p>We’re here to support you every step of the way. Our mission is to provide you with valuable insights into the key stages of growth.</p>
                    <div className='btnex'> <button className="btn-explore">Explore Now</button> </div>
                </div>
            </div>
        </div>
    </div>
  )
}
