import React from 'react'
import logo from "../assets/logo.png";
import notificationIcon from "../assets/icons/notifications.svg";
import videoCallIcon from "../assets/icons/video_call.svg";
import appsIcon from "../assets/icons/apps.svg";
import searchIcon from '../assets/icons/search.svg';

const Header = () => {
    return (
        <header className="header">
            <a href="/#">
                <img src={logo} className="logo" alt="logo"/>
            </a>
            <div className="search">
                <input type="text" placeholder="Search"/>
                <button>
                    <img src={searchIcon} alt="Search" style={{height: '20px', verticalAlign: 'bottom', filter: 'contrast(0.33)'}}/>
                </button>
            </div>
            <div className="icons">
                <a href="/#">
                    <img src={videoCallIcon} alt="Video_call"/>
                </a>
                <a href="/#">
                    <img src={appsIcon} alt="Apps"/>
                </a>
                <a href="/#">
                    <img src={notificationIcon} alt="Notification"/>
                </a>
            </div>
        </header>
    )
}

export default Header;

