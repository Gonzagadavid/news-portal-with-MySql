class NoticiasDAO {
  constructor (connection) {
    this._connection = connection
  }

  getNoticias (callback) {
    this._connection.query('select * from noticias order by data_criacao desc', callback)
  }

  getNoticia (idNoticia, callback) {
    this._connection.query('select * from noticias where id_noticia= ' + idNoticia.id_noticia, callback)
  }

  salvarNoticia (noticia, callback) {
    this._connection.query('insert into noticias set ?', noticia, callback)
  }

  get5UltimasNoticias (callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback)
  }
}

module.exports = _ => NoticiasDAO
