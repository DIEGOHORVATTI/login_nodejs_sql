console.clear();
const chalk = require('chalk')
const boxen = require("boxen")
const express = require('express')
const exphbs = require('express-handlebars')
const browserSync = require("browser-sync").create();

// const conn = require('../db/conn')
// const User = require('../model/User')

const port = 3000
const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get('/', async (req, res) => {
  res.render('login')
})

/* -- abrir porta e ouvindo as modificações no browser-- */
browserSync.init(
  {
    server: "../",
    watch: true,
    middleware: [app],
    port: port,
  },
  console.log(
    boxen(`Browsersync aberto na porta ${chalk.red(port)}`, {
      margin: 1,
      float: "center",
      padding: 1,
      borderStyle: "round",
      borderColor: "green",
    })
  )
);

/* ----- banco de dados*/
// conn.sync().then(()=>{
//   app.listen(port, () => {
//     console.log(
//       boxen(`Aberto na porta ${chalk.red(port)}`, {
//         margin: 1,
//         float: 'center',
//         padding: 1,
//         borderStyle: 'round',
//         borderColor: 'green',
//       })
//     )
//   })
// }).catch((err)=>{
//   console.log(
//     boxen(`Erro na conexão|(index.js->conn): ${chalk.red(err)}`, {
//       margin: 1,
//       float: 'center',
//       padding: 1,
//       borderStyle: 'round',
//       borderColor: 'green',
//     })
//   )
// })