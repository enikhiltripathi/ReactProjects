import React, { useState, useEffect } from "react"
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"
import "./App.css"
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry"

function App() {
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users)
      })
  }, [])

  const onSearchCHange = (event) => {
    setSearchField(event.target.value)
  }
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })
  return (
    <div className="tc">
      <h1 className="f1">Robo Friends</h1>
      <SearchBox searchChange={onSearchCHange}></SearchBox>
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  )
}

export default App
