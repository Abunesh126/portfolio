import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Loader,
  Globe
} from 'lucide-react';

// Import CSS styles
import '../styles/components.css';

// TypeScript interfaces
interface FormData {
  name: string;
  email: string;
  message: string;
  phone: string;
}

interface StatusState {
  type: 'success' | 'error' | 'info' | 'loading' | '';
  message: string;
}

interface ContactMethod {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string;
  description: string;
}

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeField, setActiveField] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  
  // Enhanced form state with more professional fields
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<StatusState>({ type: "", message: "" });

  // Handle input changes with validation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors on input
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Advanced form validation
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    const { name, email, phone, message } = formData;
    
    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    // Phone validation
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(phone.replace(/[\s\-()]/g, ''))) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Enhanced form submission with API integration
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({
        type: "error",
        message: "Please fix the errors above and try again."
      });
      return;
    }
    
    setLoading(true);
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      // Prepare data for backend API
      const formDataForAPI = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        phone_no: formData.phone,
        api_key: "78c4be0c6c8779406b83ded5172480a3"
      };

      // Send to backend API
      const response = await fetch('http://localhost:3001/v1/contact-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataForAPI),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }
      
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      });
      
      // Auto-hide success message after 8 seconds
      setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 8000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send message. Please try again or contact me directly via email."
      });
    } finally {
      setLoading(false);
    }
  };

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const contactMethods: ContactMethod[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "abunesh2006@gmail.com",
      link: "mailto:abunesh2006@gmail.com",
      description: ""
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9042845355",
      link: "tel:+919042845355",
      description: ""
    }
  ];

  return (
    <section 
      id="contact" 
      className="contact-luxury-section"
    >
      {/* Distributed decorative particles with low opacity */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          x: [0, 12, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          delay: 0
        }}
        className="absolute top-[15%] left-[7%] w-2 h-2 rounded-full bg-yellow-400"
        style={{ opacity: 0.14 }}
      />
      <motion.div 
        animate={{ 
          y: [0, 16, 0],
          x: [0, -10, 0],
          opacity: [0.08, 0.24, 0.08],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          delay: 2.5
        }}
        className="absolute top-[65%] right-[10%] w-3 h-3 rounded-full bg-orange-400"
        style={{ opacity: 0.12 }}
      />
      <motion.div 
        animate={{ 
          x: [0, 22, 0],
          opacity: [0.06, 0.2, 0.06],
          rotate: [0, 180]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          delay: 4
        }}
        className="absolute bottom-[18%] left-[88%] w-1.5 h-1.5 rounded-full bg-amber-400"
        style={{ opacity: 0.1 }}
      />
      <motion.div 
        animate={{ 
          y: [0, -18, 0],
          opacity: [0.09, 0.26, 0.09]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          delay: 1
        }}
        className="absolute top-[85%] left-[20%] w-2.5 h-2.5 rounded-full bg-yellow-300"
        style={{ opacity: 0.13 }}
      />
      <motion.div 
        animate={{ 
          x: [0, -14, 0],
          y: [0, 24, 0],
          opacity: [0.05, 0.19, 0.05]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          delay: 3
        }}
        className="absolute top-[40%] right-[25%] w-1 h-1 rounded-full bg-yellow-500"
        style={{ opacity: 0.08 }}
      />

      {/* Floating geometric shapes */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          opacity: [0.05, 0.16, 0.05],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{ 
          duration: 16, 
          repeat: Infinity
        }}
        className="absolute top-[20%] right-[12%] w-7 h-7 border border-yellow-400"
        style={{ 
          opacity: 0.09,
          transform: 'rotate(45deg)'
        }}
      />
      <motion.div 
        animate={{ 
          rotate: [360, 0],
          opacity: [0.04, 0.14, 0.04]
        }}
        transition={{ 
          duration: 13, 
          repeat: Infinity,
          delay: 2.5
        }}
        className="absolute bottom-[30%] left-[8%] w-5 h-5 border border-orange-400"
        style={{ 
          opacity: 0.07,
          borderRadius: '30%'
        }}
      />

      {/* Enhanced animated background */}
      <div className="contact-bg-container">
        <div className="contact-bg-primary" />
        <motion.div 
          className="contact-bg-orb-1"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="contact-bg-orb-2"
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 25, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
        />
        <motion.div 
          className="contact-bg-orb-3"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear",
            delay: 10
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="contact-sparkles-container">
        {[...Array(6)].map((_: unknown, i: number) => (
          <motion.div
            key={i}
            className="contact-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="contact-container">
        {/* Section Header */}
        <motion.div 
          className="contact-header"
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="contact-title"
            initial={{ scale: 0.9 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="contact-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your ideas into reality? <br />Let's discuss your project and build something extraordinary together.
          </motion.p>
        </motion.div>

        <div className="contact-content">
          {/* Left Column - Contact Information */}
          <motion.div 
            className="contact-info-section"
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <h3 className="contact-info-title">
                <Globe className="contact-info-icon" />
                Get in Touch
              </h3>
              
              <div className="contact-methods">
                {contactMethods.map((method: ContactMethod, index: number) => (
                  <motion.a
                    key={method.label}
                    href={method.link}
                    className="contact-method"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="contact-method-icon">
                      {method.icon}
                    </div>
                    <div className="contact-method-info">
                      <div className="contact-method-label">{method.label}</div>
                      <div className="contact-method-value">
                        {method.value}
                      </div>
                      <div className="contact-method-description">{method.description}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Enhanced Contact Form */}
          <motion.div 
            className="contact-form-section"
            initial={{ x: 50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="contact-form">
              <form ref={formRef} onSubmit={handleSubmit} className="form-grid">
                {/* Name Field */}
                <div className="form-field-container">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Name * 
                      {errors.name && <AlertCircle className="form-error-icon" />}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField('')}
                      className={`form-input ${errors.name ? 'form-input-error' : ''} ${activeField === 'name' ? 'form-input-active' : ''}`}
                      placeholder="Your full name"
                      required
                    />
                    {errors.name && <p className="form-error-message">{errors.name}</p>}
                  </div>
                </div>

                {/* Email Field */}
                <div className="form-field-container">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email *
                      {errors.email && <AlertCircle className="form-error-icon" />}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField('')}
                      className={`form-input ${errors.email ? 'form-input-error' : ''} ${activeField === 'email' ? 'form-input-active' : ''}`}
                      placeholder="your.email@example.com"
                      required
                    />
                    {errors.email && <p className="form-error-message">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone Field */}
                <div className="form-field-container">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone *
                      {errors.phone && <AlertCircle className="form-error-icon" />}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setActiveField('phone')}
                      onBlur={() => setActiveField('')}
                      className={`form-input ${errors.phone ? 'form-input-error' : ''} ${activeField === 'phone' ? 'form-input-active' : ''}`}
                      placeholder="share your phone number"
                      required
                    />
                    {errors.phone && <p className="form-error-message">{errors.phone}</p>}
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-field-container">
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Project Details *
                      {errors.message && <AlertCircle className="form-error-icon" />}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField('')}
                      className={`form-textarea ${errors.message ? 'form-input-error' : ''} ${activeField === 'message' ? 'form-input-active' : ''}`}
                      placeholder="Tell me about your project goals, requirements, and any specific features you have in mind..."
                      rows={6}
                      required
                    />
                    {errors.message && <p className="form-error-message">{errors.message}</p>}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="submit-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <>
                      <Loader className="submit-button-icon animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : status.type === 'success' ? (
                    <>
                      <CheckCircle className="submit-button-icon" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Send className="submit-button-icon" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Message */}
                <AnimatePresence>
                  {status.message && (
                    <motion.div 
                      className={`form-status ${
                        status.type === 'success' ? 'form-status-success' :
                        status.type === 'error' ? 'form-status-error' :
                        status.type === 'loading' ? 'form-status-info' :
                        'form-status-info'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="form-status-content">
                        {status.type === 'success' && <CheckCircle className="form-status-icon" />}
                        {status.type === 'error' && <AlertCircle className="form-status-icon" />}
                        {status.type === 'loading' && <Loader className="form-status-icon animate-spin" />}
                        <span>{status.message}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;