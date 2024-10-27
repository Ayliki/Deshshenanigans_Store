import cl from './styles.module.css';
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className={cl.navbar}>
            <div className={cl.logo}>
                <img src={logo} alt="DeskShenaningans Logo" className={cl.logoImage}/>
                <h2>DeskShenanigans</h2>
            </div>
            <ul className={cl.navLinks}>
                <li><Link to="/" className={cl.link}>Home</Link></li>
                <li><Link to="/shop" className={cl.link}>Shop</Link></li>
                <li><Link to="/cart" className={cl.link}>Cart</Link></li>
                <li><Link to="/wishlist" className={cl.link}>Wishlist</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;