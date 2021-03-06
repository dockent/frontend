import React, {Component} from 'react';
import {connect} from "react-redux";
import {Breadcrumb, Button, Checkbox, Container, Form, Header, Message} from "semantic-ui-react";
import {Link} from "react-router-dom";
import * as ContainerCreateActions from '../../../actions/Containers/Create';
import {bindActionCreators} from "redux";
import _ from 'lodash';
import {handleChange, handleChangeCheckbox} from "../../../mixins/handleChange";

class Create extends Component {
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
                Image: '',
                Cmd: '',
                Name: '',
                Start: false
            }
        };
    }

    submit() {
        this.props.actions.createContainer(this.state.model);
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
                <Breadcrumb.Section><Link to='/containers'>Containers</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>Create</Breadcrumb.Section>
            </Breadcrumb>
            <Header size='large'>Create container</Header>
            <Form onSubmit={this.submit} error={this.props.errors.length !== 0}>
                <Message error header='Errors happened' list={errors}/>
                <Form.Field>
                    <Form.Input label='Image' type='text' placeholder='ubuntu:latest' name='Image'
                                value={this.state.model.Image} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.Input label='Cmd' type='text' placeholder='bash' name='Cmd' value={this.state.model.Cmd}
                                onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.Input label='Name' type='text' placeholder='new_container' name='Name'
                                value={this.state.model.Name} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Start after creating' name='Start' checked={this.state.model.Start}
                              onChange={this.handleChangeCheckbox}/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>);
    }
}

function mapStateToProps(state) {
    return {
        errors: state.containerCreate.errors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ContainerCreateActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);