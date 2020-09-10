import React from 'react';
import Card from './Card';
import './List.css';

function List({ title }) {
    return (
        <div className="list">
            <h4>{title}</h4>
            <Card />
        </div>
    )
}

export default List;
