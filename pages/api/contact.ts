import type { NextApiRequest, NextApiResponse } from 'next';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

type ResponseData = {
  message: string;
};

const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: 'cc5feb8506e9457d70b205b8b514386c-f6fe91d3-f6e2de47' });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  try {
    await mg.messages.create('mg.laserartshow.com', {
      from: `Contact Form <postmaster@mg.laserartshow.com>`,
      to: ["1romain.bocquet1@gmail.com"],
      subject: "Hello",
      text: `Hello,
    
      Nouveau message sur laser art show de : ${req.body.firstName} ${req.body.lastName}
      Son Email est : ${req.body.email}
      L'objet de son message : ${req.body.subject}
      Message : ${req.body.message}`,
    });    
    
    console.log(msg);
    res.status(200).json({ message: 'Email envoyé avec succès!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email.' });
  }
}