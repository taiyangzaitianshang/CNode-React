import fetch from 'isomorphic-fetch'
import {TOPIC} from '../constant/Contant'

const SELECT_TAB = 'SELECT_TAB'
const REQUEST_POSTS = 'REQUEST_POSTS'
const RECEIVE_POSTS = 'RECEIVE_POSTS'
const INVALIDATE_TAB = 'INVALIDATE_TAB'


const selectTab = (tab) => {
    return {
        type: SELECT_TAB,
        tab
    }
}

const invalidateTab = (tab) => {
    return {
        type: INVALIDATE_TAB,
        tab
    }
}


const requestPosts = (tab) => {
    return {
        type: REQUEST_POSTS,
        tab
    }
}


const receivePosts = (tab, json) => {
    return {
        type: RECEIVE_POSTS,
        tab,
        posts: json.data,
        receivedAt: Date.now()
    }
}

const fetchData = (url, tab = TOPIC.all) => {
    return function (dispatch) {
        dispatch(selectTab(tab))
        dispatch(requestPosts(tab))
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                dispatch(receivePosts(tab, json))
            })
    }
}

export {SELECT_TAB, REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_TAB}
export {selectTab, invalidateTab, receivePosts, requestPosts, fetchData};