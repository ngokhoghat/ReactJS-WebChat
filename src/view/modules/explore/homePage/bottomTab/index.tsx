import React, { Component } from 'react'


import './style.scss'


interface Props {

}
interface States {
    tabActive: number;
}

const tabs = [
    { name: "Chat", icon: "fas fa-user-friends" },
    { name: "Danh bạ", icon: "fas fa-comment" }
]

export default class BottomTab extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
            tabActive: 0
        }
    }
    render() {
        const tab = tabs.map((val, index) => {
            return (
                <div className="bottom-tab__icon" key={index}>
                    <div className="bottom-tab__icon--icon">
                        <i className={val.icon} style={{ color: this.state.tabActive == index ? "#000" : "gray"}}></i>
                    </div>
                    <div className="bottom-tab__icon--text">{val.name}</div>
                </div>
            )
        })
        return (
            <div className="bottom-tab">
                {tab}
            </div>
        )
    }
}
