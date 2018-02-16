import React, {Component} from 'react';
import {connect} from "react-redux";
import {Breadcrumb, Container, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Create extends Component {
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
        </Container>);
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);