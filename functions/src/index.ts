/* eslint-disable @typescript-eslint/no-unused-vars */
import * as functions from 'firebase-functions';
import experss from 'express';
// import cors from 'cors';
import bodyParser from 'body-parser';
import { PORT } from './envConfig';
import emailService from './service/email.controller';

const app = experss();
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  try {
    const response = emailService(req.body, res);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

(() => {
  app.listen(PORT);
  console.log(`listen on port ${PORT}`);
})();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const email = functions.https.onRequest((request, response) => {
  emailService(request.body, response);
});
