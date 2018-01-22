import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as DashboardActions from '../../actions/DashboardActions';
import {connect} from "react-redux";

export class Dashboard extends Component {
    render() {
        return (<p>dashboard</p>);
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DashboardActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);