
export const initialState = {
    agendas: [],
}

function reducer(state, action){
    console.log(action);
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                agendas: [...state.agendas, action.item],
            }
        case 'DELETE':
            let newAgenda = [...state.agendas];
            const index = state.agendas.findIndex((agendaItem) => agendaItem.id === action.id);
            if(index >= 0){
                newAgenda.splice(index, 1);
            }
            else{
                console.warn(`Product ID: ${action.id} doesn't exists`);
            }
            return {
                ...state, agendas: newAgenda
            }
        
        
    }

}

export default reducer;