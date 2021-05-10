import React ,{useState}from 'react'
import './header.styles.scss';
import {Link} from 'react-router-dom';

import { AiOutlineSearch ,AiOutlineCloseCircle} from "react-icons/ai";
function Header() {

    const [open , setOpen]= useState(false);

 

    return (
        <header>
            <div className="header container">
                <h1>Buzzy</h1>
                <div className="header__list">
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/">news</Link></li>
                        <li><Link to="/">lists</Link></li>
                        <li><Link to="/">quizzes</Link></li>
                        <li><Link to="/">polls</Link></li>
                        <li><Link to="/">videos</Link></li>
                    </ul>
                </div>
                <AiOutlineSearch onClick={() => setOpen(!open)} className="header__icon"/>

            </div>
            {(open && (
                
                <div className="search">
                    <input 
                    className="search__input"
                        name="search" 
                        type="text"
                        placeholder="search"
                    />
                    <AiOutlineSearch className="search__icon"/>
                    <AiOutlineCloseCircle onClick={() => setOpen(false)} className="close__icon"/>
                    
                </div>)
                )}
        </header>
    )
}

export default Header
