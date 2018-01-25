import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as ContainersListActions from '../../actions/Containers/List';
import {connect} from "react-redux";
import {Breadcrumb, Checkbox, Container, Header, Icon, Menu, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";
import _ from 'lodash';

class Containers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toolbarBtnState: {
                play: false,
                repeat: false,
                stop: false,
                remove: false
            }
        };
    }
    componentWillMount() {
        this.props.actions.requestData();
    }

    render() {
        return (<Container>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>Containers</Breadcrumb.Section>
            </Breadcrumb>
            <Menu secondary>
                <Menu.Item active={this.state.toolbarBtnState.play}><Icon name='play'/>Start</Menu.Item>
                <Menu.Item active={this.state.toolbarBtnState.repeat}><Icon name='repeat'/>Restart</Menu.Item>
                <Menu.Item active={this.state.toolbarBtnState.stop}><Icon name='stop'/>Stop</Menu.Item>
                <Menu.Item active={this.state.toolbarBtnState.remove}><Icon name='trash'/>Remove</Menu.Item>
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
                        <Table.Cell><Checkbox/></Table.Cell>
                        <Table.Cell>
                            <Header as='h4'>
                                <Header.Content>{value.Names.join('; ')}</Header.Content>
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