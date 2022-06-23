function reducer(state, action) {
    switch(action.type) {
        case 'loadMore' :
            return {data:
                    [...state.data, 
                    ...state.data.map((item, i) => ({...item, id: state.data.length + i + 1, title: item.title + i+1 }))]
                }
            default: 
                return state
    }
}

export default reducer;