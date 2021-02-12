module.exports.noticias = function (application, req, res) {
  const connection = application.config.dbConnection()
  const noticiasModel = new application.app.models.NoticiasDAO(connection)

  noticiasModel.getNoticias((error, result) => {
    try {
      res.render('noticias/noticias', { noticias: result })
    } catch (e) {
      console.log(error)
    }
  })
}

module.exports.noticia = function (application, req, res) {
  const connection = application.config.dbConnection()
  const noticiasModel = new application.app.models.NoticiasDAO(connection)
  const idNoticia = req.query
  noticiasModel.getNoticia(idNoticia, (error, result) => {
    try {
      res.render('noticias/noticia', { noticia: result })
    } catch (e) {
      console.log(error)
    }
  })
}
