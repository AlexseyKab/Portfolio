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
                    <a className={style.viewBtn}>Смотреть</a>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

