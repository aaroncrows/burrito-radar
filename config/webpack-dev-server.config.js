const { PORT = 9292 } = process.env

module.exports = {
  stats: {
    colors: true
  },
  proxy: {
    '/graphql': {
      target: `http://localhost:${PORT}/graphql`,
      secure: false,
      changeOrigin: true,
      ignorePath: true,
    }
  }
}
