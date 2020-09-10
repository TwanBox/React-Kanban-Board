const initialState = [
	{
		title: 'Features',
		id: 1,
		cards: [
			{
				id: 123,
				text: 'User auth'
			},
			{
				id: 1234,
				text: 'CRUD'
			}
		]
	},
	{
		title: 'done',
		id: 2,
		cards: [
			{
				id: 123,
				text: 'this'
			},
			{
				id: 1234,
				text: 'that'
			},
			{
				id: 1235,
				text: 'another thing'
			},
			{
				id: 123456,
				text: 'i forgot'
			}
		]
	}
]

const listReducer = (state = initialState, action) => {
	switch(action.type) {
		default:
			return state;
	};
};

export default listReducer;