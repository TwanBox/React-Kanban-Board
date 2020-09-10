import React from 'react';
import Card from './Card';
import './List.css';

function List({ title, cards }) {
    return (
        <div className="list">
            <h4>{title}</h4>
            {cards.map(card => <Card text={card.text}/>)}
        </div>
    )
}

export default List;
