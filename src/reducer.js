const count = 0  

const reducer = (state = count, action)=>{
	const {type, playload} = action // In actions We are having two different type of things 
	switch(type){
		case "INCREMENT" :
			return state + 1
		case "DECREMENT":
			return state - 1
		default:
			return state

	}

}

export default reducer