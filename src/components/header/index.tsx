import React from 'react';

import {FaGhost, FaShoppingCart} from 'react-icons/fa'

import './styles.css';

const Header: React.FC = () => {
    return (
        <div className="container-header">
            <h1 className="logo">GhostPub</h1>
            <div className="ghost_icon">
                <FaGhost />
            </div>
        </div>
    );
}

export default Header;
