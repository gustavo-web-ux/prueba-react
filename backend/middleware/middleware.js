import cors from 'cors';
import bodyParser from 'body-parser';

const configurarMiddleware = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
};

export default configurarMiddleware;