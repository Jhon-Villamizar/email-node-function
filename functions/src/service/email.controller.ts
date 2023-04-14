import * as nodemailer from 'nodemailer';
import { HOST, PASS, TO } from '../envConfig';

type data = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const emailService = (data: data, res: any) => {
  const { name, email, subject, message } = data;

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
    text: `${name} \n ${email} \n ${message}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.send(`We have a error: ${error}`);
    } else {
      res.text('Email sent');
    }
  });
};

export default emailService;
