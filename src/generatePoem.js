function scrambleInput(arr) {
    for (let i = 0; i < arr.length; i++) {
        let randomIndex = Math.floor(Math.random() * arr.length)
        let temp = arr[randomIndex]
        arr[randomIndex] = arr[i]
        arr[i] = temp
    }
    return arr
}

function makeLine(words, syllables) {
    let result = ''
    let syllCount = 0
    words.forEach(w => {
        try {
            if (w.syllables + syllCount <= syllables && w.word !== null) {
                result += w.word + ' '
                syllCount += w.syllables
            }
        } catch {}
    })
        return result
}

function generatePoem(words, poemType, syllables, lines) {
    //const startingIndex = Math.floor(Math.random() * (words.length - lines))
    const scrambled = scrambleInput(words)
    let result = {
        title: '',
        body: []
    }
    const titleComment = scrambled[Math.floor(Math.random() * scrambled.length)]
    const slice1 = Math.floor(Math.random() * titleComment.length)
    const slice2 = Math.floor(Math.random() * (titleComment.length - slice1)) + slice1
    titleComment.slice(slice1, slice2).length ? titleComment.slice(slice1, slice2).forEach(w => result.title += w.word + ' ') : result.title = titleComment[0].word
    if (result.title.split(' ').length > 5) {
        let temp = result.title.split(' ')
        result.title = temp.slice(0, 5).join(' ')
    }

    switch(poemType) {
        case 'custom':
            syllables = parseInt(syllables)
            lines = parseInt(lines)
        break
        case 'haiku':
            syllables = [5, 7, 5]
            lines = 3
        break
        case 'sonnet':
            syllables = 10
            lines = 14
        break
        case 'rondel':
            syllables = 8
            lines = 15
        break
        case 'indriso':
            syllables = 12
            lines = 11
        break
    }
    if (typeof syllables === 'object') { //covers the haiku 5/7/5 case
        syllables.forEach((s, i) => {
            result.body.push(makeLine(scrambled[i], s))
        })
        return result
    } else {
        let i = 0
        while (result.body.length < lines && lines >= i) {
            while (!makeLine(scrambled[i], syllables)) { //prevent pushing empty lines
                i++
            }
            if (poemType === 'rondel') {
                if (result.body.length === 4 || result.body.length === 9) {
                    result.body.push([' '])
                } else {
                    result.body.push(makeLine(scrambled[i], syllables))
                }
            } else if (poemType === 'indriso') {
                if (result.body.length === 3 || result.body.length === 7 || result.body.length === 9) {
                    result.body.push([' '])
                } else {
                    result.body.push(makeLine(scrambled[i], syllables))
                }
            } else {
                result.body.push(makeLine(scrambled[i], syllables))
            }
            i++
        }
        return result
    }
}

module.exports = generatePoem