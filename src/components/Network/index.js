import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as NetworkListActions from '../../actions/Network/List';
import {Breadcrumb, Checkbox, Container, Header, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";
import _ from 'lodash';
import Toolbar from "../Toolbar";
import './index.css';

class Network extends Component {
    constructor(props) {
        super(props);
        this.checkboxChangeState = this.checkboxChangeState.bind(this);
        let toolbarConfig = {
            remove: {
                label: 'Remove',
                icon: 'trash',
                action: () => {
                    this.props.actions.removeNetwork(this.state.selectedItems);
                },
                isActive: () => (_.toArray(this.state.selectedItems).length > 0)
            }
        };
        this.state = {
            toolbarConfig: toolbarConfig,
            selectedItems: {}
        };
    }

    componentWillMount() {
        this.props.actions.requestData();
    }

    checkboxChangeState(event, data) {
        if (data.checked && !(data.value in this.state.selectedItems)) {
            let state = this.state.selectedItems;
            state[data.value] = this.props.list[data.value];
            this.setState({
                selectedItems: state
            });
        }
        if (!data.checked && (data.value in this.state.selectedItems)) {
            let state = this.state.selectedItems;
            delete state[data.value];
            this.setState({
                selectedItems: state
            });
        }
    }

    render() {
        return (<Container>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>Network</Breadcrumb.Section>
            </Breadcrumb>
            <Toolbar toolbarConfig={this.state.toolbarConfig} selectedItems={this.state.selectedItems}/>
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Created</Table.HeaderCell>
                        <Table.HeaderCell>Scope</Table.HeaderCell>
                        <Table.HeaderCell>Driver</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(this.props.list, (value, key) => (<Table.Row key={key}>
                        <Table.Cell><Checkbox onChange={this.checkboxChangeState} value={key}/></Table.Cell>
                        <Table.Cell>
                            <Header as='h4'>
                                <Header.Content>
                                    <Link className='header-link'
                                          to={`/network/view/${value.Id}`}>{value.Name}</Link>
                                </Header.Content>
                                <Header.Subheader>{value.Id}</Header.Subheader>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{value.Created}</Table.Cell>
                        <Table.Cell>{value.Scope}</Table.Cell>
                        <Table.Cell>{value.Driver}</Table.Cell>
                    </Table.Row>))}
                </Table.Body>
            </Table>
        </Container>);
    }
}

function mapStateToProps(state) {
    return {
        list: state.networkList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(NetworkListActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Network);