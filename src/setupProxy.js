const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://nzprophet-backend.herokuapp.com/',
            changeOrigin: true,
        })
    )
}
