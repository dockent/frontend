import React, {Component} from 'react';
import {List} from "semantic-ui-react";
import './index.css';

export default class ContainerInspect extends Component {
    /**
     * @returns {*}
     */
    render() {
        return (<List divided relaxed>
            <List.Item>
                <List.Content>
                    <List.Header>Id</List.Header>
                    {this.props.model.Id}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Image</List.Header>
                    {this.props.model.Image}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Name</List.Header>
                    {this.props.model.Name}
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
                    <List.Header>Args</List.Header>
                    {this.props.model.Args.join(' ')}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Path</List.Header>
                    {this.props.model.Path}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Hostname path</List.Header>
                    <p className='str-wrap'>{this.props.model.HostnamePath}</p>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Hosts path</List.Header>
                    <p className='str-wrap'>{this.props.model.HostsPath}</p>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Log path</List.Header>
                    <p className='str-wrap'>{this.props.model.LogPath}</p>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>App armor profile</List.Header>
                    {this.props.model.AppArmorProfile}
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
                    <List.Header>Mount label</List.Header>
                    {this.props.model.MountLabel}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Process label</List.Header>
                    {this.props.model.ProcessLabel}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Resolve config path</List.Header>
                    {this.props.model.ResolveConfPath}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Restart count</List.Header>
                    {this.props.model.RestartCount}
                </List.Content>
            </List.Item>
        </List>);
    }
}