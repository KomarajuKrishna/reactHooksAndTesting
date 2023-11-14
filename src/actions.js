export const IncrementAction = () => async dispatch =>{
	dispatch({
		type:"INCREMENT"
	})
}

export const DecrementAction = () => async dispatch =>{
	dispatch({
		type:"DECREMENT"
	})
}