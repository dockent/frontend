import React, {Component} from 'react';
import {List} from "semantic-ui-react";

export default class State extends Component {
    /**
     * @returns {*}
     */
    render() {
        return (<List divided relaxed>
            <List.Item>
                <List.Content>
                    <List.Header>Error</List.Header>
                    {this.props.model.State.Error}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Exit code</List.Header>
                    {this.props.model.State.ExitCode}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Finished at</List.Header>
                    {this.props.model.State.FinishedAt}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>OOM killed</List.Header>
                    {this.props.model.State.OOMKilled ? 'true' : 'false'}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Dead</List.Header>
                    {this.props.model.State.Dead ? 'true' : 'false'}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Paused</List.Header>
                    {this.props.model.State.Paused ? 'true' : 'false'}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Pid</List.Header>
                    {this.props.model.State.Pid}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Restarting</List.Header>
                    {this.props.model.State.Restarting ? 'true' : 'false'}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Running</List.Header>
                    {this.props.model.State.Running ? 'true' : 'false'}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Started at</List.Header>
                    {this.props.model.State.StartedAt}
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Content>
                    <List.Header>Status</List.Header>
                    {this.props.model.State.Status}
                </List.Content>
            </List.Item>
        </List>);
    }
}