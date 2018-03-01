import React, {Component} from 'react';
import {List} from "semantic-ui-react";

export default class NetworkInspect extends Component {
    render() {
        return (<List divided relaxed>
            <List.Item>
                <List.Content>
                    <List.Header>Name</List.Header>
                    {this.props.model.Name}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Id</List.Header>
                    {this.props.model.Id}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Created</List.Header>
                    {this.props.model.Created}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Scope</List.Header>
                    {this.props.model.Scope}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Driver</List.Header>
                    {this.props.model.Driver}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Enable IPv6</List.Header>
                    {this.props.model.EnableIPv6}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Internal</List.Header>
                    {this.props.model.Internal}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Attachable</List.Header>
                    {this.props.model.Attachable}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Ingress</List.Header>
                    {this.props.model.Ingress}
                </List.Content>
            </List.Item>
        </List>);
    }
}