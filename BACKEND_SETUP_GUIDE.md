# 📧 Backend Integration Setup Guide

## 🚀 Quick Start

Your portfolio now has a fully functional backend for the contact form! Here's how to set it up:

### 1. Email Configuration (Gmail)

**First, set up Gmail App Password:**

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification**
3. Scroll down to **App passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### 2. Environment Setup

Create a `.env` file in your project root:

```bash
# Copy the example file
copy .env.example .env
```

Edit `.env` and add your Gmail App Password:
```env
EMAIL_USER=abunesh2006@gmail.com
EMAIL_PASS=your-16-character-app-password-here
API_KEY=78c4be0c6c8779406b83ded5172480a3
PORT=3001
```

### 3. Running the Full Application

**Option 1: Frontend + Backend (Development)**
```bash
npm run fullstack:dev
```

**Option 2: Frontend + Backend (Mobile Testing)**
```bash
npm run fullstack:mobile
```

**Option 3: Run Separately**
```bash
# Terminal 1 - Backend
npm run backend:dev

# Terminal 2 - Frontend
npm run dev
```

## 🌐 API Endpoints

### Contact Form
- **URL**: `http://localhost:3001/v1/contact-mail`
- **Method**: POST
- **Content-Type**: application/json

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to work with you!",
  "phone_no": "+1234567890",
  "api_key": "78c4be0c6c8779406b83ded5172480a3"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### Health Check
- **URL**: `http://localhost:3001/health`
- **Method**: GET

## 🔒 Security Features

✅ **Rate Limiting**: 5 requests per 15 minutes per IP
✅ **API Key Validation**: Protects against unauthorized access
✅ **Input Validation**: Validates email format and required fields
✅ **CORS Protection**: Configured for security
✅ **Error Handling**: Comprehensive error responses

## 📱 Mobile Testing

Your contact form now works on mobile! To test:

1. Start the full application:
   ```bash
   npm run fullstack:mobile
   ```

2. Access on mobile device:
   - **Frontend**: `http://YOUR_IP:3000`
   - **Backend**: `http://YOUR_IP:3001`

## 🚀 Production Deployment

### Option 1: Separate Deployment

**Frontend (Netlify/Vercel):**
- Build: `npm run build`
- Deploy `dist` folder

**Backend (Railway/Render/Heroku):**
- Deploy `server.js` with dependencies
- Set environment variables

### Option 2: Full-Stack Deployment (Railway)

1. Connect your GitHub repository
2. Set environment variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   API_KEY=78c4be0c6c8779406b83ded5172480a3
   ```
3. Railway will automatically detect and deploy both frontend and backend

### Update API URL for Production

In `Contact.tsx`, update the fetch URL:
```typescript
// For production, replace localhost with your backend URL
const response = await fetch('https://your-backend-url.com/v1/contact-mail', {
  // ... rest of the code
});
```

## 🐛 Troubleshooting

**Backend won't start:**
- Check if port 3001 is available
- Verify all dependencies are installed: `npm run backend:install`

**Emails not sending:**
- Verify Gmail App Password is correct
- Check if 2-Step Verification is enabled
- Ensure `.env` file exists and is properly formatted

**CORS errors:**
- Backend automatically handles CORS for development
- For production, update CORS settings in `server.js`

**API Key errors:**
- Verify the API key matches in both frontend and backend
- Check for typos in the API key

## 📊 Testing the Contact Form

1. Start the application: `npm run fullstack:dev`
2. Navigate to the contact section
3. Fill out the form with valid data
4. Click "Send Message"
5. Check your email for the message

## 🔧 Customization

**Change receiving email:**
Update `server.js` line 54:
```javascript
to: 'your-new-email@gmail.com', // Your receiving email
```

**Modify rate limiting:**
Update `server.js` lines 9-13:
```javascript
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Time window
  max: 10, // Max requests per window
  message: 'Custom rate limit message'
});
```

Your portfolio contact form is now fully functional with a professional backend! 🎉
