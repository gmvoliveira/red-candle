export function filterAlbums(text) {
    return {
        type: 'FILTER_ALBUMS',
        payload: {
	        filterText: text
        }
    }
}


export function selectAlbum(album) {
    return {
        type: 'SELECT_ALBUM',
        payload: {
	        album: album
        }
    }
}


export function selectGenre(genre) {
	return {
		type: 'SELECT_GENRE',
		payload: {
			genre: genre
		}
	}
}