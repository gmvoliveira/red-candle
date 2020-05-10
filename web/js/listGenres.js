import GetGenres from './getGenres.js'

const target = document.getElementById('genrelist')
const targetEmpty = document.getElementById('genrelist-empty')
const targetEmptyMemory = targetEmpty

const renderGenre = genre => {
    const template = `<div class="list-item">${genre}</div>`
    target.innerHTML += template
}

const ListGenres = async query => {
    target.innerHTML = "Fetching genre suggestions..."

    const genres = await GetGenres(query)
    if (!genres || genres.length === 0) return false
    
    // Clear the genre list section
    target.innerHTML = null
    targetEmpty.remove()

    // Render new genres
    for (let genre of genres) {
        renderGenre(genre)
    }
}

export default ListGenres