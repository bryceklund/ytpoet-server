const syllable = require('syllable')
const Filter = require('bad-words')
//usage of syllable, profanity filter, line counting, rhyming, etc
//the goal of the output is 20 2-dimensional arrays of objects with the schema { syllables: n, word: 'word' }

function cleanData(data, profanityFilter) {
    let clean = data.map(c => {
        return c.replace(/(&#39;)/g, '\'').replace(/(&quot;)/g, '"').replace(/(<br \/>)/g, ' ').replace(/(^href.*)/g, '').replace(/(<a.*)/g, '')
    })

    if (profanityFilter === 'true') {
        const filter = new Filter()
        return clean.map(comment => {
            return filter.clean(comment).split(' ').map(word => {
                let newWord = word
                let syllables = syllable(newWord)
                if (newWord.length < 20) {
                    return { word: newWord, syllables }
                }
            })
        })
    } else {
        return clean.map(comment => {
            let c = comment.split(' ').map(word => {
                if (word.length && !word.match(/(^href.*)/g) && !word.match(/(<a.*)/g, '')) {
                    let newWord = word
                    let syllables = syllable(newWord)
                    if (newWord.length < 20 && syllables > 0) {
                        return { word: newWord, syllables }
                    }
                }
            })
            return c.filter(w => w != undefined)
        })
    }
}

const testData = [ 'Is it really a episode of BA if the word &quot;umami&quot; isn&#39;t said??',
'You know it&#39;s good when Andy&#39;s silent except for the smacking of lips',
'Title this episode as... &quot;A touch more salt.&quot; Thank you. I love you Andy.',
'Please do gourmet makes Girl Scout cookies',
'Andy has the most calming presence in the BA kitchen... 😌',
'I thought that he was going to share with Sohla but he just wanted “some flaky” 😳',
'I can smell it through the screen',
'Acorn squash was a good add. 👌<br />Added carrots to it. <br />Feel free to go crazy with this recipe.',
'why dont any of them ever wear hair nets ect?',
'great meal to squash beef with',
'The amount of time his hand goes towards his face grosses me out.',
'Eh...',
'Get Gordon Ramsey on the show!',
'<a href="https://www.youtube.com/watch?v=LBlZrjP2qO0&amp;t=7m57s">7:57</a> <br /><br />There goes Andy fantasizing about Chris and Brad again.',
'Am I the only one who felt like Andy was on speed in this video??? 😂',
'Ensign  Leone report to the Bridge.',
'I’m really digging Andy’s new haircut.',
'EHNDIW BEHGWUANNIWWWWWWWWWWWWW',
'Andy would be cute with a man-bun lol',
'Can we be best friends, Andy, so we can snuggle in? :)', ]

//console.log(cleanData(testData, false))

module.exports = cleanData