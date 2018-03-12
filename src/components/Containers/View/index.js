import React, {Component} from 'react';
import {connect} from "react-redux";
import {Breadcrumb, Container, Header, Tab} from "semantic-ui-react";
import {Link, withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as ContainerInspectActions from '../../../actions/Containers/Inspect';
import * as ContainersListActions from '../../../actions/Containers/List';
import * as RedirectAction from '../../../actions/GlobalRedirectAction';
import ContainerInspect from "./ContainerInspect";
import NetworkSettings from "./NetworkSettings";
import Configuration from "./Configuration";
import State from "./State";
import Mounts from "./Mounts";
import ListOfProcesses from "./ListOfProcesses";
import {ContainerState} from "../../../enums/ContainerState";
import Toolbar from "../../Toolbar";

class View extends Component {
    constructor(props) {
        super(props);
        let toolbarConfig = {
            start: {
                label: 'Start',
                icon: 'play',
                action: () => {
                    this.props.listActions.startContainers({0: this.props.inspect.model});
                    this.props.actions.inspectContainer(this.props.match.params.id);
                },
                isActive: () => (this.props.inspect.model.State.Status !== ContainerState.RUNNING)
            },
            restart: {
                label: 'Restart',
                icon: 'repeat',
                action: () => {
                    this.props.listActions.restartContainers({0: this.props.inspect.model});
                },
                isActive: () => (this.props.inspect.model.State.Status === ContainerState.RUNNING)
            },
            stop: {
                label: 'Stop',
                icon: 'stop',
                action: () => {
                    this.props.listActions.stopContainers({0: this.props.inspect.model});
                },
                isActive: () => (this.props.inspect.model.State.Status === ContainerState.RUNNING)
            },
            remove: {
                label: 'Remove',
                icon: 'trash',
                action: () => {
                    this.props.listActions.removeContainers({0: this.props.inspect.model});
                    this.props.redirect.redirect(this.props.history, '/containers');
                },
                isActive: () => (true)
            }
        };
        this.state = {
            toolbarConfig: toolbarConfig
        };
    }

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
            <Toolbar toolbarConfig={this.state.toolbarConfig}/>
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
        actions: bindActionCreators(ContainerInspectActions, dispatch),
        listActions: bindActionCreators(ContainersListActions, dispatch),
        redirect: bindActionCreators(RedirectAction, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(View));