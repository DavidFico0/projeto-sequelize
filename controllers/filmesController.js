const sequelize = require('sequelize')
const config = require('../config/database')
const db = new sequelize(config);

const filmesController = {
    index: async (req, res) => {
        //let tituloFilme = 'AIRPORT POLLOCK'
        let tituloFilme = 'A%'
        //let tableFilmes = await db.query('SELECT * FROM filme', {type:sequelize.QueryTypes.SELECT})
        let tableFilmes = await db.query('SELECT * FROM filme WHERE filme.titulo LIKE :tituloFilme',
        {
            replacements: {
                tituloFilme
            },type:sequelize.QueryTypes.SELECT
        })

        //console.log(tableFilmes);
        res.render('filmes', {tableFilmes})
    }
}

module.exports = filmesController