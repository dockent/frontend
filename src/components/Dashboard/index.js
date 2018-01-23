import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as DashboardActions from '../../actions/DashboardActions';
import {connect} from "react-redux";
import {Container, Grid, Icon, Statistic} from "semantic-ui-react";

class Dashboard extends Component {
    componentWillMount() {
        this.props.actions.requestData();
    }

    render() {
        return (<Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Statistic>
                            <Statistic.Value>{this.props.dashboard.Containers}</Statistic.Value>
                            <Statistic.Label><Icon name='cube'/> Total containers</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Statistic>
                            <Statistic.Value>{this.props.dashboard.Images}</Statistic.Value>
                            <Statistic.Label><Icon name='database'/> Total images</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Statistic>
                            <Statistic.Value>{this.props.dashboard.ServerVersion}</Statistic.Value>
                            <Statistic.Label><Icon name='fork'/>Server version</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>);
    }
}

function mapStateToProps(state) {
    return {
        dashboard: state.dashboard
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DashboardActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);