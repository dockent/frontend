import React, {Component} from 'react';
import {Breadcrumb, Container, Feed, Icon, Label} from "semantic-ui-react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as NotificationsListActions from '../../actions/NotificationsList';
import _ from 'lodash';
import {NotificationStatus} from "../../enums/NotificationStatus";
import {formatDate} from "../../helper";

class NotificationsList extends Component {
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
     * @returns {*}
     */
    render() {
        return (<Container>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>Notifications</Breadcrumb.Section>
            </Breadcrumb>
            <Feed>
                {_.map(this.props.list, (value, key) => (<Feed.Event key={key}>
                    <Feed.Content>
                        <Feed.Summary>
                            <Icon circular color={NotificationsList.mapStatusToColor(value.status)} />
                            <Feed.User>{value.text}</Feed.User>
                            <Feed.Date>{formatDate(value.time)}</Feed.Date>
                            {value.viewed ? null : <Label as="a" tag>New</Label>}
                        </Feed.Summary>
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