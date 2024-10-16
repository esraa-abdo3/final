import { Link } from "react-router-dom"
export default function Home() {
    return (
        <div>
            home
            <Link to="Auth/Signup"> to sign</Link>
            <Link to="Auth/Confirmemail"> con</Link>
        </div>
    )
}