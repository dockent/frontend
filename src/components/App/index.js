import React, {Component} from 'react';
import {Container, Grid, Header, Icon} from "semantic-ui-react";
import Sidebar from "../Sidebar";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Dashboard from "../Dashboard";
import './App.css';
import Containers from "../Containers";
import Notifications from 'react-notify-toast';
import View from "../Containers/View";
import Create from '../Containers/Create'
import Images from "../Images";
import Build from '../Images/Build';
import Builder from '../Builder';
import Network from "../Network";
import NetworkView from '../Network/NetworkView';
import NetworkCreate from '../Network/NetworkCreate';
import Settings from '../Settings';
import Storage from "../../Storage";

class App extends Component {
    /**
     * @returns {*}
     */
    render() {
        return (
            <Router>
                <Container className='main-container'>
                    <Header as='h2'>
                        <Icon name='terminal'/>
                        <Header.Content>Dockent</Header.Content>
                    </Header>
                    <Grid>
                        <Grid.Column width={4}>
                            <Sidebar/>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Route exact path='/' component={Dashboard}/>
                            <Route exact path='/containers' component={Containers}/>
                            <Route exact path='/containers/view/:id' component={View}/>
                            <Route exact path='/containers/create' component={Create}/>
                            <Route exact path='/images' component={Images}/>
                            <Route exact path='/images/build' component={Build}/>
                            <Route exact path='/builder' component={Builder}/>
                            <Route exact path='/network' component={Network}/>
                            <Route exact path='/network/view/:id' component={NetworkView}/>
                            <Route exact path='/network/create' component={NetworkCreate}/>
                            {Storage.get('debugMode') ? <Route exact path='/settings' component={Settings}/> : null}
                        </Grid.Column>
                    </Grid>
                    <Notifications/>
                </Container>
            </Router>
        );
    }
}

export default App;
