import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as DashboardActions from '../../actions/DashboardActions';
import {connect} from "react-redux";
import {Container, Grid, Icon, List, Statistic} from "semantic-ui-react";
import ContainerPieChart from "./ContainerPieChart";
import {formatBytes} from "../../helper";

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
                <Grid.Row>
                    <Grid.Column width={6}>
                        <ContainerPieChart ContainersRunning={this.props.dashboard.ContainersRunning}
                                           ContainersPaused={this.props.dashboard.ContainersPaused}
                                           ContainersStopped={this.props.dashboard.ContainersStopped}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <List divided relaxed>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Kernel version</List.Header>
                                    {this.props.dashboard.KernelVersion}
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Operating system</List.Header>
                                    {this.props.dashboard.OperatingSystem}
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Architecture</List.Header>
                                    {this.props.dashboard.Architecture}
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>CPUs</List.Header>
                                    {this.props.dashboard.NCPU}
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Total memory</List.Header>
                                    {formatBytes(this.props.dashboard.MemTotal)}
                                </List.Content>
                            </List.Item>
                        </List>
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