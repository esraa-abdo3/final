// import { Link } from "react-router-dom";

// export default function NextNavbar() {
//     return (
//         <div className="categories">
//             <div className="cont">

            
//               <Link>
//                 Home
//                 </Link>
//                 <Link>
//                 Cry guide
//                 </Link>
//                 <Link>
//                 Reminders
//                 </Link>
//                 <Link>
//                 Baby growth
//                 </Link>
//                 <Link>
//                 Mamy tips
//                 </Link>
//                 <Link>
//                 Doctors
//                 </Link>
//                 <Link>
//                 Shopping
//                 </Link>
//                 <Link>
//                 Enterainment
//                 </Link>
//                 </div>
//         </div>
//     )
// }
import { Link } from "react-router-dom";

export default function NextNavbar({ toggleSidebar }) {
    return (
        <div className="cat">
  <div className="cont">
            <Link to="/" onClick={toggleSidebar}>Home</Link>
            <Link to="/cry-guide" onClick={toggleSidebar}>Cry Guide</Link>
            <Link to="/reminders" onClick={toggleSidebar}>Reminders</Link>
            <Link to="/baby-growth" onClick={toggleSidebar}>Baby Growth</Link>
            <Link to="/mamy-tips" onClick={toggleSidebar}>Mamy Tips</Link>
            <Link to="/doctors" onClick={toggleSidebar}>Doctors</Link>
            <Link to="/shopping" onClick={toggleSidebar}>Shopping</Link>
                <Link to="/entertainment" onClick={toggleSidebar}>Entertainment</Link>
                <Link to="/entertainment" onClick={toggleSidebar}>Community</Link>
                
                
        </div>
        </div>
      
    );
}


