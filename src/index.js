import express from 'express';
import config from 'config';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import schema from './schema';
import logger from './lib/logger';

const PORT = process.env.PORT || config.get('port');

const app = express();

app.use('*', cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
}));

if (process.env.NODE_ENV === 'dev') {
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }));
}

app.listen(PORT, () => {
  logger.log('info', `Running a GraphQL API server at localhost:${PORT}/graphql`);
});
