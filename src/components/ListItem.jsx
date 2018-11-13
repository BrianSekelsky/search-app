import React, {Component} from 'react'

class ListItem extends Component {

	state = {
		expanded: false,
		selected: false,
	}

	handleExpand(){
		this.setState({expanded: !this.state.expanded})
	}

	handleSelect(){
		this.setState({selected: !this.state.selected})
	}

	render(){
		if(!this.state.expanded){
			return(
			    <li key={this.props.result.id}>
			    	<div className="wrapper">
			    		<input className="check" type="checkbox" name="selecter"
			    			checked={this.state.selected}
			    			onChange={this.handleSelect.bind(this)}
			    		/>
			    		<div>
			           		<span>{this.props.result.public_title}</span>
			           	</div>
			           	<img class="svg" onClick={this.handleExpand.bind(this)} className="expand-button" src={require("../icons/expand.svg")} />
		           	</div>
			    </li>      
			);
		} else{
			return(
			    <li key={this.props.result.key} onClick={this.handleExpand.bind(this)}>
			    	<div className="wrapper">
			    		<input className="check" type="checkbox" name="selecter"
			    			checked={this.state.selected}
			    			onChange={this.handleSelect.bind(this)}
			    			value={this.state.selected} 
			    		/>
			    		<div>
				           	<span>{this.props.result.public_title}</span>
				           	<ul>
				           		<li className="nested-list-item"><b>Status:</b> {this.props.result.status ? this.props.result.status : "none"}</li>
				           		<li className="nested-list-item"><b>Age Range:</b> {this.props.result.age_range ? this.props.result.age_range : "none"}</li>
				           		<li className="nested-list-item"><b>Target Sample Size:</b> {this.props.result.target_sample_size ? this.props.result.target_sample_size : "none"}</li>
				           		<li className="nested-list-item"><b>Conditions:</b> {this.props.result.conditions.length > 0 ? this.props.result.conditions.map((condition) =>
				           			<p key={condition.id}>{condition.name} </p>) : "none"}</li>
				           		<li className="nested-list-item"><b>Interventions:</b> {this.props.result.interventions.length > 0 ? this.props.result.interventions.map((intervention) =>
				           			<p key={intervention.id}>{intervention.name}</p>) : "none"}</li>
				           		<li className="nested-list-item"><b>Locations:</b> {this.props.result.locations.length > 0 ? this.props.result.locations.map((location) =>
				           			<p key={location.id}>{location.name}</p>) : "none"}</li>
				           		<li className="nested-list-item"><b>Records:</b> {this.props.result.records.length > 0 ? this.props.result.records.map((record) =>
				           			<p key={record.id}><a href={record.source_url}>{record.source_url}</a></p>) : "none"}</li>
				           		<li className="nested-list-item"><b>Documents:</b> {this.props.result.documents.length > 0 ? this.props.result.documents.map((document) =>
				           			<p key={document.id}>{document.name}</p>) : "none"}</li>
				           		<li className="nested-list-item"><b>Summary:</b> {this.props.result.summary ? this.props.result.summary : "none"}</li>
				           	</ul>
			           	</div>
			           	<img class="svg" onClick={this.handleExpand.bind(this)} className="expand-button" src={require("../icons/minimize.svg")} />
		           	</div>
			    </li>      
			);
		}
	}

}

export default ListItem;