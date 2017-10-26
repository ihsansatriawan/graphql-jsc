import express from 'express';
import config from 'config';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { Engine } from 'apollo-engine';
import bodyParser from 'body-parser';
import schema from './schema';
import logger from './lib/logger';

const PORT = process.env.PORT || config.get('port');

const app = express();

app.use('*', cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  tracing: true,
  cacheControl: true,
}));

if (process.env.NODE_ENV === 'production') {
  const engine = new Engine({
    engineConfig: {
      apiKey: config.GRAPHQL_ENGINE.API_KEY,
      logging: {
        level: 'DEBUG' 
      }
    },
    graphqlPort: process.env.PORT || config.get('port'),  
    endpoint: '/graphql',
    dumpTraffic: true     
  });
  
  engine.start();
  app.use(engine.expressMiddleware());
}

if (process.env.NODE_ENV === 'dev') {
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }));
}

app.listen(PORT, () => {
  logger.log('info', `Running a GraphQL API server at localhost:${PORT}/graphql`);
});
