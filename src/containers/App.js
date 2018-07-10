import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import axios from 'axios';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import ScrollList from '../components/ScrollList';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor() {
    super();
    this.state = { robots: [], searchTerm: '' };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({ robots: res.data });
      })
      .catch(err => console.log(err));
  }

  handleSearch(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    const { robots, searchTerm } = this.state;
    if (!robots.length) {
      return '...Loading';
    }
    const filtered = robots.filter(robot =>
      robot.name.toUpperCase().includes(searchTerm.toUpperCase())
    );
    return (
      <div className="tc">
        <h1 className="f1">Robots</h1>
        <SearchBar handleSearch={this.handleSearch} searchTerm={searchTerm} />
        <ScrollList>
          <ErrorBoundary>
            <CardList robots={filtered} />
          </ErrorBoundary>
        </ScrollList>
      </div>
    );
  }
}

export default App;
