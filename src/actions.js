export function filterAlbums(text) {
    return {
        type: 'FILTER_ALBUMS',
        payload: {
	        filterText: text
        }
    }
}


export function loadAlbums(albums) {
    return {
        type: 'LOAD_ALBUMS',
        payload: {
            albums: albums
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


export function updateAlbum(album) {
    return {
        type: 'UPDATE_ALBUM',
        payload: {
            album: album
        }
    }
}

export function toggleFetchingGenres(state) {
    return {
        type: 'FETCH_GENRE',
        payload: {
            fetchingGenres: state
        }
    }
}