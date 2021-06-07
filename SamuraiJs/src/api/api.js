import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "00d1c0e0-f31d-402f-a46d-00a5a203cfd7"}
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize= 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId){
        return instance.delete(`follow/${userId}`)
    }
}
export const authAPI = {
    authMe(){
        return instance.get(`auth/me`).then(response=>response.data)
    },
    login(email,password,rememberMe=false){
        return instance.post(`auth/login`, {email,password,rememberMe}).then(response=>response.data)
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}
export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status}).then(response=>response.data)

    },
    savePhoto(file){
        const formData = new FormData()
        formData.append("image",file)
        return instance.put(`profile/photo`,formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    }
}


