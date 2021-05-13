import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './app.css';
import Scroll from '../components/Scroll';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState({
                robots: users,
                searchField: ''
            });
        });
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
        });

        return robots.length === 0 ?
            (<div> Loading ... </div>) :
            <div className="tc">
                <h1 className="f2"> Robot Friends </h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
    }
}

export default App;