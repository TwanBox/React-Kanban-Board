import React from 'react';
import CardUI from '@material-ui/core/Card';
import './Card.css';

function Card({ text, id, index }) {
	return (
			<div className="card">
				<CardUI className="card-content">
					<p>{text}</p>
				</CardUI>
			</div>
	)
}

export default Card;
