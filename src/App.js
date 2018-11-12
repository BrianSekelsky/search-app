import React, {Component} from 'react'
import axios from 'axios'
import './App.css'

import Search from "./components/Search";
import ListItem from "./components/ListItem";

class App extends Component{

  state = {
    results: []
  }

  getResults = (e) => {
      e.preventDefault()
      const title = e.target.elements.searchterm.value
      var tempArray = []
      axios.get(`https://api.opentrials.net/v1/search?q=${title}`).then((res) => {
        for(var i = 0; i < res.data.items.length; i++){
          const newResult = res.data.items[i]
          tempArray.push(newResult)
        }
        this.setState({results: tempArray})
      })
  }

  render(){
    return(
      <div className="App">
        <h1>Open Trials Search</h1>
        <Search getTitle={this.getResults} />
        <ul>
          {this.state.results.map((result, index) => (
            <ListItem key={index} result={result} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;