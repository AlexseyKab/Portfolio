import React from 'react';
import style from './Project.module.css'
import {MyProject} from './MyProject/MyProject';
import styleContainer from '../common/Styles/Container.module.css';
import {Title} from '../common/Components/Title/Title';
import counterImg from '../Assets/image/counter-01.png'
import todolistImg from '../Assets/image/ceb223159632283.Y3JvcCwzMDY4LDI0MDAsNjgsMA.png'

export const Project = () => {

    const todolist = {
        backgroundImage: `url(${todolistImg})`
    }

    const counter = {
        backgroundImage: `url(${counterImg})`
    }

    return (
        <div className={style.project}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
               <Title title={'Projects'}/>
                <div className={style.myProject}>
                   <MyProject style={todolist} title={'Todolist'} description={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available'}/>
                   <MyProject style={counter} title={'Counter'} description={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available'}/>
               </div>
            </div>
        </div>
    );
};

