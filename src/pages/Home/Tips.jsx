
import tipsImg from "../../assets/tipsmamy.png"
import lamp from "../../assets/lamp.png"
import books from "../../assets/books.png"
import openBook from "../../assets/open book.png"
import "./Tips.css"

export default function Tips() {
  return (
    <div className='tips'>
        <div className='cont'>
          
            <div>
            <img src={tipsImg} alt="img" className='tipsimg' />
            <img src={lamp} alt="img" className='lampimg' />
            <img src={books} alt="img" className='bookimg' />
          <div className='tipstext'>
          <h2>Mama Tips</h2>
              <p>We offer helpful tips for mothers on how to care for their babies, addressing everything from feeding and sleep routines to soothing techniques and developmental milestone.</p>
              <button className="btn-explore">Explore Now</button> 
            </div>
            <img src={openBook} alt="img" className='openbookimg' />
            </div>
        </div>
    </div>
  )
}
