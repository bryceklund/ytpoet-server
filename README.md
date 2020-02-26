# ytPoet | procedurally generated YouTube poetry
Welcome! Check out the live app at https://ytpoet.bryceklund.dev/
Frontend repo: https://github.com/bryceklund/ytpoet-client

## Technologies Used
- Server built with Node.js and Express
- Database built with PostgreSQL 


## Summary / How-To
### POST /api/generate
- Accepts poem type, syllable count, line count, profanity (boolean), and video url
- Returns a JSON object with keys "title" and "body"

### POST /api/poem
- Accepts title and body
- Saves the information to the database and returns a uuid

### GET /api/poem/:poemId
- Pulls uuid from request params
- Returns the corresponding poem from the database

### GET /api/random
- Grabs a random uuid from the database
