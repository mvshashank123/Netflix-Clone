
const initialState=[
    {
        email:"User"
    }
]

const loginReducer =(state=initialState,action) => {
    const {type,payload} =action;
    console.log(initialState);
    switch (type) {
        case "CREATE_LOGIN":
            return{
                ...state,
                ...action.payload
            }
    
        default:
            return state;
    }
}

export default loginReducer;