const app = require('../src/app');
const knex = require('knex')

describe(`poemRouter`, () => {
    let db
    before(`make knex instance`, () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL
        })
        app.set('db', db)
    })
    after(`disconnect from the db`, () => db.destroy())

    it('GET / responds with 200 containing "HELL WORLD"', () => {
        return supertest(app).get('/').expect(200, 'HELL WORLD')
    })
    it(`POST /api/generate returns 200 and an object with title and body`, () => {
        const options = {
            poemType: 'haiku',
            profanity: false,
            url: 'https://www.youtube.com/watch?v=kwAWdp5MVKU'
        }
        return supertest(app)
                .post('/api/generate')
                .send(options)
                .set({ 'Authorization': 'Bearer swag420' })
                .expect(200)
                .expect(res => {
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.keys('title', 'body')
                })
    })
    it(`POST /api/poem returns 201 and a uuid`, () => {
        const poem = {
            title: 'a new poem',
            body: [
                'first line is this one right here',
                'second line is this then',
                'three lines is enough i think'
            ]
        }
        return supertest(app)
                .post('/api/poem')
                .send(poem)
                .set({ 'Authorization': 'swag420' })
                .expect(200)
                .expect(res => {
                    expect(res.body).to.have.keys('poemId')
                })
    })
    it(`GET /api/poem/:poemId returns 200 and a poem object`, () => {
        return supertest(app)
                .get('/api/poem/1')
                .set({ 'Authorization': 'Bearer swag420' })
                .expect(200)
                .expect(res => expect(res.body).to.have.keys('title', 'body'))
    })
    it(`GET /api/random returns a random uuid`, () => {
        return supertest(app)
                .get('/api/random')
                .set({ 'Authorization': 'Bearer swag420' })
                .expect(200)
                .expect(res => expect(res.body).to.have.keys('id'))
    })
});