import React from "react";
import { useState } from "react";
import cls from'./select.module.scss';

const Select = ({query, changeQuery}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div onClick={() => setIsOpen(!isOpen)}  className={cls.select} >
            <input className="select__input" type="hidden" name="" />
            <div className={!isOpen ? cls.select__head : `${cls.select__head} ${cls.open}`}>{query}</div>
            <ul className={cls.select__list} style={{display: isOpen ? 'block' : 'none'}}>
            <li onClick={(e) => changeQuery(e.target.textContent)} className={cls.select__item}>Show All</li>
                <li onClick={(e) => changeQuery(e.target.textContent)} className={cls.select__item} >Branding</li>
                <li onClick={(e) => changeQuery(e.target.textContent)} className={cls.select__item}>Design</li>
                <li onClick={(e) => changeQuery(e.target.textContent)} className={cls.select__item}>Illustration</li>
            </ul>
        </div>
    );
};

export default Select;