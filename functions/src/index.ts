import * as functions from 'firebase-functions';
import emailService from './service/email.controller';
import cors from 'cors';
// import experss from 'express';
// import bodyParser from 'body-parser';
// import { PORT } from './envConfig';

const corsHandler = cors({ origin: true });
// const app = experss();
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/', (req, res) => {
//   try {
//     const response = emailService(req.body, res);
//     res.send(response);
//   } catch (error) {
//     res.send(error);
//   }
// });

// (() => {
//   app.listen(PORT);
//   console.log(`listen on port ${PORT}`);
// })();

export const email = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => {
    emailService(req.body, res);
  });
});
