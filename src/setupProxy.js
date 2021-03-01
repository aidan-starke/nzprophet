const { createProxyMiddleware } = require('http-proxy-middleware')
const production = 'https://nzprophet.herokuapp.com/'
const development = 'http://localhost:5000/'
const url = (process.env.NODE_ENV ? production : development)

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: url,
            changeOrigin: true,
        })
    )
}