
import  './Home.css'
import growthimg from "../../assets/baby Growth.jpeg"
export default function Growth() {
  return (
    <div className='growth'>
      <div className='cont'>
            <h2>Baby Growth</h2>
            <div className='card-growth'>
                <img src={growthimg} alt="img" />
                <div>
                    <p>We understand how crucial it is for you to stay informed about your child's development. As a parent, you want the best for your little one, and we’re here to support you every step of the way. Our mission is to provide you with valuable insights into the key stages of growth, helping you recognize and celebrate each milestone along the journey.</p>
                    <div className='btnex'> <button className="btn-explore">Explore Now</button> </div>
                </div>
            </div>
        </div>
    </div>
  )
}
