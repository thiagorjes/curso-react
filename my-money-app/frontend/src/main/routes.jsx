import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router";

import { connect } from 'react-redux'


import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";
import Report from "../report/report";
import Device from "../device/device";
import AuthOrApp from './authOrApp'
import App from './app'

const Routes = (props) => {
    return (
        <Router history={hashHistory}>
            <Route path='/' component={AuthOrApp} >
                <IndexRoute component={Dashboard}/>
                <Route path='/billingCycles' component={BillingCycle} />
                <Route path='/device' component={Device} />
                <Route path='/report' component={Report} />
            </Route>
            <Redirect from='*' to='/' />
        </Router>
    )
}


const mapStateToProps = state => ({ user: state.auth.user })
export default connect(mapStateToProps)(Routes)