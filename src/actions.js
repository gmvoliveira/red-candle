export function filterAlbums(text) {
    return {
        type: 'FILTER_ALBUMS',
        filterText: text
    }
}


export function selectAlbum(album) {
    return {
        type: 'SELECT_ALBUM',
        album: album
    }
}