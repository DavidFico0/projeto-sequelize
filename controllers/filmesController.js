//const sequelize = require('sequelize')
//const config = require('../config/database')
//const filmesModel = require('../models/filmesModel')
const { Filme } = require('../models')
//const db = new sequelize(config);

const filmesController = {
    // index: async (req, res) => {
    //     //let tituloFilme = 'AIRPORT POLLOCK'
    //     let tituloFilme = 'A%'
    //     //let tableFilmes = await db.query('SELECT * FROM filme', {type:sequelize.QueryTypes.SELECT})
    //     let tableFilmes = await db.query('SELECT * FROM filme WHERE filme.titulo LIKE :tituloFilme',
    //     {
    //         replacements: {
    //             tituloFilme
    //         },type:sequelize.QueryTypes.SELECT
    //     })

    //     //console.log(tableFilmes);
    //     res.render('filmes', {tableFilmes})
    // }

    index: async (req, res) => {
        let tableFilme = await Filme.findAll();
        console.log(tableFilme);
    }
}

module.exports = filmesController