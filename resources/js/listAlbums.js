import GetAlbums from './getAlbums.js'
import ListGenres from './listGenres.js'

const target = document.getElementById('albumlist')

const renderAlbum = album => {
    const button = document.createElement('button')
    button.innerHTML = album
    button.classList += 'nav-item'
    target.appendChild(button)
    button.addEventListener('click', () => ListGenres(album))

}

const ListAlbums = async () => {
    const albums = await GetAlbums()
    
    for (let album of Object.values(albums)) {
        renderAlbum(album)
    }
}

export default ListAlbums