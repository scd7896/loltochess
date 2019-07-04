import React from 'react';
import '../css/Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () =>{
    const navStyle = {
        color : 'white'
    }
    return(
        <nav>
            <h3>LoL TFT</h3>
           <ul className ='nav-links'>
               <Link style = {navStyle} to ='/'>
                   <li>Home</li>
               </Link>
                <Link style = {navStyle} to = '/champions'>
                    <li>챔피언 정보</li>
                </Link>
                <Link style = {navStyle} to = '/items'>
                    <li>아이템 정보</li>
                </Link>
                <Link style = {navStyle} to = '/synergy'>
                    <li>챔피언 조합</li>
                </Link>
                
            </ul>
            
        </nav>
    )
}

export default Navbar;