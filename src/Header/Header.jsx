import { Link } from 'react-router-dom'
import './header.css'
export default function Header(){
    return (
        <header>
            <h1>many small applications</h1>
            <nav>
                <Link to='/'>loan form</Link>
                <Link to='/calculator'>calculator</Link>
                <Link to='/gallery'>Gallery</Link>
            </nav>
        </header>
    )
}