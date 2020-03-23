import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './homePage.scss';
import Select from '../../components/select';
import TabBar from './tabBar';
import TabContent from './tabContent';
interface IProp {
    user: any
}
interface IState {

}
class HomePage extends Component<IProp, IState> {

    render() {
        const status = [{ id: 0, name: "online", color: "#49bc58", statusColor: "#49bc58" }, { id: 1, name: "offline", color: "#827e7e", statusColor: "red" }]
        return (
            <div id="main-content" className="main-content">
                <div className="box-content" >
                    <div className="header">
                        <div className="header__profile">
                            <div className="avatar">
                                <div className="avatar__img">
                                    <img src="https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg" alt="" />
                                    <span><p></p></span>
                                </div>
                                <div className="avatar__content">
                                    <div className="avatar__content--title">Ngọc Đinh</div>
                                    <Select data={status} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <TabBar />
                    <TabContent />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.loginPageReducer.loginReducer.user
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)