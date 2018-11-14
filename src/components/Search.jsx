import React from 'react'

const Search = (props) => {

	return(
		<form onSubmit={props.getTitle}>
			<input className="search" placeholder="Search (e.g. cancer)" type="text" name="searchterm" />
			<button className="submit-button">Submit</button>
		</form>
	);

}

export default Search;