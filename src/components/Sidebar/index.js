import React, {Component} from 'react';
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class Sidebar extends Component {
    render() {
        return (
            <Menu vertical>
                <Menu.Item>
                    <Menu.Header>
                        <Link to='/'>Dashboard</Link>
                    </Menu.Header>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Containers</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item>
                            <Link to='/containers/list'>List</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/containers/create'>Create</Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Images</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item>
                            <Link to='/images/list'>List</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/images/create'>Create</Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Network</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item>
                            <Link to='/network/list'>List</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/network/create'>Create</Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>
                        <Link to='/settings'>Settings</Link>
                    </Menu.Header>
                </Menu.Item>
            </Menu>
        );
    }
}