import React, { useState } from "react";
import { motion } from 'framer-motion';
import { FiSend, FiLoader } from 'react-icons/fi';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    api_key: "78c4be0c6c8779406b83ded5172480a3",
    name: "",
    email: "",
    message: "",
    phone_no: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value);
      });

      const res = await fetch(
        "https://hlomail-backend.onrender.com/v1/contact-mail",
        {
          method: "POST",
          body: formPayload,
        }
      );

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully!",
        });
        setFormData({
          api_key: formData.api_key,
          name: "",
          email: "",
          message: "",
          phone_no: "",
        });
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      console.error(error);
      // Still show success like original script
      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });
      setFormData({
        api_key: formData.api_key,
        name: "",
        email: "",
        message: "",
        phone_no: "",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="hidden"
        name="api_key"
        value={formData.api_key}
      />

      <motion.div 
        className="form-group"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <label htmlFor="name" className="form-label">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          placeholder="Your name"
          required
        />
      </motion.div>

      <motion.div 
        className="form-group"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <label htmlFor="email" className="form-label">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          placeholder="your.email@example.com"
          required
        />
      </motion.div>

      <motion.div 
        className="form-group"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.15 }}
      >
        <label htmlFor="phone_no" className="form-label">
          Phone Number *
        </label>
        <input
          type="text"
          id="phone_no"
          name="phone_no"
          value={formData.phone_no}
          onChange={handleChange}
          className="form-input"
          placeholder="Your phone number"
          required
        />
      </motion.div>

      <motion.div 
        className="form-group"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <label htmlFor="message" className="form-label">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-input form-textarea"
          placeholder="Tell me about your project..."
          rows={5}
          required
        ></textarea>
      </motion.div>

      <motion.button
        type="submit"
        disabled={loading}
        className="submit-button group"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {loading ? (
          <FiLoader className="animate-spin" />
        ) : status.type === 'success' ? (
          '✨'
        ) : (
          <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
        )}
        {loading ? 'Sending...' : 
         status.type === 'success' ? 'Message Sent! ✨' : 'Send Message'}
      </motion.button>

      {/* Status Message */}
      {status.message && (
        <motion.div 
          className={`form-status ${
            status.type === 'success' ? 'form-status-success' :
            status.type === 'error' ? 'form-status-error' :
            'form-status-info'
          }`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {status.message}
        </motion.div>
      )}
    </form>
  );
};

export default ContactForm;
