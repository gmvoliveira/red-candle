const GetGenres = async query => {
    const endpoint = `http://83.160.209.236:9999/album/${query}/suggested_genres`;
    try {
        const response = await fetch(endpoint)

        if(response.ok) {
            const genres = await response.json()
            return genres
        }
        throw new Error(`Couldn't retrieve genres`)
    } catch(error) {
        console.error(error)
    }
}

export default GetGenres