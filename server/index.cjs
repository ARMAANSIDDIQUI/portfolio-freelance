const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: './.env' }); // Ensure dotenv loads from the correct path

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Contact form API route
app.post('/api/contact', async (req, res) => {
  // 1. Only allow POST requests for security (redundant with app.post, but good for clarity)
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  // 2. Extract and validate form data from the request body
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    // 3. Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 4. Define email options
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: 'armaansiddiqui.pms@gmail.com', // **Your actual email address where you want to receive messages**
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // 5. Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully via Serverless Function');

    // 6. Send a success response to the frontend
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    // 7. Send an error response to the frontend
    return res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

// For Vercel, export the app
module.exports = app;

// In local development, listen on a port.
// This condition ensures app.listen is ONLY called when running locally (node server/index.cjs),
// and NOT when imported by Vercel as a serverless function.
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
