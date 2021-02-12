module.exports = application => application.get('/', (req, resp) => application.app.controllers.home.index(application, req, resp))
