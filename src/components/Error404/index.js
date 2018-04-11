import React, {Component} from 'react';
import {Header, Icon} from "semantic-ui-react";

class Error404 extends Component {
    /**
     * @returns {*}
     */
    render() {
        return (
            <Header as='h2' icon textAlign='center'>
                <Icon name='low vision' circular />
                <Header.Content>Page not found</Header.Content>
            </Header>
        );
    }
}

export default Error404;
