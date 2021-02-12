module.exports.form_inclusao_noticia = function (application, req, res) {
  res.render('admin/form_add_noticia', { validacao: {} })
}

module.exports.salvar_noticia = function (application, errors, req, resp) {
  const noticia = req.body

  if (!errors.isEmpty()) {
    resp.render('admin/form_add_noticia', { validacao: errors.errors })
    return
  }

  const connection = application.config.dbConnection()
  const noticiasModel = new application.app.models.NoticiasDAO(connection)

  noticiasModel.salvarNoticia(noticia, function (error, result) {
    try {
      return resp.redirect('/noticias')
    } catch (e) {
      console.log(error)
    }
  })
}
