import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './homePage.scss';
import Header from './header';
import FriendList from './friendList';
import ChatBox from './chatBox';
import BottomTab from './bottomTab';
interface IProp {
    user: any
}
interface IState {

}
function HomePage(props: any) {
    // let history = useHistory(); 
    // console.log(history);
    console.log("Hello", props);

    return (
        <div id="main-content" className="main-content">
            <div className="box-content" >
                <Header data={props.user} />
                <FriendList />
                <ChatBox />
                <BottomTab />
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        user: state.userReducers.userReducer.data
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)