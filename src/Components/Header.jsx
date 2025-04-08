import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'
import search from '../assets/search.svg'
import './ComponentsStyle/header.scss'

export default function Header(){

    return (
        <div className="header-bg">
        <div className="wrapper header">
            <a href="#" ><img src={logo} alt="logo" /></a>
            <nav className="header-nav">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
            </nav>

            <div className='header-side'>
                <div className='side-search'>Search
                    <img src={search} alt='search' ></img>
                </div>

                <div className='side-cart'>
                       <a href='#'><img src={cart} alt='cart'></img></a>
                </div>

            </div>


        </div>
        </div>
    )
}