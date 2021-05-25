'use strict'

const http = require('http')

const staticServe = function(req, res) {
    res.StatusCode = 200
    res.write('ok')
    return res.end
}

const httpServer = http.createServer(staticServe)

httpServer.listen(2100)