import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
  console.log('Data', req.body)

  const { firstName, lastName, phone, email, dropDown, radioGroup } = req.body

  const messageData = {
    from: 'Contact Form <test@joshillichmann.com>',
    to: 'josh@studioprisoner.com',
    subject: 'New Contact Form!',
    text: `Hello,

    You have a new form entry from: ${firstName} ${lastName} ${email}.

    Job Status: ${dropDown}
    They're intested in a Job Enquiry: ${radioGroup}

    You can reach them on: ${phone}   
    `,
  }

  try {
    const data = await resend.emails.create(messageData)
    console.log(data)
  } catch (err: any) {
    console.error('Error sending email', err)
  }

  res.status(200).json({ submitted: true })
}