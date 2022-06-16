import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../operator/if'
import { selectTab } from './tabAction'

class TabHeader extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[this.props.target]
        return (
            <If test={visible}>
                <li className={`nav-item`}>
                    <a href='#'
                        data-toggle="pill"
                        role="tab"
                        onClick={() => this.props.selectTab(this.props.target)}
                        data-target={this.props.target}
                        className={`nav-link ${selected ? 'active' : ''}`}
                    >
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
                </li>
            </If>
            
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToPros = dispatch => bindActionCreators({ selectTab }, dispatch)


export default connect(mapStateToProps, mapDispatchToPros)(TabHeader)