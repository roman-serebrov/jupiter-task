import React from 'react';
import logo from '../../assets/Polygon.png';
import logo2 from '../../assets/Polygon2.png';
import classes from './header.module.scss';

function Header() {
    return (
        <header className={classes.header}>
            <div className={`${classes.header__content} wrap`}>
                <div className={classes.header__content__top}>
                    <div className={classes.header__logo}>
                        <div className={classes.header__logo__icon}>
                            <img src={logo} alt="logo1" />
                            <img className={classes.icon__abs} src={logo2} alt="logo2" />
                        </div>
                        <div className="header__logo--name">
                            <h3>Agency</h3>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Pricing</a></li>
                            <li><a href="/">Blog</a></li>
                        </ul>
                    </nav>
                    <div className={classes.header__contact}>
                        <button>contact</button>
                    </div>
                </div>
                <div className={classes.header__content__block}>
                    <div className="header__content--title">
                        <h1>Portfolio</h1>
                    </div>
                    <div className={classes.header__content__description}>
                        <p>Agency provides a full service range including technical skills, design, business understanding.</p>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;