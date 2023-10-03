import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
  console.log('Data', req.body)

  const { firstName, position, company, phone, industry, email, totalEmployees, talentAdvice, vacancydetails, positionStatus, meetingPreference } = req.body

  const messageData = {
    from: 'Employer connect <info@talentverse.com.au>',
    to: 'info@talentverse.com.au',
    subject: 'New Employer Connect Form',
    text: `Hello,

    You have a new form entry from: ${firstName} from ${company} their postion is ${position}.

    Email: ${email}
    Industy: ${industry}
    Total employees range: ${totalEmployees}
    Hiring Request: ${positionStatus}
    Talent advice: ${talentAdvice}

    Request Details: ${vacancydetails}

    You can reach them on: ${phone}
    
    We prefer a meeting via: ${meetingPreference}
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