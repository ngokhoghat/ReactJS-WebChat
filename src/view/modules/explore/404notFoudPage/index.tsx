import React, { useState } from 'react'
import Lottie from 'react-lottie';

import * as animationDatas from '../../../../assets/animation/lottie/14772-erro-404.json'
const NotFoundPage = () => {
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
        <div className="" style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{width: "100%", height: 300, padding: 30}}>
                <Lottie
                    options={defaultOptions}
                    width={"100%"}
                    height={"100%"}
                    isStopped={state.isStopped}
                    isPaused={state.isPaused}
                />
            </div>
        </div>
    )
}

export default NotFoundPage;