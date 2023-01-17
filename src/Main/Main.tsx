import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/Styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi!</span>
                    <h1>My name Alexsey Kabirovski</h1>
                    <p>I front-end developer</p>
                </div>
                <div className={style.photo}>

                </div>
            </div>
        </div>
    );
};
