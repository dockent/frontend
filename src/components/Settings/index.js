import React, {Component} from 'react';
import {connect} from "react-redux";
import {Breadcrumb, Button, Container, Form, Header, Message} from "semantic-ui-react";
import {Link} from "react-router-dom";
import * as SettingsAction from '../../actions/SettingsActions';
import {bindActionCreators} from "redux";
import _ from 'lodash';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            model: {
                beanstalkHost: '',
                beanstalkPort: 0
            }
        };
    }

    handleChange(e, {name, value}) {
        let model = this.state.model;
        model[name] = value;
        this.setState({
            model: model
        });
    }

    submit() {
        this.props.actions.save(this.state.model);
    }

    componentWillMount() {
        this.props.actions.getSettings();
    }

    componentWillReceiveProps(nextProps) {
        if ('model' in nextProps) {
            this.setState({
                model: nextProps.model
            });
        }
    }

    render() {
        let errors = [];
        _.each(this.props.errors, (value) => {
            errors = _.unionWith(errors, value);
        });
        return (<Container>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>Settings</Breadcrumb.Section>
            </Breadcrumb>
            <Header size='large'>Settings</Header>
            <Message>
                <Message.Header>
                    Be careful!
                </Message.Header>
                <div>
                    <p>Edit this settings only if you are sure of what are you doing.</p>
                    <p>After save you need to restart next services: Dockent project, Dockent queue service</p>
                </div>
            </Message>
            <Form onSubmit={this.submit} error={this.props.errors.length !== 0}>
                <Message error header='Errors happened' list={errors}/>
                <Form.Field>
                    <Form.Input label='Beanstalkd host' type='text' name='beanstalkHost'
                                value={this.state.model.beanstalkHost} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.Input label='Beanstalkd port' type='number' name='beanstalkPort'
                                value={this.state.model.beanstalkPort} onChange={this.handleChange}/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>);
    }
}

function mapStateToProps(state) {
    return {
        errors: state.settings.errors,
        model: state.settings.model
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(SettingsAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);