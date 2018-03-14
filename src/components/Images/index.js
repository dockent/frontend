import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as ImagesListActions from '../../actions/Images/List';
import {Breadcrumb, Checkbox, Container, Header, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";
import _ from 'lodash';
import {formatBytes, formatDate} from "../../helper";
import Toolbar from "../Toolbar";
import {checkboxChangeState} from "../../mixins/checkboxChangeState";

class Images extends Component {
    /**
     * @param {Object} props
     */
    constructor(props) {
        super(props);
        this.checkboxChangeState = checkboxChangeState.bind(this);
        let toolbarConfig = {
            remove: {
                label: 'Remove',
                icon: 'trash',
                action: () => {
                    this.props.actions.removeImages(this.state.selectedItems);
                    this.props.actions.requestData();
                    this.setState({
                        selectedItems: {}
                    });
                },
                isActive: () => (_.toArray(this.state.selectedItems).length > 0)
            },
            forceRemove: {
                label: 'Force remove',
                icon: 'trash',
                action: () => {
                    this.props.actions.forceRemoveImages(this.state.selectedItems);
                    this.props.actions.requestData();
                    this.setState({
                        selectedItems: {}
                    });
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

    /**
     * @returns {*}
     */
    render() {
        return (<Container>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>Images</Breadcrumb.Section>
            </Breadcrumb>
            <Toolbar toolbarConfig={this.state.toolbarConfig} selectedItems={this.state.selectedItems}/>
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
                        <Table.Cell>
                            <Checkbox onChange={this.checkboxChangeState} value={key}
                                      checked={key in this.state.selectedItems}/>
                        </Table.Cell>
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