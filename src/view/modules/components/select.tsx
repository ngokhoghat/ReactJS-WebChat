import React, { Component } from 'react'
interface Props {
    data: Array<any>;
}

interface States {
    active: any;
    isActive: boolean
}

export default class Select extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        const { data } = this.props;
        this.state = {
            active: data[0],
            isActive: false
        }
    }
    render() {
        const { active } = this.state;
        const status = this.props.data.map((item: any, index: any) => {
            return (
                <div
                    key={index}
                    className="select-custom__status" style={{ color: item.color }}
                    onClick={() => { this.setState({ isActive: !this.state.isActive, active: item }) }}
                >
                    <div className="select-custom__status--icon" style={{ backgroundColor: item.statusColor }}></div>
                    <div>{item.name}</div>
                </div>
            )
        });
        return (
            <div>
                <div
                    className="d-flex align-items-center"
                    style={{ textTransform: "capitalize", color: active.color, position: "relative", cursor: "pointer" }}
                    onClick={() => { this.setState({ isActive: !this.state.isActive }) }}
                >
                    <div className="mr-2">{active.name}</div>
                    <i className="fas fa-angle-down"></i>
                </div>
                <div className="select-custom" style={this.state.isActive ? { display: "block" } : { display: "none" }}>{status}</div>
            </div>
        )
    }
}
