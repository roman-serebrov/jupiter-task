import React from "react";
import classes from './content.module.scss';
import _data from '../../data.js';
import FilterCard from "../FilterCard";
import Card from "../Card/Card";
import { useState } from "react";
import { useCards } from "../../hooks/useFilter";
import reducer from "../../reducer/reducer";
import { useReducer } from "react";

function Content () {

    const [activeCard, setActiveCCard] = useState(0);
    const [query, setQuery] = useState('Show All');
    const [dleCard, setDelCard] = useState(null);
    const changeQuery = (val) => setQuery(val);
    const handlerActiveCard = (id) => setActiveCCard(id);
    const removeCard = (del__id) => setDelCard(del__id);
    const [state, dispatch] = useReducer(reducer, {data: _data});
    const data = useCards(state.data, query, dleCard);
    const loadMore = () => dispatch({type: 'loadMore'});

    return (
        <section className={classes.section__content}>
            <div className={`${classes.section__content__blok} wrap`}>
                <FilterCard 
                    query={query}
                    changeQuery={changeQuery}
                />
                <div className={classes.content__card}>
                   {data.map((item) => 
                    <Card 
                        key={item.id}
                        actived={() => handlerActiveCard(item.id)}
                        active={activeCard === item.id ? true : false }
                        remove={() => removeCard(item.id)}
                        {...item}
                    />
                    )
                   }
                </div>
            </div>
            <div className={classes.load_more}>
                    <button onClick={loadMore}>Load More</button>
            </div>
        </section>
    )
};

export default Content;