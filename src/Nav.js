import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { useSelector } from 'react-redux';

function Nav() {
    const user = useSelector(state => state.login_details);
    const [show,handleShow] =useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll");
        }
    },[]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="left">
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix Logo"/>
            </div>
            <div className="right">
            <h5>Hello, {user.email}</h5>
            <img className="nav__avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="profile"/>
            </div>
            
        </div>
    )
}

export default Nav


