import React from 'react';
import Card from './Card';
import AddAnotherBtn from './AddAnotherBtn';
import { Droppable } from 'react-beautiful-dnd';
import './List.css';

function List({ title, cards, listID }) {
	return (
		<Droppable droppableId={String(listID)}>
			{provided => (
				<div {...provided.droppableProps} ref={provided.innerRef} className="list">
					<h4>{title}</h4>
					{cards.map((card, i) => (
						<Card key={card.id} text={card.text} id={card.id} index={card.i} />
					))}
					<AddAnotherBtn listID={listID} />
					{provided.placeholder}
				</div>
			)}
		</Droppable>
  )
}

export default List;
