import React, { Component } from 'react'


import './style.scss'
import { Link, Redirect, useHistory } from 'react-router-dom'

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

export default function ChatBox() {
    let history = useHistory();
    return (
        <div className="chat-box">
            <div className="chat-box__element" onClick={() => {
                history.push("/chat")
            }}>
                <div className="chat-box__element--avatar">
                    <div className="avatar">
                        <div className="avatar__img">
                            <img src={"https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg"} alt="" />
                            <span><p></p></span>
                        </div>
                    </div>
                </div>
                <div className="chat-box__element--old-message">
                    <div className="name">Team Chinh Chiến</div>
                    <div className="old-massage">Trung: Hello guy</div>
                </div>
            </div>
            <div className="chat-box__element">
                <div className="chat-box__element--avatar">
                    <div className="avatar">
                        <div className="avatar__img">
                            <img src={"https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg"} alt="" />
                            <span><p></p></span>
                        </div>
                    </div>
                </div>
                <div className="chat-box__element--old-message">
                    <div className="name">Team Chinh Chiến</div>
                    <div className="old-massage">Trung: Hello guy</div>
                </div>
            </div>
            <div className="chat-box__element">
                <div className="chat-box__element--avatar">
                    <div className="avatar">
                        <div className="avatar__img">
                            <img src={"https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg"} alt="" />
                            <span><p></p></span>
                        </div>
                    </div>
                </div>
                <div className="chat-box__element--old-message">
                    <div className="name">Team Chinh Chiến</div>
                    <div className="old-massage">Trung: Hello guy</div>
                </div>
            </div>
            <div className="chat-box__element">
                <div className="chat-box__element--avatar">
                    <div className="avatar">
                        <div className="avatar__img">
                            <img src={"https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg"} alt="" />
                            <span><p></p></span>
                        </div>
                    </div>
                </div>
                <div className="chat-box__element--old-message">
                    <div className="name">Team Chinh Chiến</div>
                    <div className="old-massage">Trung: Hello guy</div>
                </div>
            </div>
            <div className="chat-box__element">
                <div className="chat-box__element--avatar">
                    <div className="avatar">
                        <div className="avatar__img">
                            <img src={"https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg"} alt="" />
                            <span><p></p></span>
                        </div>
                    </div>
                </div>
                <div className="chat-box__element--old-message">
                    <div className="name">Team Chinh Chiến</div>
                    <div className="old-massage">Trung: Hello guy</div>
                </div>
            </div>
            <div className="chat-box__element">
                <div className="chat-box__element--avatar">
                    <div className="avatar">
                        <div className="avatar__img">
                            <img src={"https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg"} alt="" />
                            <span><p></p></span>
                        </div>
                    </div>
                </div>
                <div className="chat-box__element--old-message">
                    <div className="name">Team Chinh Chiến</div>
                    <div className="old-massage">Trung: Hello guy</div>
                </div>
            </div>
            <div className="chat-box__element">
                <div className="chat-box__element--avatar">
                    <div className="avatar">
                        <div className="avatar__img">
                            <img src={"https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg"} alt="" />
                            <span><p></p></span>
                        </div>
                    </div>
                </div>
                <div className="chat-box__element--old-message">
                    <div className="name">Team Chinh Chiến</div>
                    <div className="old-massage">Trung: Hello guy</div>
                </div>
            </div>
            <div className="chat-box__element">
                <div className="chat-box__element--avatar">
                    <div className="avatar">
                        <div className="avatar__img">
                            <img src={"https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg"} alt="" />
                            <span><p></p></span>
                        </div>
                    </div>
                </div>
                <div className="chat-box__element--old-message">
                    <div className="name">Team Chinh Chiến</div>
                    <div className="old-massage">Trung: Hello guy</div>
                </div>
            </div>
            <div className="chat-box__element">
                <div className="chat-box__element--avatar">
                    <div className="avatar">
                        <div className="avatar__img">
                            <img src={"https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg"} alt="" />
                            <span><p></p></span>
                        </div>
                    </div>
                </div>
                <div className="chat-box__element--old-message">
                    <div className="name">Team Chinh Chiến</div>
                    <div className="old-massage">Trung: Hello guy</div>
                </div>
            </div>
            <div className="chat-box__element">
                <div className="chat-box__element--avatar">
                    <div className="avatar">
                        <div className="avatar__img">
                            <img src={"https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg"} alt="" />
                            <span><p></p></span>
                        </div>
                    </div>
                </div>
                <div className="chat-box__element--old-message">
                    <div className="name">Team Chinh Chiến</div>
                    <div className="old-massage">Trung: Hello guy</div>
                </div>
            </div>
            <div className="chat-box__element">
                <div className="chat-box__element--avatar">
                    <div className="avatar">
                        <div className="avatar__img">
                            <img src={"https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg"} alt="" />
                            <span><p></p></span>
                        </div>
                    </div>
                </div>
                <div className="chat-box__element--old-message">
                    <div className="name">Team Chinh Chiến</div>
                    <div className="old-massage">Trung: Hello guy</div>
                </div>
            </div>
            <div className="chat-box__element">
                <div className="chat-box__element--avatar">
                    <div className="avatar">
                        <div className="avatar__img">
                            <img src={"https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg"} alt="" />
                            <span><p></p></span>
                        </div>
                    </div>
                </div>
                <div className="chat-box__element--old-message">
                    <div className="name">Team Chinh Chiến</div>
                    <div className="old-massage">Trung: Hello guy</div>
                </div>
            </div>
            <div className="chat-box__element">
                <div className="chat-box__element--avatar">
                    <div className="avatar">
                        <div className="avatar__img">
                            <img src={"https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg"} alt="" />
                            <span><p></p></span>
                        </div>
                    </div>
                </div>
                <div className="chat-box__element--old-message">
                    <div className="name">Team Chinh Chiến</div>
                    <div className="old-massage">Trung: Hello guy</div>
                </div>
            </div>
        </div>
    )
}
