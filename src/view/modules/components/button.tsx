import React, { Component } from 'react'
import * as firebase from 'firebase'
interface IProps {

}

interface IState {
    speed: any
}

export default class Button extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            speed: 10
        }
    }
    componentDidMount = () => {
        const rootRef = firebase.database().ref().child('react');
        const speedRef = rootRef.child('speed');
        speedRef.on('value', snap =>{
            this.setState({
                speed: snap.val()
            })
        })
        console.log(speedRef);
        
    }
    render() {
        return (
            <>
                <button onClick={() => { alert("Hello NgocDinh") }} >Hello {this.state.speed}</button>
            </>
        )
    }
}
