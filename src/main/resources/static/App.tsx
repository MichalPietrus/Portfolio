import React, {Component} from "react";

class App extends Component {

  state = {
      data: [],
      name: 'byku',
  }

  componentDidMount() {
    fetch('api/hello')
        .then(response => response.text())
        .then(data => {
          console.log(data);
          this.setState({data})
        })
  }

  render() {
    return (
        <div>
          Hello {this.state.name}
        </div>
    )
  }
}

export default App;
