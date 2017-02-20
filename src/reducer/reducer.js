import {combineReducers}from 'redux'
import {TABCONTANT} from '../constant/Contant'
import {SELECT_TAB, REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_TAB} from '../action/action'

/*
var state = {
    selectTab: 'top',
    postsByCnode: {
        top: {
            isFetching: true,
            didInvalidate: false,
            data: [],
            fetchedPageCount: '',
            nextPageUrl: ''
        }
    },
    postDetailByCnode: {
        56ef3edd532839c33a99d00e:{

        }
    }
}
*/

var initialPost = {
    isFetching:false,
    didInvalidate:false,
    data:[],
    fetchedPageCount: 0,
    nextPageUrl: ``
}

function selectTab(state="all", action) {
    switch (action.type){
        case SELECT_TAB:
            return action.tab
        default:
            return state
    }
}

function postsByCnode(state={},action) {
    switch (action.type){
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
        case INVALIDATE_TAB:
            return Object.assign({},state,{
                [action.tab]: posts(state[action.tab],action)
            });
        default:
            return state;
    }
}

function posts(state=initialPost,action) {
    switch (action.type){
        case REQUEST_POSTS:
            return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
        });
        case RECEIVE_POSTS:
            return Object.assign({},state,{
                isFetching: false,
                didInvalidate: false,
                data: [...state.data,...action.posts],
                lastUpdated: action.receivedAt,
                fetchedPageCount: state.fetchedPageCount + action.posts.length
            });
        case INVALIDATE_TAB:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    selectTab,
    postsByCnode
});

export default rootReducer;