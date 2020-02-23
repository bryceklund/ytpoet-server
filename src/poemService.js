const PoemService = {
    getPoemTitle(knex, id) {
        return knex.select('title').from('poems').where('id', id)
    },
    getPoemBody(knex, id) {
        return knex.select('body_line', 'order_id').from('lines').where('poem_id', id)
    },
    savePoemLines(knex, content) {
        return knex('lines').insert(content)
    },
    savePoem(knex, content) {
        return knex('poems').insert(content).returning('*')
    },
    getPoemIds(knex) {
        return knex.select('id').from('poems')
    }
}

module.exports = PoemService