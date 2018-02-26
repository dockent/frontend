import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as ImagesListActions from '../../actions/Images/List';
import {Breadcrumb, Checkbox, Container, Header, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";
import _ from 'lodash';
import {formatBytes, formatDate} from "../../helper";

class Images extends Component {
    constructor(props) {
        super(props);
        this.checkboxChangeState = this.checkboxChangeState.bind(this);
        let toolbarConfig = {};
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
                <Breadcrumb.Section active>Images</Breadcrumb.Section>
            </Breadcrumb>
            {/*<Toolbar toolbarConfig={this.state.toolbarConfig} selectedItems={this.state.selectedItems}/>*/}
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Repository</Table.HeaderCell>
                        <Table.HeaderCell>Created</Table.HeaderCell>
                        <Table.HeaderCell>Size</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(this.props.list, (value, key) => (<Table.Row key={key}>
                        <Table.Cell><Checkbox onChange={this.checkboxChangeState} value={key}/></Table.Cell>
                        <Table.Cell>
                            <Header as='h4'>
                                <Header.Content>{value.RepoTags}</Header.Content>
                                <Header.Subheader>{value.Id}</Header.Subheader>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{formatDate(value.Created)}</Table.Cell>
                        <Table.Cell>{formatBytes(value.Size)}</Table.Cell>
                    </Table.Row>))}
                </Table.Body>
            </Table>
        </Container>);
    }
}

function mapStateToProps(state) {
    return {
        list: state.imagesList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ImagesListActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);