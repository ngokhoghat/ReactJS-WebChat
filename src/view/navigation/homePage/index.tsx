import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../../modules/explore/homePage'
import ChatPage from '../../modules/explore/chatPage'

const HomePageComponents = (props: any) => {
    return (
        <Route component={({ match }: any) =>
            <div>
                <Route path='/' component={HomePage} />
                <Route exact path='chat' component={ChatPage} />
            </div>
        } />
    )
}
export default HomePageComponents