import React from "react"
import CardList from "./CardList"
import SearchBox from "./SearchBox"
import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users })
      })
  }

  onSearchCHange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="tc">
        <h1 className="f1">Robot Friends</h1>
        <SearchBox searchChange={this.onSearchCHange}></SearchBox>
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}

export default App
