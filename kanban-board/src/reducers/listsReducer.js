import { Droppable } from 'react-beautiful-dnd';
import { CONSTANTS } from '../actions';

let listID = 0;
let cardID = 0;



const listReducer = (state = [], action) => {
	switch(action.type) {
		case CONSTANTS.ADD_LIST:
			const newList = {
				id: listID,
				title: action.payload,
				cards: []
			}
			listID += 1;
			return [...state, newList];
		case CONSTANTS.ADD_CARD:
			const newCard = {
				id: cardID,
				text: action.payload.text
			}
			cardID += 1;

			const updatedList = state.map(list => {
				if(list.id === action.payload.listID) {
					return {
						...list,
						cards: [...list.cards, newCard]
					}
				} else {
					return list;
				}
			})
			return updatedList;
		case CONSTANTS.DRAG_DONE:

			const {
				droppableIdStart,
            	droppableIdEnd,
            	droppableIndexStart,
				droppableIndexEnd,
				draggableId
			} = action.payload;

			const newState = [...state];
			
			// Moving cards in the same list
			if (droppableIdStart === droppableIdEnd) {
				const list = state.find(list => droppableIdStart === list.id);
				const card = list.cards.splice(droppableIndexStart);
				list.cards.splice(droppableIndexEnd, 0, ...card)
			}

			return newState;
			
		default:
			return state;
	};
};

export default listReducer;