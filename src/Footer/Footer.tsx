import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/Styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Alexsey Kabirovski</h2>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                </div>
                <span className={style.copyright}>2019 Все права защищены </span>
            </div>

        </div>
    );
};
