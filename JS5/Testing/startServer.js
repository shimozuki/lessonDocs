const startServer = (port) => {
  return new Promise((resolve, reject) => {
    app.listen(port, (e) => {
      console.log(`app successfully listening to port ${port}`)
    })
  })
}
