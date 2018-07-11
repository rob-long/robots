import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import ScrollList from '../components/ScrollList';
import ErrorBoundary from '../components/ErrorBoundary';
import * as actions from '../actions';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { fetchRobots } = this.props;
    fetchRobots();
  }

  render() {
    const { robots, searchTerm, setSearchField, isPending } = this.props;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBar handleSearch={setSearchField} />
        <ScrollList>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          )}
        </ScrollList>
      </div>
    );
  }
}

const mapStateToProps = ({ searchTerm, robots }) => ({
  searchTerm,
  robots: robots.data,
  isPending: robots.isPending,
});

export default connect(
  mapStateToProps,
  actions
)(App);
