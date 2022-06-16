import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { connect } from 'react-redux'


import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

const Routes = (props) => {
    return (
        <div className='content-wrapper'>
            <Switch>
                <Route exact path='/' component={Dashboard}></Route>
                <Route path='/billingCycles' component={BillingCycle}></Route>
                <Redirect from='*' to='/'/>
            </Switch>
        </div>
    )
}


const mapStateToProps = state => ({ user: state.auth.user })
export default connect(mapStateToProps)(Routes)