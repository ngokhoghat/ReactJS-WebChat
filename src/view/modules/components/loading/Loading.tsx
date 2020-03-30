import React, { useState } from 'react'
import Lottie from 'react-lottie';

import * as animationDatas from '../../../../assets/animation/lottie/196materialwaveloading.json'
import './style.scss'


const Loading = () => {
    const [state, setstate] = useState({
        isStopped: false,
        isPaused: false
    })
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
                isStopped={state.isStopped}
                isPaused={state.isPaused}
            />
            <div className="loginPage_loading--icon">
            </div>
        </div>
    )
}

export default Loading;
