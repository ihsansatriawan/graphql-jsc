const config = {
  port: 4000,
  JSC: {
    HOSTNAME: "http://api.jakarta.go.id",
    TOKEN: process.env.JSC_TOKEN
  },
  NEWS_API: {
    HOSTNAME: "https://newsapi.org",
    TOKEN: process.env.NEWS_API_KEY
  },
  GRAPHQL_ENGINE: {
    API_KEY: process.env.ENGINE_API_KEY
  }
}

module.exports = config