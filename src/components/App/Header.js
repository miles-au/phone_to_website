import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Header = ({ isLoggedIn }) => {
    return (
        <header>
            <Link className="logo-link" to={ROUTES.HOME}>
                <div className="logo">
                    <img className="logo-icon" src={require('./logo-transparent.png')} alt='Phone TO Logo' />
                    <h1 className="logo-text">Phone TO</h1>
                </div>
            </Link>
        </header>
    );
}

export default Header;