function logger(reducer){
    return (prevState, action) => {
        console.group(action.type)
        console.log('previous state:', prevState)
        console.log('action:', action)
        const newState = reducer(prevState, action)
        console.log('next state:', newState)
        console.groupEnd()
        return newState
    }
}

export default logger