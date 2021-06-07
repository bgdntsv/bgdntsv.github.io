import {userAPI} from '../api/api'
import {updateObjectInArray} from '../objectsHelper'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let TOGGLE_IS_FOLlOWING_IN_PROGRESS = 'TOGGLE_IS_FOLlOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLlOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return initialState
    }
}
export default usersReducer
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLlOWING_IN_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await userAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setCurrentPage(page))
    dispatch(setUsers(data.items))
    dispatch(setUsersTotalCount(data.totalCount))

}
let followUnfollow = async (dispatch, userId, methodApi, actionCreator) => {
    dispatch(toggleIsFollowingInProgress(true, userId))
    let response = await methodApi(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingInProgress(false, userId))
}
export const follow = (userId) => async (dispatch) => {
    followUnfollow(dispatch, userId, userAPI.follow.bind(userId), followSuccess)
}
export const unfollow = (userId) => (dispatch) => {
    followUnfollow(dispatch, userId, userAPI.unFollow.bind(userId), unfollowSuccess)
}
