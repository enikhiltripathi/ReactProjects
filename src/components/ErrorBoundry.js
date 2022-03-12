import React from "react"

class ErrorBoundry extends React.Component {
  constructor(props) {
    super()
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }
  render() {
    if (this.state.hasError) {
      return <h1>Oops that not good!</h1>
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundry
