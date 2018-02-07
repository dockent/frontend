import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as ContainersListActions from '../../actions/Containers/List';
import {connect} from "react-redux";
import {Breadcrumb, Checkbox, Container, Header, Table, Label} from "semantic-ui-react";
import {Link} from "react-router-dom";
import _ from 'lodash';
import './index.css';
import Toolbar from "../Toolbar";

class Containers extends Component {
    constructor(props) {
        super(props);
        this.checkboxChangeState = this.checkboxChangeState.bind(this);
        let toolbarConfig = {
            start: {
                label: 'Start',
                icon: 'play',
                action: () => {
                    this.props.actions.startContainers(this.state.selectedItems);
                },
                isActive: () => {
                    return _.toArray(this.state.selectedItems).length > 0;
                }
            },
            restart: {
                label: 'Restart',
                icon: 'repeat',
                action: () => {
                    this.props.actions.restartContainers(this.state.selectedItems);
                },
                isActive: () => (true)
            },
            stop: {
                label: 'Stop',
                icon: 'stop',
                action: () => {
                    this.props.actions.stopContainers(this.state.selectedItems);
                },
                isActive: () => (true)
            },
            remove: {
                label: 'Remove',
                icon: 'trash',
                action: () => {
                    this.props.actions.removeContainers(this.state.selectedItems);
                },
                isActive: () => (true)
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
            <Toolbar toolbarConfig={this.state.toolbarConfig} selectedItems={this.state.selectedItems}/>
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