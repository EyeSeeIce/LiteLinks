import React from 'react';
import classes from './MainPage.module.css'

import { Link, animateScroll as scroll } from "react-scroll";

const Links = () => {
    return (
        <ul>
            <Link activeClass={classes.active} to="main" spy={true} smooth={true} offset={0} duration= {300}>
                <li>Главная</li>
            </Link>
            <Link activeClass={classes.active} to="about" spy={true} smooth={true} offset={0} duration= {300}>
                <li>О проекте</li>
            </Link>
            <Link activeClass={classes.active} to="howItLook" spy={true} smooth={true} offset={0} duration= {300}>
                <li>Как это работает?</li>
            </Link>
            <Link activeClass={classes.active} to="footer" spy={true} smooth={true} offset={0} duration= {300}>
                <li>Подвальчик</li>
            </Link>
        </ul>
    );
};

export default Links;
