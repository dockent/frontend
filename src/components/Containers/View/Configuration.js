import React, {Component} from 'react';
import {List} from "semantic-ui-react";

export default class Configuration extends Component {
    render() {
        return (<List divided relaxed>
            <List.Item>
                <List.Content>
                    <List.Header>Attach Stderr</List.Header>
                    {this.props.model.Config.AttachStderr}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Attach Stdin</List.Header>
                    {this.props.model.Config.AttachStdin}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Attach Stdout</List.Header>
                    {this.props.model.Config.AttachStdout}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Cmd</List.Header>
                    {this.props.model.Config.Cmd.join(' ')}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Domain name</List.Header>
                    {this.props.model.Config.Domainname}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Env</List.Header>
                    {this.props.model.Config.Env.join(';')}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Hostname</List.Header>
                    {this.props.model.Config.Hostname}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Image</List.Header>
                    {this.props.model.Config.Image}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Open Stdin</List.Header>
                    {this.props.model.Config.OpenStdin}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Stdin once</List.Header>
                    {this.props.model.Config.StdinOnce}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Tty</List.Header>
                    {this.props.model.Config.Tty}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>User</List.Header>
                    {this.props.model.Config.User}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Working directory</List.Header>
                    {this.props.model.Config.WorkingDir}
                </List.Content>
            </List.Item>
        </List>);
    }
}