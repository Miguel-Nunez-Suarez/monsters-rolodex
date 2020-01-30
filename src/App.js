import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchString: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monster: users }));
  }

  render() {
    const { monster, searchString } = this.state;
    const filteredMonsters = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchString.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handelChange={e => this.setState({ searchString: e.target.value })}
        ></SearchBox>

        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
