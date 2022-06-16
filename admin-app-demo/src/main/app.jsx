import React, {Component} from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from './routes'
import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'
import {loadTree} from './MenuTreeHelper'
import '../common/template/dependencies'

class App extends Component {
    componentDidMount(){
        loadTree()
    }
    render() {
        return (
            <div className='wrapper'>
                <HashRouter>
                    <Header />
                    <SideBar />
                    <Routes />
                    <Footer />
                    <Messages />
                </HashRouter>
            </div>
        )
    }
}

export default App