import React, { Component } from 'react'
import './style.scss'

interface Props {

}
interface States {
    isShowSocial: boolean
}

export default class FriendList extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isShowSocial: false
        }
    }

    render() {
        return (
            <div className="friend-list" >
                <div className="friend-list__title">
                    <div style={{ marginRight: 10 }}>FriendList</div>
                    <i className="fas fa-users"></i>
                </div>
                <div className="friend-list__chat">
                    <div style={{ width: "100%" }}>
                        <div className="avatar">
                            <div className="avatar__img" style={{ width: 45, height: 45 }}>
                                <img src="https://4.bp.blogspot.com/-HvIZc4sB4TY/WHY7uf6gqSI/AAAAAAAAkSQ/sOb-EGjJvYk__oVCJbcgTveDsWmYXzXqACLcB/s1600/13501626_1595750880473366_7747698304741635823_n.jpg" alt="" />
                                <span style={{ bottom: 0, right: 0 }}><p></p></span>
                            </div>
                        </div>
                    </div>
                    <div className="chat-btn" onClick={() => { this.setState({ isShowSocial: !this.state.isShowSocial }) }}>
                        <i className="fas fa-comment-dots social-btn-sm"></i>
                    </div>
                    <div className="add-social-btn" onClick={() => { this.setState({ isShowSocial: !this.state.isShowSocial }) }}>
                        <i className="fas fa-plus social-btn-sm"></i>
                    </div>
                    <div className={this.state.isShowSocial ? "social active" : "social"}>
                        <i className="fab fa-facebook social-btn"></i>
                        <i className="fab fa-twitter social-btn"></i>
                        <i className="fab fa-instagram-square social-btn"></i>
                    </div>
                </div>
            </div>
        )
    }
}
