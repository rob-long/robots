import React, { Component } from 'react';
import 'tachyons';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import './App.css';
import { robots } from './robots';

class App extends Component {
  constructor() {
    super();
    this.state = { robots, searchTerm: '' };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    const { searchTerm } = this.state;
    const filtered = robots.filter(robot =>
      robot.name.toUpperCase().includes(searchTerm.toUpperCase())
    );
    return (
      <div className="tc">
        <h1 className="f1">Robots</h1>
        <SearchBar handleSearch={this.handleSearch} searchTerm={searchTerm} />
        <CardList robots={filtered} />
      </div>
    );
  }
}

export default App;
