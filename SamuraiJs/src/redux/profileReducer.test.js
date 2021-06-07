import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
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
    ]
}

test('add new post', () => {
    let action = addPostActionCreator("new post")
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})
test('delete post', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
})