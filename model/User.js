const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
    /* não aceita valor nulo */
    allowNull: false,
  },
  occupation: {
    type: DataTypes.STRING,
    /* não aceita valor nulo & vazio*/
    required: true,
  },
  newsletter: {
    type: DataTypes.BOOLEAN,
  },
})

module.exports = User