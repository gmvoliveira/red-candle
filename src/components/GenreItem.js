import React from 'react'


const GenreItem = ({genre, clickable, onClickHandler}) => (
	clickable ?
		<button className="nav-item">{genre}</button>
		: <div className="list-item">{genre}</div>
)

export default GenreItem