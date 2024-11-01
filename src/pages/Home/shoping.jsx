
import card1 from "../../assets/shophome....png";
import card2 from "../../assets/shophome2.jpeg";
import card4 from "../../assets/shophome5.png";
import card5 from "../../assets//shophome6.png";
import "./Shopping.css"

export default function Shopping() {
  return (
    <div className='shoping'>
      <div className='cont'>
        <h2>Shopping</h2>
        <div className='cardsShoping'>
          <div className='card1'>
            <img src={card1} alt="img" />
            <button className="btn-explore">Explore Now</button>
          </div>
          <div className='card2'>
            <img src={card2} alt="img" />
            <h3 className='card-title'>Baby Care</h3>
          </div>
          <div className='card4'>
            <img src={card4} alt="img" />
            <h3 className='card-title'>Baby Care</h3>
          </div>
          <div className='card5'>
            <img src={card5} alt="img" />
            <h3 className='card-title'>Baby Care</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
