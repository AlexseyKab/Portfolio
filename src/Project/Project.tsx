import React from 'react';
import style from './Project.module.css'
import {MyProject} from "./MyProject/MyProject";
import styleContainer from "../common/Styles/Container.module.css";

export const Project = () => {
    return (
        <div className={style.project}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>My Project</h2>
               <div className={style.myProject}>
                   <MyProject title={'Todolist'} description={'Описание'}/>
                   <MyProject title={'Counter'} description={'Описание'}/>
               </div>
            </div>
        </div>
    );
};

