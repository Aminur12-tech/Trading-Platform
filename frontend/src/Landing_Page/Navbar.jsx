import logo from '../Landing_Page/assets/logo.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#fff', boxShadow: '2px 1px 2px #eee', padding: '1rem 3rem', position: 'sticky', top: '0', width:'100%' }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo" style={{ width: '10rem' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="nav justify-content-end navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/Signup">SignUp</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/Product">Products</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/Pricing">Pricing</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/Support">Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
