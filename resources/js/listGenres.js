import GetGenres from './getGenres.js'

const target = document.getElementById('genrelist')
const targetEmpty = document.getElementById('genrelist-empty')
const targetEmptyMemory = targetEmpty

const renderGenre = (genre, weight) => {
    const template = `<div class="list-item">${genre}</div>`
    target.innerHTML += template
}

const ListGenres = async query => {
    const genres = await GetGenres(query)
    if (!genres) return false
    
    // Empty genres
    target.innerHTML = null

    targetEmpty.remove()

    // Render new genres
    for (let [genre, weight] of Object.entries(genres)) {
        renderGenre(genre, weight)
    }
}

export default ListGenres