import React, {Component} from 'react';
import {List} from "semantic-ui-react";

export default class NetworkSettings extends Component {
    render() {
        return (<List divided relaxed>
            <List.Item>
                <List.Content>
                    <List.Header>Bridge</List.Header>
                    {this.props.model.NetworkSettings.Bridge}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Sandbox id</List.Header>
                    {this.props.model.NetworkSettings.SandboxID}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Sandbox key</List.Header>
                    {this.props.model.NetworkSettings.SandboxKey}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Hairpin mode</List.Header>
                    {this.props.model.NetworkSettings.HairpinMode}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Link local IPv6 address</List.Header>
                    {this.props.model.NetworkSettings.LinkLocalIPv6Address}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Link local IPv6 prefix length</List.Header>
                    {this.props.model.NetworkSettings.LinkLocalIPv6PrefixLen}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Endpoint id</List.Header>
                    {this.props.model.NetworkSettings.EndpointID}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Gateway</List.Header>
                    {this.props.model.NetworkSettings.Gateway}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Global IPv6 address</List.Header>
                    {this.props.model.NetworkSettings.GlobalIPv6Address}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Global IPv6 prefix length</List.Header>
                    {this.props.model.NetworkSettings.GlobalIPv6PrefixLen}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>IP address</List.Header>
                    {this.props.model.NetworkSettings.IPAddress}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>IP prefix length</List.Header>
                    {this.props.model.NetworkSettings.IPPrefixLen}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>IPv6 gateway</List.Header>
                    {this.props.model.NetworkSettings.IPv6Gateway}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>MAC address</List.Header>
                    {this.props.model.NetworkSettings.MacAddress}
                </List.Content>
            </List.Item>
        </List>);
    }
}