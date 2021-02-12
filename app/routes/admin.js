const { body, validationResult } = require('express-validator')
module.exports = application => {
  application.get('/form_inclusao_noticia', (req, res) => {
    application.app.controllers.admin.form_inclusao_noticia(application, req, res)
  })
  application.post('/noticias/salvar', [
    // validação de dados
    body('titulo').notEmpty().withMessage('titulo obrigatorio'),
    body('resumo').notEmpty().withMessage('resumo obrigatorio'),
    body('resumo').isLength({ min: 10, max: 100 }).withMessage('resumo deve conter entre 10 a 100 caracteres'),
    body('autor').notEmpty().withMessage('autor obrigatorio'),
    body('date_noticia').notEmpty().isDate({ format: 'YYYY-MM-DD' }).withMessage('data obrigatoria'),
    body('noticias').notEmpty().withMessage('noticia obrigatoria')
  ], (req, resp) => {
    const errors = validationResult(req)
    application.app.controllers.admin.salvar_noticia(application, errors, req, resp)
  })
}
