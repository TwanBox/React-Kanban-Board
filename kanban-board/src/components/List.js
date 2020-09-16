import React from 'react';
import Card from './Card';
import AddAnotherBtn from './AddAnotherBtn';
import './List.css';

function List({ title, cards, listID }) {
	return (
		<div className="list">
			<h4>{title}</h4>
			{cards.map((card, i) => (
				<Card key={card.id} draggable="true" text={card.text} id={card.id} index={card.i} />
			))}
			<AddAnotherBtn listID={listID} />
		</div>
	)
}

export default List;
