import bodyParser from 'body-parser';
import express from 'express';

import router from './routes';

const cors = require('cors');



const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => {
  console.log('The application is listening on port', port);
});
