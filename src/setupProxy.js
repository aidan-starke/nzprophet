const { createProxyMiddleware } = require('http-proxy-middleware')
require('dotenv').config()

if (process.env.NODE_ENV === 'development') {
    module.exports = function (app) {
        app.use(
            '/api',
            createProxyMiddleware({
                target: 'http://localhost:5000/',
                changeOrigin: true,
            })
        )
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports = function (app) {
        app.use(
            '/api',
            createProxyMiddleware({
                target: 'https://nzprophet-backend.herokuapp.com/',
                changeOrigin: true,
            })
        )
    }
}
