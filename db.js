const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('dbProduto','root','181296',
{
    dialect:'mysql', host:'localhost'
});

module.exports = componenteSequelize;