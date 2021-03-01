const { createProxyMiddleware } = require('http-proxy-middleware')
require('dotenv').config()

let target
if (process.env.NODE_ENV === 'development')
    target = 'http://localhost:5000/'
else if (process.env.NODE_ENV === 'production')
    target = 'https://nzprophet-backend.herokuapp.com'


module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target,
            changeOrigin: true,
        })
    )
}
