 class GirandoleClient {

    constructor(baseUrl = 'http://192.168.1.80:8080') {
        this.baseUrl = baseUrl
    }

    async get(endpoint) {
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

    async post(endpoint, data) {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              })

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
        const response = await this.get(`album`)
        return response
    }

    async getSuggestedGenres(albumId) {
        const response = await this.get(`album/${albumId}/genres`)
        return response.filter(suggestion => suggestion.album_id === albumId)[0]
    }

    async updateGenre(albumId, genre) {
        const response = await this.post(`album/${albumId}/genres`, [genre])
        return response
    }
}

export default GirandoleClient