import React, {Component} from 'react';
import {Table} from "semantic-ui-react";
import _ from 'lodash';

export default class ListOfProcesses extends Component {
    render() {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>PID</Table.HeaderCell>
                        <Table.HeaderCell>User</Table.HeaderCell>
                        <Table.HeaderCell>Time</Table.HeaderCell>
                        <Table.HeaderCell>Command</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(this.props.model.Processes, (value, key) => (<Table.Row key={key}>
                        <Table.Cell>{value[0]}</Table.Cell>
                        <Table.Cell>{value[1]}</Table.Cell>
                        <Table.Cell>{value[2]}</Table.Cell>
                        <Table.Cell>{value[3]}</Table.Cell>
                    </Table.Row>))}
                </Table.Body>
            </Table>
        );
    }
}