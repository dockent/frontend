import React, {Component} from 'react';
import {Breadcrumb, Container, Header, Tab} from "semantic-ui-react";
import Toolbar from "../../Toolbar";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import * as NetworkListActions from '../../../actions/Network/List';
import * as NetworkInspectActions from '../../../actions/Network/Inspect';
import NetworkInspect from "./NetworkInspect";
import Containers from "./Containers";

class NetworkView extends Component {
    constructor(props) {
        super(props);
        let toolbarConfig = {
            remove: {
                label: 'Remove',
                icon: 'trash',
                action: () => {
                    this.props.listActions.removeNetwork({0: this.state.selectedItems});
                },
                isActive: () => (true)
            }
        };
        this.state = {
            toolbarConfig: toolbarConfig
        };
    }

    componentWillMount() {
        this.props.actions.inspectNetwork(this.props.match.params.id);
    }

    render() {
        const panes = [
            {
                menuItem: 'Network inspect',
                render: () => <Tab.Pane attached={false}><NetworkInspect model={this.props.model}/></Tab.Pane>
            },
            {
                menuItem: 'Containers',
                render: () => <Tab.Pane attached={false}><Containers model={this.props.model}/></Tab.Pane>
            }
        ];
        return (<Container>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section><Link to='/network'>Network</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>{this.props.model.Name}</Breadcrumb.Section>
            </Breadcrumb>
            <Toolbar toolbarConfig={this.state.toolbarConfig}/>
            <Header size='large'>{this.props.model.Name}</Header>
            <Tab menu={{secondary: true, pointing: true}} panes={panes}/>
        </Container>);
    }
}

function mapStateToProps(state) {
    return {
        model: state.networkInspect
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(NetworkInspectActions, dispatch),
        listActions: bindActionCreators(NetworkListActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NetworkView);