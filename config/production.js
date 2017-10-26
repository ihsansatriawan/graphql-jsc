const config = {
  port: 4000,
  JSC: {
    HOSTNAME: "http://api.jakarta.go.id",
    TOKEN: process.env.JSC_TOKEN
  },
  GRAPHQL_ENGINE: {
    API_KEY: process.env.ENGINE_API_KEY
  }
}

module.exports = config