 class GirandoleClient {

    constructor(baseUrl = process.env.REACT_APP_GIRANDOLE_BASE_URL) {
        this.baseUrl = baseUrl
    }

    async get(endpoint) {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`)
            // const response = await fetch(`./albums.json`)

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
        const response = await this.get(`album/`)
        // const response = await this.get()

        return response;
    }

    async getSuggestedGenres(albumId) {
        try {
            const response = await this.get(`album/${albumId}/genres`)

            if (response.length) {
                return response.filter(suggestion => suggestion.album_id === albumId)[0]
            }

            throw new Error(`Failed to get genres for album with id ${albumId}`)
        } catch(error) {
            console.error(error)
        }
    }

    async updateGenre(albumId, genre) {
        try {
            const response = await this.post(`album/${albumId}/genres`, [genre])

            if (response.length) {
                return response[0]
            }

            throw new Error(`Failed to update genre with ${genre} for album with id ${albumId}`)
        } catch(error) {
            console.error(error)
        }
    }
}

export default GirandoleClient
