import React, {Component} from 'react';
import {connect} from "react-redux";
import {Breadcrumb, Container, Form, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as ContainerEditActions from '../../actions/Containers/Inspect';

class View extends Component {
    componentWillMount() {
        this.props.actions.inspectContainer(this.props.match.params.id);
    }

    render() {
        return (<Container>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section><Link to='/containers'>Containers</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>{this.props.inspect.model.Name}</Breadcrumb.Section>
            </Breadcrumb>
            <Header size='large'>{this.props.inspect.model.Name}</Header>
            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Container name'/>
                </Form.Field>
            </Form>
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