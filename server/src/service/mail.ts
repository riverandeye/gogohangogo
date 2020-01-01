import nodemailer from 'nodemailer';
import smtpPool from 'nodemailer-smtp-transport';
import { MAIL } from '../constants';
import generateMailContent from '../utils/generate-mail-content';

console.log(process.env.MAIL_ID);

const stmpConfig = {
  mailer: {
    service: 'Gmail',
    host: 'localhost',
    port: '465',
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PW,
    },
  },
};

const transporter = nodemailer.createTransport(smtpPool(stmpConfig.mailer));

const EmailService = {
  async sendVerificationMail(email: string, authKey: string) {
    const mailOptions = {
      from: process.env.MAIL_ID,
      to: email,
      subject: MAIL.MAIL_SUBJECT,
      html: generateMailContent(authKey),
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return info;
  },
};

export default EmailService;
