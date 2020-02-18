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

    switch(poemType) {
        case 'custom':
            syllables = parseInt(syllables)
            lines = parseInt(lines)
            console.log(lines, syllables)
        break
        case 'haiku':
            syllables = [5, 7, 5]
            lines = 3
        break
        case 'sonnet':
            syllables = 10
            lines = 14
        break
    }
    if (typeof syllables === 'object') {
        syllables.forEach((s, i) => {
            result.body.push(makeLine(scrambled[i], s))
        })
        return result
    } else {
        let i = 0
        while (result.body.length < lines && lines >= i) {
            while (!makeLine(scrambled[i], syllables)) {
                i++
            }
            result.body.push(makeLine(scrambled[i], syllables))
            i++
        }
        return result
    }
}

const testData = [
    [
        {
            "word": "Thank",
            "syllables": 1
        },
        {
            "word": "you",
            "syllables": 1
        },
        {
            "word": "all",
            "syllables": 1
        },
        {
            "word": "for",
            "syllables": 1
        },
        {
            "word": "the",
            "syllables": 1
        },
        {
            "word": "sweet",
            "syllables": 1
        },
        {
            "word": "comments!!",
            "syllables": 2
        },
        {
            "word": "I",
            "syllables": 1
        },
        {
            "word": "really",
            "syllables": 2
        },
        {
            "word": "do",
            "syllables": 1
        },
        {
            "word": "appreciate",
            "syllables": 4
        },
        {
            "word": "it",
            "syllables": 1
        },
        {
            "word": "a",
            "syllables": 1
        },
        {
            "word": "whole",
            "syllables": 1
        },
        {
            "word": "lot,",
            "syllables": 1
        },
        {
            "word": "especially",
            "syllables": 4
        },
        {
            "word": "this",
            "syllables": 1
        },
        {
            "word": "being",
            "syllables": 2
        },
        {
            "word": "my",
            "syllables": 1
        },
        {
            "word": "first",
            "syllables": 1
        },
        {
            "word": "animatic.",
            "syllables": 4
        },
        {
            "word": "I",
            "syllables": 1
        },
        {
            "word": "hope",
            "syllables": 1
        },
        {
            "word": "to",
            "syllables": 1
        },
        {
            "word": "continue",
            "syllables": 3
        },
        {
            "word": "doing",
            "syllables": 1
        },
        {
            "word": "more",
            "syllables": 1
        },
        {
            "word": "of",
            "syllables": 1
        },
        {
            "word": "these",
            "syllables": 1
        },
        {
            "word": "with",
            "syllables": 1
        },
        {
            "word": "the",
            "syllables": 1
        },
        {
            "word": "mcelbots",
            "syllables": 3
        },
        {
            "word": "soon",
            "syllables": 1
        },
        {
            "word": "!",
            "syllables": 0
        },
        {
            "word": "thanks",
            "syllables": 1
        },
        {
            "word": "again",
            "syllables": 2
        },
        {
            "word": "&lt;3",
            "syllables": 1
        }
    ],
    [
        {
            "word": "THE",
            "syllables": 1
        },
        {
            "word": "ULTIMATE",
            "syllables": 3
        },
        {
            "word": "ALPHABET",
            "syllables": 3
        }
    ],
    [
        {
            "word": "I",
            "syllables": 1
        },
        {
            "word": "like",
            "syllables": 1
        },
        {
            "word": "this",
            "syllables": 1
        },
        {
            "word": "robot",
            "syllables": 2
        },
        {
            "word": "universe",
            "syllables": 3
        }
    ],
    [
        {
            "word": "The",
            "syllables": 1
        },
        {
            "word": "sound",
            "syllables": 1
        },
        {
            "word": "he",
            "syllables": 1
        },
        {
            "word": "makes",
            "syllables": 1
        },
        {
            "word": "for",
            "syllables": 1
        },
        {
            "word": "E",
            "syllables": 1
        },
        {
            "word": "made",
            "syllables": 1
        },
        {
            "word": "me",
            "syllables": 1
        },
        {
            "word": "cry",
            "syllables": 1
        },
        {
            "word": "laughing",
            "syllables": 2
        },
        {
            "word": "and",
            "syllables": 1
        },
        {
            "word": "I",
            "syllables": 1
        },
        {
            "word": "couldn't",
            "syllables": 2
        },
        {
            "word": "stop",
            "syllables": 1
        },
        {
            "word": "for",
            "syllables": 1
        },
        {
            "word": "20",
            "syllables": 0
        },
        {
            "word": "minutes",
            "syllables": 2
        }
    ],
    [
        {
            "word": "<a",
            "syllables": 1
        },
        null,
        {
            "word": "",
            "syllables": 0
        },
        {
            "word": "",
            "syllables": 0
        },
        {
            "word": "Sounds",
            "syllables": 1
        },
        {
            "word": "familiar...",
            "syllables": 4
        },
        {
            "word": "",
            "syllables": 0
        },
        {
            "word": "",
            "syllables": 0
        },
        {
            "word": "",
            "syllables": 0
        },
        {
            "word": "",
            "syllables": 0
        },
        {
            "word": "",
            "syllables": 0
        },
        {
            "word": "oh,",
            "syllables": 1
        },
        {
            "word": "my",
            "syllables": 1
        },
        {
            "word": "fajitas",
            "syllables": 3
        },
        {
            "word": "are",
            "syllables": 1
        },
        {
            "word": "ready.",
            "syllables": 2
        }
    ],
    [
        {
            "word": "There",
            "syllables": 1
        },
        {
            "word": "is",
            "syllables": 1
        },
        {
            "word": "so",
            "syllables": 1
        },
        {
            "word": "much",
            "syllables": 1
        },
        {
            "word": "æstetic",
            "syllables": 2
        },
        {
            "word": "in",
            "syllables": 1
        },
        {
            "word": "the",
            "syllables": 1
        },
        {
            "word": "design",
            "syllables": 2
        },
        {
            "word": "of",
            "syllables": 1
        },
        {
            "word": "these",
            "syllables": 1
        },
        {
            "word": "robots!",
            "syllables": 2
        }
    ],
    [
        {
            "word": "“Quebec",
            "syllables": 2
        },
        {
            "word": "I",
            "syllables": 1
        },
        {
            "word": "like.”",
            "syllables": 1
        },
        {
            "word": "",
            "syllables": 0
        },
        {
            "word": "Everyone",
            "syllables": 3
        },
        {
            "word": "in",
            "syllables": 1
        },
        {
            "word": "Canada:",
            "syllables": 3
        },
        {
            "word": "<b>NUT</b>",
            "syllables": 3
        }
    ],
    [
        {
            "word": "Evil",
            "syllables": 2
        },
        {
            "word": "N",
            "syllables": 1
        },
        {
            "word": "I",
            "syllables": 1
        },
        {
            "word": "love",
            "syllables": 1
        },
        {
            "word": "you",
            "syllables": 1
        },
        {
            "word": "dad",
            "syllables": 1
        },
        {
            "word": "A",
            "syllables": 1
        },
        {
            "word": "",
            "syllables": 0
        },
        {
            "word": "",
            "syllables": 0
        },
        {
            "word": "Yes",
            "syllables": 1
        },
        {
            "word": "I",
            "syllables": 1
        },
        {
            "word": "did",
            "syllables": 1
        },
        {
            "word": "spell",
            "syllables": 1
        },
        {
            "word": "my",
            "syllables": 1
        },
        {
            "word": "name",
            "syllables": 1
        },
        {
            "word": "thank",
            "syllables": 1
        },
        {
            "word": "you",
            "syllables": 1
        },
        {
            "word": "for",
            "syllables": 1
        },
        {
            "word": "noticing",
            "syllables": 3
        }
    ],
    [
        {
            "word": "literally",
            "syllables": 4
        },
        {
            "word": "just",
            "syllables": 1
        },
        {
            "word": "noticed",
            "syllables": 2
        },
        {
            "word": "the",
            "syllables": 1
        },
        {
            "word": "grfn",
            "syllables": 1
        },
        {
            "word": "in",
            "syllables": 1
        },
        {
            "word": "the",
            "syllables": 1
        },
        {
            "word": "thumbnail",
            "syllables": 2
        },
        {
            "word": "I’m",
            "syllables": 1
        },
        {
            "word": "cackling",
            "syllables": 2
        },
        {
            "word": "it’s",
            "syllables": 1
        },
        {
            "word": "so",
            "syllables": 1
        },
        {
            "word": "good",
            "syllables": 1
        }
    ],
    [
        {
            "word": "Griffin",
            "syllables": 2
        },
        {
            "word": "looks",
            "syllables": 1
        },
        {
            "word": "like",
            "syllables": 1
        },
        {
            "word": "if",
            "syllables": 1
        },
        {
            "word": "Gir",
            "syllables": 1
        },
        {
            "word": "from",
            "syllables": 1
        },
        {
            "word": "Invader",
            "syllables": 3
        },
        {
            "word": "Zim..",
            "syllables": 1
        },
        {
            "word": "Wasny",
            "syllables": 2
        },
        {
            "word": "spastic",
            "syllables": 2
        }
    ],
    [
        {
            "word": "We",
            "syllables": 1
        },
        {
            "word": "rarely",
            "syllables": 2
        },
        {
            "word": "used",
            "syllables": 1
        },
        {
            "word": "Z",
            "syllables": 1
        },
        {
            "word": "in",
            "syllables": 1
        },
        {
            "word": "school,",
            "syllables": 1
        },
        {
            "word": "so",
            "syllables": 1
        },
        {
            "word": "why",
            "syllables": 1
        },
        {
            "word": "bother?",
            "syllables": 2
        }
    ],
    [
        {
            "word": "I’m",
            "syllables": 1
        },
        {
            "word": "gonna",
            "syllables": 2
        },
        {
            "word": "tell",
            "syllables": 1
        },
        {
            "word": "my",
            "syllables": 1
        },
        {
            "word": "kids",
            "syllables": 1
        },
        {
            "word": "this",
            "syllables": 1
        },
        {
            "word": "was",
            "syllables": 1
        },
        {
            "word": "the",
            "syllables": 1
        },
        {
            "word": "original",
            "syllables": 4
        },
        {
            "word": "alphabet",
            "syllables": 3
        },
        {
            "word": "and",
            "syllables": 1
        },
        {
            "word": "school",
            "syllables": 1
        },
        {
            "word": "is",
            "syllables": 1
        },
        {
            "word": "teaching",
            "syllables": 2
        },
        {
            "word": "them",
            "syllables": 1
        },
        {
            "word": "wrong",
            "syllables": 1
        },
        {
            "word": "information",
            "syllables": 4
        }
    ],
    [
        {
            "word": "This",
            "syllables": 1
        },
        {
            "word": "is",
            "syllables": 1
        },
        {
            "word": "probably",
            "syllables": 3
        },
        {
            "word": "the",
            "syllables": 1
        },
        {
            "word": "best",
            "syllables": 1
        },
        {
            "word": "mbmbam",
            "syllables": 1
        },
        {
            "word": "animatic",
            "syllables": 4
        },
        {
            "word": "I’ve",
            "syllables": 1
        },
        {
            "word": "seen.",
            "syllables": 1
        },
        {
            "word": "It",
            "syllables": 1
        },
        {
            "word": "has",
            "syllables": 1
        },
        {
            "word": "so",
            "syllables": 1
        },
        {
            "word": "much",
            "syllables": 1
        },
        {
            "word": "energy",
            "syllables": 3
        }
    ],
    [
        {
            "word": "Very",
            "syllables": 2
        },
        {
            "word": "cute,",
            "syllables": 1
        },
        {
            "word": "unique",
            "syllables": 3
        },
        {
            "word": "way",
            "syllables": 1
        },
        {
            "word": "to",
            "syllables": 1
        },
        {
            "word": "draw",
            "syllables": 1
        },
        {
            "word": "them!",
            "syllables": 1
        }
    ],
    [
        {
            "word": "Bitty",
            "syllables": 2
        },
        {
            "word": "Robot",
            "syllables": 2
        },
        {
            "word": "Justin",
            "syllables": 2
        },
        {
            "word": "is",
            "syllables": 1
        },
        {
            "word": "everything",
            "syllables": 4
        },
        {
            "word": "to",
            "syllables": 1
        },
        {
            "word": "me",
            "syllables": 1
        }
    ],
    [
        {
            "word": "I",
            "syllables": 1
        },
        {
            "word": "love",
            "syllables": 1
        },
        {
            "word": "how",
            "syllables": 1
        },
        {
            "word": "close",
            "syllables": 1
        },
        {
            "word": "Griffin",
            "syllables": 2
        },
        {
            "word": "gets",
            "syllables": 1
        },
        {
            "word": "to",
            "syllables": 1
        },
        {
            "word": "releasing",
            "syllables": 3
        },
        {
            "word": "that",
            "syllables": 1
        },
        {
            "word": "NATO",
            "syllables": 2
        },
        {
            "word": "already",
            "syllables": 3
        },
        {
            "word": "did",
            "syllables": 1
        },
        {
            "word": "the",
            "syllables": 1
        },
        {
            "word": "thing",
            "syllables": 1
        },
        {
            "word": "he's",
            "syllables": 1
        },
        {
            "word": "trying",
            "syllables": 1
        },
        {
            "word": "to",
            "syllables": 1
        },
        {
            "word": "do",
            "syllables": 1
        },
        {
            "word": "and",
            "syllables": 1
        },
        {
            "word": "then",
            "syllables": 1
        },
        {
            "word": "keeps",
            "syllables": 1
        },
        {
            "word": "going",
            "syllables": 1
        },
        {
            "word": "anyway.",
            "syllables": 3
        }
    ],
    [
        {
            "word": "Am",
            "syllables": 1
        },
        {
            "word": "I",
            "syllables": 1
        },
        {
            "word": "the",
            "syllables": 1
        },
        {
            "word": "only",
            "syllables": 2
        },
        {
            "word": "one",
            "syllables": 1
        },
        {
            "word": "laughing",
            "syllables": 2
        },
        {
            "word": "my",
            "syllables": 1
        },
        {
            "word": "ass",
            "syllables": 1
        },
        {
            "word": "off",
            "syllables": 1
        },
        {
            "word": "while",
            "syllables": 1
        },
        {
            "word": "imagining",
            "syllables": 4
        },
        {
            "word": "an",
            "syllables": 1
        },
        {
            "word": "actual",
            "syllables": 3
        },
        {
            "word": "conversation",
            "syllables": 4
        },
        {
            "word": "in",
            "syllables": 1
        },
        {
            "word": "the",
            "syllables": 1
        },
        {
            "word": "new",
            "syllables": 1
        },
        {
            "word": "alphabet?",
            "syllables": 3
        }
    ],
    [
        {
            "word": "i",
            "syllables": 1
        },
        {
            "word": "really",
            "syllables": 2
        },
        {
            "word": "love",
            "syllables": 1
        },
        {
            "word": "how",
            "syllables": 1
        },
        {
            "word": "small",
            "syllables": 1
        },
        {
            "word": "Justin",
            "syllables": 2
        },
        {
            "word": "is",
            "syllables": 1
        },
        {
            "word": "its",
            "syllables": 1
        },
        {
            "word": "truly",
            "syllables": 2
        },
        {
            "word": "brilliant",
            "syllables": 3
        }
    ],
    [
        {
            "word": "The",
            "syllables": 1
        },
        {
            "word": "way",
            "syllables": 1
        },
        {
            "word": "they",
            "syllables": 1
        },
        {
            "word": "say",
            "syllables": 1
        },
        {
            "word": "Gumpy",
            "syllables": 2
        },
        {
            "word": "makes",
            "syllables": 1
        },
        {
            "word": "me",
            "syllables": 1
        },
        {
            "word": "really",
            "syllables": 2
        },
        {
            "word": "happy",
            "syllables": 2
        },
        {
            "word": "bc",
            "syllables": 1
        },
        {
            "word": "my",
            "syllables": 1
        },
        {
            "word": "dog",
            "syllables": 1
        },
        {
            "word": "Gump",
            "syllables": 1
        },
        {
            "word": "who",
            "syllables": 1
        },
        {
            "word": "passed",
            "syllables": 1
        },
        {
            "word": "recently",
            "syllables": 3
        },
        {
            "word": "was",
            "syllables": 1
        },
        {
            "word": "nicknamed",
            "syllables": 2
        },
        {
            "word": "Gumpy",
            "syllables": 2
        },
        {
            "word": "or",
            "syllables": 1
        },
        {
            "word": "Gummy",
            "syllables": 2
        },
        {
            "word": "Bear",
            "syllables": 1
        },
        {
            "word": "🧡",
            "syllables": 0
        }
    ],
    [
        {
            "word": "<a",
            "syllables": 1
        },
        null,
        {
            "word": "Me",
            "syllables": 1
        },
        {
            "word": "after",
            "syllables": 2
        },
        {
            "word": "hearing",
            "syllables": 2
        },
        {
            "word": "about",
            "syllables": 2
        },
        {
            "word": "the",
            "syllables": 1
        },
        {
            "word": "daemonculaba",
            "syllables": 5
        }
    ]
]

const options = { poemType: 'haiku' }

//console.log(generatePoem(testData, options))

module.exports = generatePoem