import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as ContainersListActions from '../../actions/Containers/List';
import {connect} from "react-redux";
import {Breadcrumb, Container, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Containers extends Component {
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
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Image</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
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