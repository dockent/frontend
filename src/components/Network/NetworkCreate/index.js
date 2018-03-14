import React, {Component} from 'react';
import {connect} from "react-redux";
import {Breadcrumb, Button, Checkbox, Container, Form, Header, Message} from "semantic-ui-react";
import {Link, withRouter} from "react-router-dom";
import * as NetworkCreateActions from '../../../actions/Network/Create';
import {bindActionCreators} from "redux";
import _ from 'lodash';
import {handleChange, handleChangeCheckbox} from "../../../mixins/handleChange";

class NetworkCreate extends Component {
    /**
     * @param {Object} props
     */
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.handleChange = handleChange.bind(this);
        this.handleChangeCheckbox = handleChangeCheckbox.bind(this);
        this.state = {
            model: {
                Name: '',
                Driver: '',
                CheckDuplicate: false,
                Attachable: false,
                EnableIPv6: false,
                Internal: false,
                Ingress: false
            }
        };
    }

    submit() {
        this.props.actions.createNetwork(this.props.history, this.state.model);
    }

    /**
     * @returns {*}
     */
    render() {
        let errors = [];
        _.each(this.props.errors, (value) => {
            errors = _.unionWith(errors, value);
        });
        return (<Container>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section><Link to='/network'>Network</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>Create</Breadcrumb.Section>
            </Breadcrumb>
            <Header size='large'>Create network</Header>
            <Form onSubmit={this.submit} error={this.props.errors.length !== 0}>
                <Message error header='Errors happened' list={errors}/>
                <Form.Field>
                    <Form.Input label='Name' type='text' name='Name'
                                value={this.state.model.Name} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.Input label='Driver' type='text' placeholder='bridge' name='Driver' value={this.state.model.Driver}
                                onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Check duplicate' name='CheckDuplicate' checked={this.state.model.CheckDuplicate}
                              onChange={this.handleChangeCheckbox}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Attachable' name='Attachable' checked={this.state.model.Attachable}
                              onChange={this.handleChangeCheckbox}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Enable IPv6' name='EnableIPv6' checked={this.state.model.EnableIPv6}
                              onChange={this.handleChangeCheckbox}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Internal' name='Internal' checked={this.state.model.Internal}
                              onChange={this.handleChangeCheckbox}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Ingress' name='Ingress' checked={this.state.model.Ingress}
                              onChange={this.handleChangeCheckbox}/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>);
    }
}

function mapStateToProps(state) {
    return {
        errors: state.networkCreate.errors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(NetworkCreateActions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NetworkCreate));