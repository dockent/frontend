import React, {Component} from 'react';
import {Container, Grid} from "semantic-ui-react";
import Sidebar from "../Sidebar";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Dashboard from "../Dashboard";
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Container className='main-container'>
                    <Grid>
                        <Grid.Column width={4}>
                            <Sidebar/>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Route path='/' component={Dashboard}/>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Router>
        );
    }
}

export default App;
