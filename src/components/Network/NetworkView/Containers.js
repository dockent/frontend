import React, {Component} from 'react';
import {Table} from "semantic-ui-react";
import _ from 'lodash';
import {Link} from "react-router-dom";

export default class Containers extends Component {
    render() {
        return (
            <Table basic='very' celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Endpoint Id</Table.HeaderCell>
                        <Table.HeaderCell>MAC address</Table.HeaderCell>
                        <Table.HeaderCell>IPv4 address</Table.HeaderCell>
                        <Table.HeaderCell>IPv6 address</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(this.props.model.Containers, (value, key) => (<Table.Row key={key}>
                        <Table.Cell><Link to={`/containers/view/${key}`}>{value.Name}</Link></Table.Cell>
                        <Table.Cell><Link to={`/containers/view/${key}`}>{value.EndpointID}</Link></Table.Cell>
                        <Table.Cell>{value.MacAddress}</Table.Cell>
                        <Table.Cell>{value.IPv4Address}</Table.Cell>
                        <Table.Cell>{value.IPv6Address}</Table.Cell>
                    </Table.Row>))}
                </Table.Body>
            </Table>
        );
    }
}