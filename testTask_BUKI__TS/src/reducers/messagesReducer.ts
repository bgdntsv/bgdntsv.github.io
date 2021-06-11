const GET_MESSAGES = 'GET_MESSAGES';
const IS_FETCHING = 'IS_FETCHING'


let initialState = {
    messages:[
        {id: null,
            user: null,
            avatar: null,
            created_at: null,
            message: null}
    ],
    isFetching:false
}
type actionType = {
    type:string
    data?:any
}
const messageReducer = (state=initialState, action:actionType) =>{
    switch (action.type){
        case GET_MESSAGES:
            return{
                ...state, messages:action.data
            }
        case IS_FETCHING:
            return {
                ...state, isFetching: action.data
            }
        default:
            return initialState

    }
}
export default messageReducer
export const isFetching = (fetching:boolean) => ({type:IS_FETCHING, data:fetching})
export const getMessages = (messages:object) => ({type:GET_MESSAGES, data:messages})