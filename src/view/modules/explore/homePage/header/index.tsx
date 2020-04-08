import React, { useState, useEffect } from 'react'
import Select from '../../../components/select/Select'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import userImg from '../../../../../assets/image/png/user.png'
import './style.scss'
import { search } from '../../../../redux/actions/explore/homePage'
interface Props {
    data: any;
    search: (params: any) => void
}
interface States {

}

const Header = ({ data, search }: Props) => {
    const [state, setstate] = useState({
        search: "",
        isSearch: false
    })
    const status = [
        { id: 0, name: "online", color: "#49bc58", statusColor: "#49bc58" },
        { id: 1, name: "offline", color: "#827e7e", statusColor: "red" }
    ]
    const _handelChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name: any = target.name;
        setstate({ ...state, [name]: value });
    }
    useEffect(() => {
        search(state.search)
    }, [state.search])
    console.log(state);
    
    return (
        <div className="header">
            <div className="header__profile">
                <div className="avatar">
                    <div className="avatar__img">
                        <img src={data.userInfor.image !== "" ? data.userInfor.image : userImg} alt="" />
                        <span><p></p></span>
                    </div>
                    <div className="avatar__content">
                        <div className="avatar__content--title">{data.displayName}</div>
                        <Select data={status} />
                    </div>
                </div>
            </div>
            <div className="header__search">
                <div className="input-container">
                    <div className="btn-search">
                        <i className="fas fa-search"></i>
                    </div>
                    <input type="text" placeholder="Tìm kiếm" onFocus={() => { setstate({ ...state, isSearch: true }) }} onChange={_handelChange} value={state.search} name="search" />
                    <div className="btn-close" onClick={() => { setstate({ ...state, isSearch: false, search: "" }) }}>
                        {state.isSearch ? <i className="fas fa-times"></i> : <div></div>}
                    </div>
                </div>
            </div>
            <div className={`search-content ${state.isSearch ? "active" : ""}`}>
                <div
                    className="chat-box__element"
                // onClick={() => { history.push("/chat", item.id) }}
                // key={index}
                >
                    <div className="chat-box__element--avatar">
                        <div className="avatar">
                            <div className="avatar__img">
                                <img src={"https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban.jpg"} alt="" />
                                {/* <span><p></p></span> */}
                            </div>
                        </div>
                    </div>
                    <div className="chat-box__element--old-message">
                        <div className="name">{"NGOC"}</div>
                        {/* <div className="old-massage">Trung: Hello guy</div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (state: any) => {
    return {
    }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        search
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Header)