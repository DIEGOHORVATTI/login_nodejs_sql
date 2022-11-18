const boxen = require('boxen')
const chalk = require('chalk')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('links_uteis', 'div', '20020000', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize