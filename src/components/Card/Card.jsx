import React from 'react';
import cls from './card.module.scss';


const Card = ({active, name, title, img, actived, remove}) => {
    return (
            <div onClick={actived} className={!active ? cls.card__item : `${cls.card__item} ${cls.active}`} style={{backgroundImage: `url(${img})`}}>
                <div className={cls.card__type}>
                    {name}
                </div>
                <div className={cls.card__title}>
                    {title}
                </div>
                <div onClick={remove} className={cls.card__del}>
                    Del
                </div>
            </div>
    )
};
export default Card;