import React, {Component} from 'react'
import axios from 'axios'
import './App.css'

import Search from "./components/Search"
import ListItem from "./components/ListItem"
import ToPrint from "./components/ToPrint"

import jspdf from 'jspdf'

class App extends Component{

  state = {
    results: [],
    selected: [],
  }

  getResults = (e) => {
      e.preventDefault()
      const title = e.target.elements.searchterm.value
      var tempArray = []
      if(title !== "")
      axios.get(`https://api.opentrials.net/v1/search?q=${title}`).then((res) => {
        for(var i = 0; i < res.data.items.length; i++){
          const newResult = res.data.items[i]
          tempArray.push(newResult)
        }
        this.setState({results: tempArray})
      })
  }

  createPdf() {

    const pdfConverter = require('jspdf')

    const pdf = new pdfConverter('p','pt','c6')

    pdf.fromHTML(window.document.getElementById('divPDF'), 10, 10,{'width': 180});

    pdf.save("report.pdf")

  }

  handleSelect = result =>{
    const selected = [...this.state.selected];
    if(!selected.includes(result.public_title)){
      selected.push(result.public_title)
    }
    else{
      var index = selected.indexOf(result.public_title)
      selected.splice(index, 1)
    }
    this.setState({ selected });
  }

  render(){
    return(
      <div className="App">
        <h1>Open Trials Search</h1>
        <Search getTitle={this.getResults} />
        <ul>
          {this.state.results.map((result, index) => (
            <ListItem key={result.id} result={result} onSelect={this.handleSelect} />
          ))}
        </ul>
        <ToPrint selected={this.state.selected}/>
        <button className="download-button" onClick={this.createPdf.bind(this)}>Download Report of Selected Trials</button>
      </div>
    );
  }
}

export default App;