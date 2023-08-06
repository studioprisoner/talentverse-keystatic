import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { firstName, lastName, email, phone, dropDown, radioGroup } = req.body;

  try {
    const data = await resend.emails.send({
        to: ['josh@studioprisoner.com'],
        from: 'josh@joshillichmann.com',
        subject: 'New Contact Form Submission',
        data: { firstName, lastName, email, phone, dropDown, radioGroup },
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};