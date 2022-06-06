export const initialState = {
    user: null,
    token: null,
    playlists: [],
    playing: false
}

const reducer = (state, action) => {
    // siempre sirve comprobar que nos llega por action
    console.log(action);
    // Las acciones estan compuestas de su tipo y el payload: Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                // es importarte preservar lo que está en el estado inicial
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer;