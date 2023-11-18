import React from 'react';
import './css/index.css';
import {Link} from "react-router-dom";
import {CARS, HOME} from "../../utils/consts";
import logo from "../../img/automobile-equipment-high-resolution-logo-transparent.png"

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'header__logo'}>
                <img className={'header__logo__img'} src={logo} alt=""/>
            </div>
            <div className={'header__nav-menu'}>
                <Link className={'header__nav-menu__link'} to={HOME}>Головна</Link>
                <Link className={'header__nav-menu__link'} to={CARS}>Список машин</Link>
            </div>
        </div>
    );
};

export default Header;