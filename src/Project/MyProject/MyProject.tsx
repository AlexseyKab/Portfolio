import React from 'react';
import style from './MyProject.module.css'

type MyProjectType = {
    title: string
    description: string
}

export const MyProject = (props: MyProjectType) => {
    return (
        <div className={style.block}>
            <div className={style.photo}>

            </div>
            <span className={style.title}>{props.title}</span>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

