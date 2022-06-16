import React from "react";
import { Switch, Route, IndexRoute, Redirect } from "react-router";

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";
import Report from "../report/report";
import Device from "../device/device";

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Route path='/device' component={Device} />
            <Route path='/report' component={Report} />
            <Redirect from='*' to='/' />
        </Switch>
    )
}

export default Routes