import React, {Component, PropTypes} from 'react'
import {TABCONTANT} from '../../constant/Contant'
import {getRelativeTime} from '../../utils/dateUtil'
import './TopicItem.css'

export default class TopicItem extends Component {

    static PropTypes = {
        tab: PropTypes.string,
        title: PropTypes.string,
        top: PropTypes.bool,
        author: PropTypes.shape({
            loginname: PropTypes.string,
            avatar_url: PropTypes.string
        }),
        reply_count: PropTypes.number,
        visit_count: PropTypes.number,
        create_at: PropTypes.string,
        last_reply_at: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {title, tab, author,reply_count,visit_count,create_at,last_reply_at} = this.props;
        const {onClick} = this.props;
        return (
            <div className="topicItem">
                <h3 className={TABCONTANT[tab]}>{title}</h3>
                <div className="content">
                    <img className="avatar" src={author.avatar_url} />
                    <div className="info">
                        <div className="detail">
                            <span>{author.loginname}</span>
                            <span><b>{reply_count}</b>/{visit_count}</span>
                        </div>
                        <div className="time">
                            <span>{getRelativeTime(create_at)}</span>
                            <span>{getRelativeTime(last_reply_at)}</span>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}