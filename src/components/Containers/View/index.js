import React, {Component} from 'react';
import {connect} from "react-redux";
import {Breadcrumb, Container, Header, Tab} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as ContainerEditActions from '../../../actions/Containers/Inspect';
import ContainerInspect from "./ContainerInspect";
import NetworkSettings from "./NetworkSettings";
import Configuration from "./Configuration";
import State from "./State";
import Mounts from "./Mounts";
import ListOfProcesses from "./ListOfProcesses";

class View extends Component {
    componentWillMount() {
        this.props.actions.inspectContainer(this.props.match.params.id);
    }

    render() {
        const panes = [
            {
                menuItem: 'Container inspect',
                render: () => <Tab.Pane attached={false}><ContainerInspect model={this.props.inspect.model}/></Tab.Pane>
            },
            {
                menuItem: 'Network settings',
                render: () => <Tab.Pane attached={false}><NetworkSettings model={this.props.inspect.model}/></Tab.Pane>
            },
            {
                menuItem: 'Configuration',
                render: () => <Tab.Pane attached={false}><Configuration model={this.props.inspect.model}/></Tab.Pane>
            },
            {
                menuItem: 'State',
                render: () => <Tab.Pane attached={false}><State model={this.props.inspect.model}/></Tab.Pane>
            },
            {
                menuItem: 'Mounts',
                render: () => <Tab.Pane attached={false}><Mounts model={this.props.inspect.model}/></Tab.Pane>
            }
        ];
        if (this.props.inspect.top !== null) {
            panes.push({
                menuItem: 'List of processes',
                render: () => <Tab.Pane attached={false}><ListOfProcesses model={this.props.inspect.top}/></Tab.Pane>
            });
        }
        return (<Container>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section><Link to='/containers'>Containers</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>{this.props.inspect.model.Name}</Breadcrumb.Section>
            </Breadcrumb>
            <Header size='large'>{this.props.inspect.model.Name}</Header>
            <Tab menu={{secondary: true, pointing: true}} panes={panes}/>
        </Container>);
    }
}

function mapStateToProps(state) {
    return {
        inspect: state.containerInspect
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ContainerEditActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(View);