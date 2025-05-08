import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'
import search from '../../assets/search.svg'
import '../ComponentsStyle/header.scss'
import { Link, NavLink } from 'react-router-dom'

export default function Header(){

    return (
        <div className="header-bg">
        <div className="wrapper header">
            <a href="#" ><img src={logo} alt="logo" /></a>
            <nav className="header-nav">
                <NavLink to="/">Home</NavLink >
                <NavLink to="/products">Products</NavLink >
                <NavLink to="/about">About Us</NavLink >
                <NavLink to="/contact">Contact</NavLink >
            </nav>

            <div className='header-side'>
                <div className='side-search'>Search
                    <img src={search} alt='search' ></img>
                </div>

                <div className='side-cart'>
                       <Link to="/cart" href='#'><img src={cart} alt='cart'></img></Link>
                </div>

            </div>


        </div>
        </div>
    )
}