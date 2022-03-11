import React from "react"
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"
import "./App.css"
import Scroll from "../components/Scroll"

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
    const { robots, searchField } = this.state

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchCHange}></SearchBox>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    )
  }
}

export default App
