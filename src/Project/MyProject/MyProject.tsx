import React from 'react';
import style from './MyProject.module.css'

type MyProjectType = {
    title: string
    description: string
    style: any
}

export const MyProject = (props: MyProjectType) => {
    return (
        <div className={style.block}>
            <div className={style.photo} style={props.style}>
                    <a className={style.viewBtn}><span className={style.text}>View</span></a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

