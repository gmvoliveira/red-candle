import GetAlbums from './getAlbums.js'
import ListGenres from './listGenres.js'

const target = document.getElementById('albumlist')

const renderAlbum = album => {
    const button = document.createElement('button')
    button.innerHTML = `
        <div class="nav-item-image">
            <img style="max-width: 100%; max-height: 100%; border-radius: 6px;" src="http://83.160.209.236:9998/album/${album.id}/art" />
        </div>
        <div class="nav-item-content">
            <h3 class="nav-item-title">${album.albumartist}</h3>
            <span class="nav-item-subtitle">${album.album} - ${album.year}</span>
        </div>
    `
    button.classList += 'nav-item'
    target.appendChild(button)
    button.addEventListener('click', () => ListGenres(album.id))

}

const ListAlbums = async () => {
    const albums = await GetAlbums()
    
    for (let album of Object.values(albums.results)) {
        renderAlbum(album)
    }
}

export default ListAlbums