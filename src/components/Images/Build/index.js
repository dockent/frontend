import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Breadcrumb, Container, Header, List, Form, Button, Message} from "semantic-ui-react";
import './index.css';
import * as ImageBuildActions from '../../../actions/Images/Build';
import {bindActionCreators} from "redux";

class Build extends Component {
    /**
     * @param {Object} props
     */
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submitDockerfilePath = this.submitDockerfilePath.bind(this);
        this.submitDockerfileBody = this.submitDockerfileBody.bind(this);
        this.state = {
            dockerfilePath: '',
            dockerfileBody: ''
        };
    }

    /**
     * @param {Event} e
     * @param {string} name
     * @param {string} value
     */
    handleChange(e, {name, value}) {
        let state = this.state;
        state[name] = value;
        this.setState(state);
    }

    submitDockerfilePath() {
        this.props.actions.buildByDockerfilePath(this.props.history, this.state.dockerfilePath);
    }

    submitDockerfileBody() {
        this.props.actions.buildByDockerfileBody(this.props.history, this.state.dockerfileBody);
    }

    /**
     * @returns {*}
     */
    render() {
        return (<Container>
            <Breadcrumb>
                <Breadcrumb.Section><Link to='/'>Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section><Link to='/images'>Images</Link></Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>Build</Breadcrumb.Section>
            </Breadcrumb>
            <Header size='large'>Build image</Header>
            <p>You can use one of this methods for building your Docker image</p>
            <List divided>
                <List.Item className='list-block'>
                    <List.Content>
                        <List.Header>By Dockerfile path</List.Header>
                        <p>Enter path to folder with your Dockerfile</p>
                        <Form onSubmit={this.submitDockerfilePath}
                              error={'dockerfilePath' in this.props.errors}>
                            <Message error header='Errors happened' list={this.props.errors.dockerfilePath}/>
                            <Form.Field>
                                <Form.Input type='text' placeholder='/tmp/dockerfile_folder' name='dockerfilePath'
                                            value={this.state.dockerfilePath} onChange={this.handleChange}/>
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </List.Content>
                </List.Item>
                <List.Item className='list-block'>
                    <List.Content>
                        <List.Header>By Dockerfile body</List.Header>
                        <p>Type your Dockerfile body here</p>
                        <Form onSubmit={this.submitDockerfileBody}
                              error={'dockerfileBody' in this.props.errors}>
                            <Message error header='Errors happened' list={this.props.errors.dockerfileBody}/>
                            <Form.Field>
                                <Form.TextArea placeholder='FROM busybox' name='dockerfileBody'
                                               value={this.state.dockerfileBody} onChange={this.handleChange}/>
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </List.Content>
                </List.Item>
                <List.Item className='list-block'>
                    <List.Content>
                        <List.Header>Use builder</List.Header>
                        <p>You can use <Link to='/builder'>Docker image builder</Link> which we provide</p>
                    </List.Content>
                </List.Item>
            </List>
        </Container>);
    }
}

function mapStateToProps(state) {
    return {
        errors: state.imageBuild.errors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ImageBuildActions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Build));