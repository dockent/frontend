import React, {Component} from 'react';
import {Breadcrumb, Container, Header, Tab} from "semantic-ui-react";
import Toolbar from "../../Toolbar";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Network} from "../../../providers/UrlProvider";

class View extends Component {
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
        const panes = [];
        return (<Container>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section><Link to='/network'>Network</Link></Breadcrumb.Section>
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
        inspect: state.networkInspect
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(NetworkInspectActions, dispatch),
        listActions: bindActionCreators(NetworkListActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Network);