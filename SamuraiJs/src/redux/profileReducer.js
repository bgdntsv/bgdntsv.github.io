import {profileAPI} from '../api/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PAGE = 'SET_USER_PAGE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO = 'SAVE_PHOTO'
let initialStore = {
    posts: [
        {
            text: 'Hi, how are you?',
            id: '1',
            likes: 15,
            img: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
        },
        {
            text: 'Oh, thanks. I\'m fine)',
            id: '2',
            likes: 25,
            img: 'https://shapka-youtube.ru/wp-content/uploads/2020/07/letter-s-1.jpg'
        }
    ],
    newPostText: '',
    profile: null,
    status: ''
}
const profileReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                text: action.postText,
                id: 5,
                likes: 0,
                img: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg'
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postID)}
        case SET_USER_PAGE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case SAVE_PHOTO:
            return {...state, profile:{...state.profile,photos:action.photos}}
        default:
            return state
    }
}

export const addPostActionCreator = (postText) => ({type: ADD_POST, postText})
const setUserPage = (profile) => ({type: SET_USER_PAGE, profile})
const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postID) => ({type: DELETE_POST, postID})
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos})



export const selectedUser = (userId) =>
    async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserPage(response))
    }
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {

        dispatch(setStatus(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export default profileReducer