import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/send-mail', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `${subject} - from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`📩 Email sent from ${email}`);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Mail error:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Mail API running on port ${PORT}`));
