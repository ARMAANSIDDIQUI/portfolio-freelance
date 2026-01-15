const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = async (req, res) => {
  // 1. Only allow POST requests for security
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  // 2. Extract and validate form data from the request body
  const { name, contact, subject, message } = req.body;
  if (!name || !contact || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    // 3. Create a Nodemailer transporter
    // This configures how Nodemailer will send emails (using Gmail in this case).
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use 'gmail' for simplicity with Gmail accounts
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address from environment variables
        pass: process.env.GMAIL_APP_PASSWORD, // Your App Password from environment variables
      },
    });

    // 4. Define email options (who is it from, to, subject, content)
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`, // The authenticated sender's email
      to: 'armaansiddiqui.mbd@gmail.com', // **Your actual email address where you want to receive messages**
      replyTo: contact, // Allows you to reply directly to the user's contact info
      subject: `Portfolio Contact: ${subject}`, // Subject line for the email you receive
      text: `
        Name: ${name}
        Contact: ${contact}
        Subject: ${subject}

        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Subject:</strong> ${subject}</p>
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
};