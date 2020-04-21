const GetAlbums = async () => {
    // const endpoint = 'http://83.160.209.236:9999/album'
    const endpoint = '../albums.json'
    try {
        const response = await fetch(endpoint)

        if (response.ok) {
            const list = await response.json()
            return list
        }

        throw new Error(`Couldn't retrieve list`)

    } catch(error) {
        console.error(error)
    }
}

export default GetAlbums