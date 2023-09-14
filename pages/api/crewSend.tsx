import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
  console.log('Data', req.body)

  const { firstName, lastName, phone, email, partner, cafeChat } = req.body

  const messageData = {
    from: 'Seeker Connect form <info@talentverse.com.au>',
    to: 'info@talentverse.com.au',
    subject: 'New Seeker Connect Form!',
    text: `Hello,

    You have a new form entry from: ${firstName} ${lastName} ${email}.

    They're interested in becoming a parther in: ${partner}
    Are they interested in a cafe chat: ${cafeChat}

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