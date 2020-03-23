import React, { Component } from 'react'
import './style.scss'

interface Props {

}
interface States {
    active: string;
}

const tabBars = ["Your Profile", "friends", "Chats"]

export default class TabBar extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
            active: tabBars[0]
        }
    }
    render() {
        const tabBar = tabBars.map((item: any, index: any) => {
            return (
                <div
                    key={index}
                    className={this.state.active == item ? "tab-bar__child active" : "tab-bar__child"}
                    onClick={() => { this.setState({ active: item }) }}
                >
                    <p>{item}</p>
                </div>
            )
        })
        return (
            <div className="tab-bar">
                {tabBar}
            </div>
        )
    }
}
