import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export function sendCodeToResetPasswordViaEmail(userEmail: string, randomCode: number) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS,
    },
  });
  
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: userEmail,
    subject: 'Say.it - código para recuperação de senha',
    text: `Código para a recuperação de senha: ${randomCode}`,
  };
  
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    };
  });
};
