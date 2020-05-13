const FILTER_ALBUMS = 'FILTER_ALBUMS'

export function filterAlbums(text) {
    return {
        type: FILTER_ALBUMS,
        filterText: text
    }
}
