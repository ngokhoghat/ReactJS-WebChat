import React, { useState } from 'react'

interface Props {
    data: Array<any>;
}

interface States {
    active: any;
    isActive: boolean
}

const Select = ({ data }: Props) => {
    const [state, setstate] = useState({
        active: data[0],
        isActive: false
    })
    const status = data.map((item: any, index: any) => {
        return (
            <div
                key={index}
                className="select-custom__status" style={{ color: item.color }}
                onClick={() => { setstate({ isActive: !state.isActive, active: item }) }}
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
                style={{ textTransform: "capitalize", color: state.active.color, position: "relative", cursor: "pointer" }}
                onClick={() => { setstate({ ...state, isActive: !state.isActive }) }}
            >
                <div className="mr-2">{state.active.name}</div>
                <i className="fas fa-angle-down"></i>
            </div>
            <div className="select-custom" style={state.isActive ? { display: "block" } : { display: "none" }}>{status}</div>
        </div>
    )
}

export default Select;