import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { ping } from '../../../redux/actions/ping'
interface IProps {
    ping: any,
    isPinging: any
}
interface IStates {
    isPinging: any,
}

class TestEpic extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isPinging: false,
        }
    }
    render() {
        const { isPinging } = this.props;
        console.log(isPinging);

        return (
            <div>
                <h1>is pinging: {isPinging ? "true" : "false"}</h1>
                <button onClick={() => { this.props.ping() }}>
                    Start PING
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        isAut: state.loginPageReducer.loginReducer.isAut,
        isPinging: state.testEpic.pingReducer.isPinging
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        ping
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(TestEpic)