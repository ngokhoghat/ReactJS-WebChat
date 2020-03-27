import React, { Component } from 'react'
import Select from '../../../components/select'
import './style.scss'

interface Props {
    data: any
}
interface States {

}
export default class Header extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const status = [{ id: 0, name: "online", color: "#49bc58", statusColor: "#49bc58" }, { id: 1, name: "offline", color: "#827e7e", statusColor: "red" }]
        const { data }: any = this.props;
        return (
            <div className="header">
                <div className="header__profile">
                    <div className="avatar">
                        <div className="avatar__img">
                            <img src={data.img} alt="" />
                            <span><p></p></span>
                        </div>
                        <div className="avatar__content">
                            <div className="avatar__content--title">{data.name}</div>
                            <Select data={status} />
                        </div>
                    </div>
                </div>
                <div className="header__search">
                    <div className="input-container">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Tìm kiếm" />
                    </div>
                </div>
            </div>
        )
    }
}
