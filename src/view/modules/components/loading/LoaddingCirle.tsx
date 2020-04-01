import React, { useState } from 'react'
import Lottie from 'react-lottie';

import * as animationDatas from '../../../../assets/animation/lottie/193-material-loading.json'

const LoaddingCirle = () => {
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
        <div className="loading-container">
            <Lottie
                options={defaultOptions}
                width={50}
                height={50}
                isStopped={state.isStopped}
                isPaused={state.isPaused}
            />
        </div>
    )
}
export default LoaddingCirle;