import React from 'react'

const Search = (props) => {

	return(
		<form onSubmit={props.getTitle}>
			<input className="search" type="text" name="searchterm" />
			<button>Submit</button>
		</form>
	);

}

export default Search;