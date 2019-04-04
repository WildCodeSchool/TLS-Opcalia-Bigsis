

export  default  function token(state  = {}, action) {
    switch (action.type) {
        case  "CREATE_TOKEN":
            return { ...state, token:  action.token}
        default:
            return  state;
    }
}

