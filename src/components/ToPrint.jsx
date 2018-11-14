import React, {Component} from 'react'

class ToPrint extends Component{
	render(){
		return(
			<div id="divPDF" className="hide">
				<h1 id="pdfHeader">Big Medical Research Company</h1>
				<ul>
					{this.props.selected.map((select, index) => (
			            <li key={index}>
			            	{select}
			            </li>
			        ))}
				</ul>
			</div>
		)
	}
}

export default ToPrint;