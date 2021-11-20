import React from 'react';
import { useNavigate } from 'react-router-dom';

import './header.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="website__header section__padding" id="home">
            <div className="website__header-content">
                <h1 className="gradient__text"> Amazing food and awesome vibes! Experience the #1 food in the world! Psst our chefs are better than that guy named Gordon Ramsay</h1>
            </div>
            <div className="website__header-content-button">
                    <button type="button" onClick={() => navigate('/Reserve')}>RESERVE A TABLE</button>
            </div>
        </div>

    )
}

export default Header

