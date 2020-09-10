import React from 'react';
import CardUI from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import './Card.css';

function Card() {
	return (
		<div className="card">
			<CardUI>
				<Typography gutterBottom>
					Word of the Day
				</Typography>
			</CardUI>
		</div>
	)
}

export default Card;
