import React, {Component} from 'react';
import {Breadcrumb, Button, Container, Feed, Header, Icon, Label} from "semantic-ui-react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as NotificationsListActions from '../../actions/NotificationsList';
import _ from 'lodash';
import {NotificationStatus} from "../../enums/NotificationStatus";
import {formatDate} from "../../helper";

class NotificationsList extends Component {
    constructor(props) {
        super(props);
        this.markAsUnread = this.markAsUnread.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentWillMount() {
        this.props.actions.requestData();
    }

    /**
     * @param {int} status
     * @returns {string}
     */
    static mapStatusToColor(status) {
        let map = {};
        map[NotificationStatus.ERROR] = 'red';
        map[NotificationStatus.INFO] = 'blue';
        map[NotificationStatus.SUCCESS] = 'green';
        if (!(status in map)) {
            return 'grey';
        }
        return map[status];
    }

    /**
     * @param {SyntheticEvent} event
     * @param {Object} data
     */
    markAsUnread(event, data) {
        this.props.actions.markAsUnread(data.value);
        this.props.actions.requestData(false);
    }

    /**
     * @param {SyntheticEvent} event
     * @param {Object} data
     */
    delete(event, data) {
        this.props.actions.deleteNotification(data.value);
        this.props.actions.requestData(false);
    }

    /**
     * @returns {*}
     */
    render() {
        return (<Container>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>Notifications</Breadcrumb.Section>
            </Breadcrumb>
            <Header size='large'>Notifications</Header>
            <Feed>
                {_.map(this.props.list, (value, key) => (<Feed.Event key={key}>
                    <Feed.Label>
                        <Icon color={NotificationsList.mapStatusToColor(value.status)} name='info'/>
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            {value.text}
                            <Feed.Date>{formatDate(value.time)}</Feed.Date>
                            {value.viewed ? null : <Label as="a" tag>New</Label>}
                        </Feed.Summary>
                        <Feed.Meta>
                            <Button size='mini' onClick={this.markAsUnread} value={value.id}>Mark as unread</Button>
                            <Button size='mini' onClick={this.delete} value={value.id}>Delete</Button>
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>))}
            </Feed>
        </Container>)
    }
}

function mapStateToProps(state) {
    return {
        list: state.notificationsList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(NotificationsListActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsList);