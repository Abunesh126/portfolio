import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import multer from 'multer';
import rateLimit from 'express-rate-limit';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/v1/contact-mail', limiter);

// Configure multer for form data
const upload = multer();

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'abunesh2006@gmail.com',
    pass: 'gjhw txxx tkfp nkmq'
  }
});

// API Key validation
const VALID_API_KEY = '78c4be0c6c8779406b83ded5172480a3';

// Contact form endpoint
app.post('/v1/contact-mail', upload.none(), async (req, res) => {
  try {
    const { name, email, message, phone_no, api_key } = req.body;

    // Validate API key
    if (api_key !== VALID_API_KEY) {
      return res.status(401).json({ error: 'Invalid API key' });
    }

    // Validate required fields
    if (!name || !email || !message || !phone_no) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'abunesh2006@gmail.com',
      to: 'abunesh2006@gmail.com', // Your receiving email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8A2BE2;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone_no}</p>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 10px;">
            <h3 style="margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          <hr style="margin: 30px 0; border: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from your portfolio contact form
          </p>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Success response
    res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });

    console.log(`Contact form submission from ${name} (${email})`);

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'portfolio-backend' });
});

// Start server
app.listen(port, () => {
  console.log(`Portfolio backend running on port ${port}`);
});

export default app;
