import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href={'http:/google.com'}>Home</a>
            <a href={'http:/google.com'}>Skills</a>
            <a href={'http:/google.com'}>Projects</a>
            <a href={'http:/google.com'}>Contacts</a>
        </div>
    );
};

