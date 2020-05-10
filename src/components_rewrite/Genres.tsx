const Genres = async (query: any) => {
    const endpoint = `http://83.160.209.236:9998/album/${query}/genres?suggest`;
    try {
        const response = await fetch(endpoint)

        if(response.ok) {
            const genres = await response.text()
            return genres.split(', ')
        }
        throw new Error(`Couldn't retrieve genres`)
    } catch(error) {
        console.error(error)
    }
}

export default Genres