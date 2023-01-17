import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/Styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillBlock}>
            <div className={`${styleContainer.container} ${style.skillContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'HTML'} description={'Can write simple and complex websites in HTML'}/>
                    <Skill title={'CSS'} description={'Impeccably using Cascading Style Sheets to make your website or app look great'}/>
                    <Skill title={'TS'} description={'I can distinguish a string from a number, type a state and an entire application'}/>
                    <Skill title={'JS'} description={'I solve problems in JavaScript, write applications and websites'}/>
                    <Skill title={'React'} description={'Using the React library, I make single-page applications for any task'}/>
                    <Skill title={'Redux'} description={'Using the React library, I make single-page applications for any task'}/>
                    <Skill title={'NodeJS'} description={'Using the React library, I make single-page applications for any task'}/>
                </div>
            </div>
        </div>
    );
};

