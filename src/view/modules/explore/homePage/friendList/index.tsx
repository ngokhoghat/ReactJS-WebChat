import React from 'react'
import userImg from '../../../../../assets/image/png/user.png'
import './style.scss'
interface Props {
    data: any
}

const FriendList = ({ data }: Props) => {
    if (data && data.length > 0) {
        return (
            <div className="friend-list">
                {data.map((val: any, index: any) => {
                    return (
                        <div className="friend-list__element" key={index}>
                            <div className="avatar">
                                <div className="avatar__img">
                                    <img src={val.img !== "" ? val.img : userImg} alt="" />
                                    <span><p className={val.status ? "" : "offline"}></p></span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div className="text-center">Thêm bạn bè <i className="fas fa-user-plus"></i></div>
        )
    }
}
export default FriendList
