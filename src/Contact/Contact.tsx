import React from 'react';
import style from './Contact.module.css'
import styleContainer from "../common/Styles/Container.module.css";

export const Contact = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contactForm}>
                    <input type='text'/>
                    <input type='text'/>
                    <textarea/>
                    <button type='submit' className={style.submitBtn}>Send</button>
                </form>
            </div>

        </div>
    );
};

