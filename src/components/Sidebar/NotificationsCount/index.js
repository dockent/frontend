import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as CountActions from '../../../actions/NotificationsCount';
import {connect} from "react-redux";
import Storage from "../../../Storage";

class NotificationsCount extends Component {
    /**
     * @param {Object} props
     */
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    componentWillMount() {
        this.props.actions.getUnreadCount();
        let eventSocketConfig = Storage.get('eventSocket');
        this.eventSocket = new WebSocket(`ws://${eventSocketConfig.host}:${eventSocketConfig.port}`);
        this.eventSocket.onopen = (e) => {
            e.preventDefault();
        };
        this.eventSocket.onerror = (e) => {
            console.log(e);
        };
        this.eventSocket.onmessage = (e) => {
            e.preventDefault();
            console.log(e);
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.count);
    }

    componentWillUnmount() {
        this.eventSocket.close();
    }

    /**
     * @returns {*}
     */
    render() {
        return (<div>
            {this.state.count}
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        count: state.notificationsCount
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CountActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsCount);