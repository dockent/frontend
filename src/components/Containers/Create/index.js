import React, {Component} from 'react';
import {connect} from "react-redux";
import {Breadcrumb, Button, Checkbox, Container, Form, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";
import * as ContainerCreateActions from '../../../actions/Containers/Create';
import {bindActionCreators} from "redux";

class Create extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
        this.state = {
            model: {
                Image: '',
                Cmd: '',
                Name: '',
                Start: false
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

    handleChangeCheckbox(e, {name, checked}) {
        console.log(name, checked);
        let model = this.state.model;
        model[name] = checked;
        this.setState({
            model: model
        });
    }

    submit() {
        this.props.actions.createContainer(this.state.model);
    }

    render() {
        return (<Container>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section><Link to='/containers'>Containers</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>Create</Breadcrumb.Section>
            </Breadcrumb>
            <Header size='large'>Create container</Header>
            <Form onSubmit={this.submit}>
                <Form.Field>
                    <Form.Input label='Image' type='text' placeholder='ubuntu:latest' name='Image'
                                value={this.state.model.Image} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.Input label='Cmd' type='text' placeholder='bash' name='Cmd' value={this.state.model.Cmd}
                                onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <Form.Input label='Name' type='text' placeholder='new container' name='Name'
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

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ContainerCreateActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);