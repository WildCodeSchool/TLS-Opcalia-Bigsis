const InitialState = { favoritesFilm: [0,1] }

function toggleFavorite(state = InitialState,action){
    let nextstate
/** test */
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
        const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
        if(favoriteFilmIndex !== -1){
            //suppression
            nextstate={
                ...state,
                favoritesFilm: state.favoritesFilm.filter((item,index) => index !== favoriteFilmIndex)
            }

        } else{
            //ajout
            nextState={
                ...state,
                favoritesFilm: [...state.favoritesFilm, action.value]
            }
        }
        return nextstate || state
        default:
            return state
    }

}

export default toggleFavorite