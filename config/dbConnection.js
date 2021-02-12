const mysql = require('mysql')

const connMysql = () => {
  console.log('conexao com db foi estabelecida')
  return connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'portal_noticias',
    insecureAuth: true
  })
}

module.exports = () => {
  console.log('o autoload carregou o modulo de conexao com db')
  return connMysql
}
