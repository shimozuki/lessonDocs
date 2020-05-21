const startServer = (port) => {
  return new Promise((resolve, reject) => {
    // do something ...
    const server = app.listen(port)
    resolve(server)
  })
}

const stopServer = (server) => {
  return new Promise((resolve, reject) => {
    server.stop(() => {
      resolve()
    })
  })
}

module.exports = {
  start: startServer,
  stop: stopServer
}
