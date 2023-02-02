import React from 'react';
import style from './Hire.module.css'
import styleContainer from "../common/Styles/Container.module.css";

export const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h2 className={style.title}>I am available for Freelance</h2>
                <a href="" className={style.hireBtn}>Hire me</a>
            </div>
        </div>
    );
};
