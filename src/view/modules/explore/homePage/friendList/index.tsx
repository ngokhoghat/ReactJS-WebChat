import React, { Component } from 'react'

import './style.scss'

const friendLists = [
    { img: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/06/T%E1%BB%95ng-h%E1%BB%A3p-nh%E1%BB%AFng-h%C3%ACnh-%E1%BA%A3nh-%C4%91%E1%BA%B9p-v%E1%BB%81-bi%E1%BB%83n-4.jpg" },
    { img: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/06/T%E1%BB%95ng-h%E1%BB%A3p-nh%E1%BB%AFng-h%C3%ACnh-%E1%BA%A3nh-%C4%91%E1%BA%B9p-v%E1%BB%81-bi%E1%BB%83n-4.jpg" },
    { img: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/06/T%E1%BB%95ng-h%E1%BB%A3p-nh%E1%BB%AFng-h%C3%ACnh-%E1%BA%A3nh-%C4%91%E1%BA%B9p-v%E1%BB%81-bi%E1%BB%83n-4.jpg" },
    { img: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/06/T%E1%BB%95ng-h%E1%BB%A3p-nh%E1%BB%AFng-h%C3%ACnh-%E1%BA%A3nh-%C4%91%E1%BA%B9p-v%E1%BB%81-bi%E1%BB%83n-4.jpg" },
    { img: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/06/T%E1%BB%95ng-h%E1%BB%A3p-nh%E1%BB%AFng-h%C3%ACnh-%E1%BA%A3nh-%C4%91%E1%BA%B9p-v%E1%BB%81-bi%E1%BB%83n-4.jpg" },
    { img: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/06/T%E1%BB%95ng-h%E1%BB%A3p-nh%E1%BB%AFng-h%C3%ACnh-%E1%BA%A3nh-%C4%91%E1%BA%B9p-v%E1%BB%81-bi%E1%BB%83n-4.jpg" },
    { img: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/06/T%E1%BB%95ng-h%E1%BB%A3p-nh%E1%BB%AFng-h%C3%ACnh-%E1%BA%A3nh-%C4%91%E1%BA%B9p-v%E1%BB%81-bi%E1%BB%83n-4.jpg" },
    { img: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/06/T%E1%BB%95ng-h%E1%BB%A3p-nh%E1%BB%AFng-h%C3%ACnh-%E1%BA%A3nh-%C4%91%E1%BA%B9p-v%E1%BB%81-bi%E1%BB%83n-4.jpg" },
]

export default class FriendList extends Component {
    render() {
        const friendList = friendLists.map((val: any, index: any) => {
            return (
                <div className="friend-list__element" key={index}>
                    <div className="avatar">
                        <div className="avatar__img">
                            <img src={val.img} alt="" />
                            <span><p></p></span>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="friend-list">
                {friendList}
            </div>
        )
    }
}
