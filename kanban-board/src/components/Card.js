import React from 'react';
import CardUI from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import './Card.css';

function Card({ text }) {
	return (
		<div className="card">
			<CardUI>
				<CardContent>
					<Typography gutterBottom>
							{text}
						</Typography>
				</CardContent>
			</CardUI>
		</div>
	)
}

export default Card;
