 class GirandoleClient {

    constructor(baseUrl = 'http://83.160.209.236:8080') {
        this.baseUrl = baseUrl
    }

    async fetch(endpoint) {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`)

            if (response.ok) {
                const list = await response.json()
                return list.results
            }

            throw new Error(`Failed request /${endpoint}.`)
        } catch(error) {
            console.error(error)
        }
    }

    async getAlbums() {
        const response = await this.fetch(`album`)
        return response
    }

    async getSuggestedGenres(albumId) {
        const response = await this.fetch(`album/${albumId}/genres`)
        return response.filter(suggestion => suggestion.album_id === albumId)[0]
    }
}

export default GirandoleClient