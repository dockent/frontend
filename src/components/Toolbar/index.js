import React, {Component} from 'react';
import {Icon, Menu} from "semantic-ui-react";
import _ from 'lodash';

export default class Toolbar extends Component {
    /**
     * @returns {*}
     */
    render() {
        return (<Menu secondary>
            {_.map(this.props.toolbarConfig, (value, key) => (
                <Menu.Item key={key} onClick={value.action} active={value.isActive()}>
                    <Icon name={value.icon}/>{value.label}
                </Menu.Item>
            ))}
        </Menu>);
    }
}