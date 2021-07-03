import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";
import Report from "../report/report";
import Device from "../device/device";

const Routes = (props) => {
    return (
        <Router history={hashHistory}>
            <Route path='/' component={Dashboard}/>
            <Route path='/billingCycles' component={BillingCycle} />
            <Route path='/report' component={Report} />
            <Route path='/device' component={Device} />
            <Redirect from='*' to='/' />
        </Router>
    )
}

export default Routes