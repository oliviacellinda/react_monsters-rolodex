import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    /**
     * This binding is necessary to make `this` work in the callback
     * this.handleChange = this.handleChange.bind(this);
     */
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  /**
   * We can create our own function inside class but in case we need to do something related to any object inside class,
   * eg: updating state value, we need to do some binding to our function.
   * It is because `this` in expression `this.setState()` below is not recognized by the class.
   *
   * Our App class is an extended version of Component class, so `this` context is only recognized when
   * it is used inside functions that already available from Component class.
   * `this` inside our own function has different context from `this` inside functions from Component class.
   *
   * To synchronize this two different contexts, we need to bind our own functions inside constructor
   * by using expressions: this.handleChange = this.handleChange.bind(this);
   *
   * handleChange(e) {
   *   this.setState({ searchField: e.target.value });
   * }
   */

  // Below expression is using arrow function
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    /**
     * The following expression is the same as
     *    const monsters = this.state.monsters;
     *    const searchField = this.state.searchField;
     * Keyword for googling: javascript destructuring assignment
     */
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
