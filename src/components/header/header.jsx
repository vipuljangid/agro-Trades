import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    function toggleNavbar() {
        setIsNavbarOpen(!isNavbarOpen);
      }
    const [toggleMenu, setToggleMenu] = useState(false);
    const onNavClick = (e) => {
        e.preventdefault()
        document.querySelector('.navbar-nav>li>a').on('click', function(){
            document.querySelector('.navbar-collapse').collapse('hide');
    });
    };
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navbar}  `}>
            <div className='container'>
                {/* <a className="navbar-brand" href="/">Raj Traders</a> */}
                <Link className={`navbar-brand ${styles.HeaderLogo}`} to="/"  onClick={onNavClick}><img src="./images/logo.webp" alt="" className='w-100'/></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav ml-auto ${styles.navbarDropDown}`}>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/"  onClick={(e)=>onNavClick(e)}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products"  onClick={(e)=>onNavClick(e)}>Products</Link>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> */}
                </div>
            </div>
        </nav>
    )
}

export default Header