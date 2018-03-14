import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import _ from 'lodash';
import {Breadcrumb, Button, Container, Form, Header, Message} from "semantic-ui-react";
import * as BuilderActions from '../../actions/BuilderActions';

class Builder extends Component {
    /**
     * @param {Object} props
     */
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            model: {
                from: '',
                run: '',
                cmd: '',
                expose: '',
                env: '',
                add: '',
                copy: '',
                volume: '',
                workdir: ''
            }
        };
    }

    /**
     * @param {Event} e
     * @param {string} name
     * @param {string} value
     */
    handleChange(e, {name, value}) {
        let model = this.state.model;
        model[name] = value;
        this.setState({
            model: model
        });
    }

    submit() {
        this.props.actions.builderRequest(this.props.history, this.state.model);
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
                <Breadcrumb.Section><Link to='/images'>Images</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section><Link to='/images/build'>Build image</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>Docker image builder</Breadcrumb.Section>
            </Breadcrumb>
            <Header size='large'>Docker image builder</Header>
            <Form onSubmit={this.submit} error={this.props.errors.length !== 0}>
                <Message error header='Errors happened' list={errors}/>
                <Form.Field>
                    <Form.Input label='From' type='text' placeholder='ubuntu:latest' name='from'
                                value={this.state.model.from} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.TextArea label='Run' placeholder='apt-get update' name='run'
                                   value={this.state.run} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.Input label='Cmd' type='text' placeholder='["executable","param1","param2"]' name='cmd' value={this.state.model.cmd}
                                onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.Input label='Expose' type='text' placeholder='80' name='expose'
                                value={this.state.model.expose} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.TextArea label='Env' placeholder='<key> <value>' name='env'
                                   value={this.state.env} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.TextArea label='Add' placeholder='<src> <dest>' name='add'
                                   value={this.state.add} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.TextArea label='Copy' placeholder='<src> <dest>' name='copy'
                                   value={this.state.copy} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.Input label='Volume' type='text' placeholder='/data,/data2' name='volume'
                                value={this.state.model.volume} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.Input label='Workdir' type='text' placeholder='/path/to/workdir' name='workdir'
                                value={this.state.model.workdir} onChange={this.handleChange}/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>);
    }
}

function mapStateToProps(state) {
    return {
        errors: state.builder.errors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(BuilderActions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Builder));