//youtube api call
require('dotenv').config({ path: require('find-config')('.env') })
const API_KEY = process.env.GOOGLE_API_KEY
const fetch = require('node-fetch')

async function getComments(videoUrl) {
    let result = []
    const videoId = videoUrl.match(/^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/)[2]
    const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`
    const options = {
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json'
        }
    }

    try {
        const results = await fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    return new Error('Error in GET request.')
                }
                return res.json()
            })
            .then(res => res.items.map(item => item.snippet.topLevelComment.snippet.textDisplay))
            .then(data => {
                return data
            })
        return results
    } catch(err) {
        return `Error in GET request to YT API: ${err}`
    }
}

//const url = 'https://www.youtube.com/watch?v=LBlZrjP2qO0'
//getComments(url).then(data => console.log(data))

module.exports = getComments