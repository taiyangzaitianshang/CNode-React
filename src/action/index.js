import {SELECT_TAB, REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_TAB} from './PostAction'
import {selectTab, invalidateTab, receivePosts, requestPosts, fetchData} from './PostAction'
import {REQUEST_TOPIC, RECEIVE_TOPIC} from './TopicAction'
import {receiveTopic, requestTopic, fetchTopicData}from './TopicAction'
import {RECEIVE_USER,REQUEST_USER} from './UserAction'
import {receiveUser,requestUser,fetchUserData} from './UserAction'


//Post
export {SELECT_TAB, REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_TAB}
export {selectTab, invalidateTab, receivePosts, requestPosts, fetchData};
//Topic
export {REQUEST_TOPIC, RECEIVE_TOPIC}
export {receiveTopic, requestTopic, fetchTopicData}
//UserDetail
export {RECEIVE_USER,REQUEST_USER}
export {receiveUser,requestUser,fetchUserData}