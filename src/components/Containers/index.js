import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as ContainersListActions from '../../actions/Containers/List';
import {connect} from "react-redux";
import {Breadcrumb, Checkbox, Container, Header, Icon, Menu, Table, Label} from "semantic-ui-react";
import {Link} from "react-router-dom";
import _ from 'lodash';
import './index.css';

class Containers extends Component {
    constructor(props) {
        super(props);
        this.checkboxChangeState = this.checkboxChangeState.bind(this);
        this.selectedItems = {};
        this.state = {
            toolbarConfig: {
                start: {
                    label: 'Start',
                    icon: 'play',
                    action: () => {
                        this.props.actions.startContainers(this.selectedItems);
                    }
                },
                restart: {
                    label: 'Restart',
                    icon: 'repeat',
                    action: () => {
                        this.props.actions.restartContainers(this.selectedItems);
                    }
                },
                stop: {
                    label: 'Stop',
                    icon: 'stop',
                    action: () => {
                        this.props.actions.stopContainers(this.selectedItems);
                    }
                },
                remove: {
                    label: 'Remove',
                    icon: 'trash',
                    action: () => {
                        this.props.actions.removeContainers(this.selectedItems);
                    }
                }
            }
        };
    }

    componentWillMount() {
        this.props.actions.requestData();
    }

    checkboxChangeState(event, data) {
        if (data.checked && !(data.value in this.selectedItems)) {
            this.selectedItems[data.value] = this.props.list[data.value];
        }
        if (!data.checked && (data.value in this.selectedItems)) {
            delete this.selectedItems[data.value];
        }
    }

    mapStateToColor(state) {
        let map = {
            running: 'green',
            exited: 'red'
        };
        if (!(state in map)) {
            return 'grey';
        }
        return map[state];
    }

    render() {
        return (<Container>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>Containers</Breadcrumb.Section>
            </Breadcrumb>
            <Menu secondary>
                {_.map(this.state.toolbarConfig, (value, key) => (
                    <Menu.Item key={key} onClick={value.action}><Icon name={value.icon}/>{value.label}</Menu.Item>
                ))}
            </Menu>
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(this.props.list, (value, key) => (<Table.Row key={key}>
                        <Table.Cell><Checkbox onChange={this.checkboxChangeState} value={key}/></Table.Cell>
                        <Table.Cell>
                            <Header as='h4'>
                                <Header.Content>
                                    <Label circular color={this.mapStateToColor(value.State)} empty/>
                                    <Link className='header-link'
                                          to={`/containers/view/${value.Id}`}>{value.Names.join('; ')}</Link>
                                </Header.Content>
                                <Header.Subheader>{value.Image}</Header.Subheader>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{value.Status}</Table.Cell>
                    </Table.Row>))}
                </Table.Body>
            </Table>
        </Container>);
    }
}

function mapStateToProps(state) {
    return {
        list: state.containersList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ContainersListActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Containers);