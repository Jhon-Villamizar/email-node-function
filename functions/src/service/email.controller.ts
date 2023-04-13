import * as nodemailer from 'nodemailer';
import { HOST, PASS, TO } from '../envConfig';

type data = {
  email: string;
  subject: string;
  message: string;
};

const emailService = (data: data) => {
  const { email, subject, message } = data;

  const transporter = nodemailer.createTransport({
    host: HOST,
    port: 587,
    secure: false,
    auth: {
      user: 'jhonvio@hotmail.com',
      pass: PASS,
    },
  });

  const mailOptions = {
    from: 'jhonvio@hotmail.com',
    to: TO,
    subject: subject,
    text: `${email} \n ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return `we have a error: ${error}`;
    } else {
      console.log('Email sent: ' + info.response);
      return `email sent: ${info.response}`;
    }
  });
};

export default emailService;
