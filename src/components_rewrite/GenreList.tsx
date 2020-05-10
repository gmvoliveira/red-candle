import Genres from './Genres'

const target = document.getElementById('genrelist')
const targetEmpty = document.getElementById('genrelist-empty')

const renderGenre = (genre: any) => {
    const template = `<div class="list-item">${genre}</div>`
    if (target) target.innerHTML += template
}

const ListGenres = async (query: any) => {
    if (target) target.innerHTML = "Fetching genre suggestions..."

    const genres = await Genres(query)
    if (!genres || genres.length === 0) return false
    
    // Clear the genre list section
    if (target) target.innerHTML = ''
    if (targetEmpty) targetEmpty.remove()

    // Render new genres
    for (let genre of genres) {
        renderGenre(genre)
    }
}

export default ListGenres