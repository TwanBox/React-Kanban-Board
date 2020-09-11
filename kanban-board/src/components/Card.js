import React from 'react';
import CardUI from '@material-ui/core/Card';
import { Draggable } from 'react-beautiful-dnd';
import './Card.css';

function Card({ text, id, index }) {
	return (
		<Draggable draggableId={String(id)} index={index}>
		{provided => (
			<div 
				className="card" ref={provided.innerRef}
				{...provided.dragHandleProps}
				{...provided.draggableProps}
			>
				<CardUI className="card-content">
					<p>{text}</p>
				</CardUI>

			</div>
		)}
		</Draggable>
	)
}

export default Card;
