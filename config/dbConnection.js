const mysql = require('mysql')

const connMysql = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'portal_noticias',
    insecureAuth: true
  })
  return connection
}

module.exports = () => {
  return connMysql
}
