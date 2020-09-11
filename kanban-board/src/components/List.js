import React from 'react';
import Card from './Card';
import AddAnotherBtn from './AddAnotherBtn';
import './List.css';

function List({ title, cards, listID }) {
    return (
        <div className="list">
            <h4>{title}</h4>
            {cards.map(card => (
                <Card key={card.id} text={card.text}/>
            ))}
            <AddAnotherBtn listID={listID} />
        </div>
    )
}

export default List;
