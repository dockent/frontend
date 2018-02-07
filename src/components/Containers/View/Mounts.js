import React, {Component} from 'react';
import {Table} from "semantic-ui-react";
import _ from 'lodash';

export default class Mounts extends Component {
    render() {
        return (
            <Table basic='very' celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Source</Table.HeaderCell>
                        <Table.HeaderCell>Destination</Table.HeaderCell>
                        <Table.HeaderCell>Driver</Table.HeaderCell>
                        <Table.HeaderCell>Mode</Table.HeaderCell>
                        <Table.HeaderCell>RW</Table.HeaderCell>
                        <Table.HeaderCell>Propagation</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(this.props.model.Mounts, (value, key) => (<Table.Row key={key}>
                        <Table.Cell>{value.Name}</Table.Cell>
                        <Table.Cell>{value.Source}</Table.Cell>
                        <Table.Cell>{value.Destination}</Table.Cell>
                        <Table.Cell>{value.Driver}</Table.Cell>
                        <Table.Cell>{value.Mode}</Table.Cell>
                        <Table.Cell>{value.RW ? 1 : 0}</Table.Cell>
                        <Table.Cell>{value.Propagation}</Table.Cell>
                    </Table.Row>))}
                </Table.Body>
            </Table>
        );
    }
}