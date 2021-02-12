module.exports.index = (application, req, resp) => {
  const connection = application.config.dbConnection()
  const noticiasModel = new application.app.models.NoticiasDAO(connection)

  noticiasModel.get5UltimasNoticias(function (error, result) {
    try {
      resp.render('home/index', { noticias: result })
    } catch (e) {
      console.log(error, e.message)
    }
  })
}
