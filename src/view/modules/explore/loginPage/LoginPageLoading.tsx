import React, { Component } from 'react'
import Lottie from 'react-lottie';



import * as animationData from '../../../../assets/animation/lottie/1918loadinganddone.json'
import * as animationDatas from '../../../../assets/animation/lottie/196materialwaveloading.json'
import './loginPage/login_pageLoading.scss'
interface IProps {

}
interface IStates {
    isStopped: any;
    isPaused: any
}
export default class LoginPageLoading extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isStopped: false,
            isPaused: false
        }
    }
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            // @ts-ignore
            animationData: animationDatas.default,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return (
            <div className="loginPage_loading">
                <Lottie
                    options={defaultOptions}
                    width={100}
                    height={100}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}
                />
                <div className="loginPage_loading--icon">
                </div>
            </div>
        )
    }
}
