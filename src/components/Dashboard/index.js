import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as DashboardActions from '../../actions/DashboardActions';
import {connect} from "react-redux";

class Dashboard extends Component {
    componentWillMount() {
        this.props.actions.requestData();
    }

    render() {
        return (<p>dashboard</p>);
    }
}

function mapStateToProps(state) {
    return {
        dashboard: state.dashboard.payload
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DashboardActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);