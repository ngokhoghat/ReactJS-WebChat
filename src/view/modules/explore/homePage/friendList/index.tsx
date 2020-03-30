import React, { Component } from 'react'
import userImg from '../../../../../assets/image/png/user.png'
import './style.scss'
interface Props {
    data: any
}

const FriendList = ({ data }: Props) => {
    if (data && data.length > 0) {
        const friendID = data.map((val: any, index: any) => val.id);
        const friendArray = friendID.filter((v: any, i: any) => friendID.indexOf(v) === i);
        const friendList = friendArray.map((item: any) => {
            let user = item;
            data.reverse().map((data: any) => {
                user = data.id == user ? data : user;
            })
            return user
        })
        return (
            <div className="friend-list">
                {friendList.map((val: any, index: any) => {
                    return (
                        <div className="friend-list__element" key={index}>
                            <div className="avatar">
                                <div className="avatar__img">
                                    <img src={val.user.img == "empty" ? userImg : val.user.img} alt="" />
                                    <span><p className={val.user.status == 0 ? "offline" : ""}></p></span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return <div>Không có bạn</div>
    }
}
export default FriendList
