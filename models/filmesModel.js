module.exports = (sequelize, dataTypes) => {
    const filme = sequelize.define('filme', {
        filme_id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        titulo:dataTypes.STRING,
        descricao:{
            type:dataTypes.STRING,
            allownNull:true
        },
        ano_de_lancamento:{
            type:dataTypes.DATE
        },
        indioma_id:{
            type:dataTypes.INTEGER
        },
        indioma_original_id:{
            type:dataTypes.INTEGER
        },
        duracao_da_locacao:{
            type:dataTypes.INTEGER
        },
        preco_da_locacao:{
            type:dataTypes.DECIMAL(4,2)
        },
        duracao_do_filme:dataTypes.INTEGER,
        custo_de_substituicao:dataTypes.DECIMAL(5,2),
        classificacao:dataTypes.STRING,
        recursos_especiais:dataTypes.STRING
        

    },{
        tableName:'filme'
        //estrutura necessária quando não existe o campo timestamp na tabela
        //timestamps:false
    })
}