import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";
import Sidebar from "../Sidebar";

class App extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={2}>
                    <Sidebar/>
                </Grid.Column>
                <Grid.Column width={14}>
                    <p>content</p>
                </Grid.Column>
            </Grid>
        );
    }
}

export default App;
