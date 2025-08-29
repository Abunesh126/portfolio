import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Copy,
} from "lucide-react";

// TypeScript interfaces
interface FormData {
  name: string;
  email: string;
  message: string;
  phone_no: string;
}

interface StatusState {
  type: "success" | "error" | "info" | "loading" | "";
  message: string;
}

interface ContactMethod {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  title: string;
}

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeField, setActiveField] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  // Enhanced form state with more professional fields
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    phone_no: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<StatusState>({ type: "", message: "" });

  // Handle input changes with validation
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors on input
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Advanced form validation
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    const { name, email, phone_no, message } = formData;

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
    if (!phone_no.trim()) {
      newErrors.phone_no = "Phone number is required";
    } else {
      const cleanedPhone = phone_no.replace(/[\s\-()]/g, "");
      const phoneRegex = /^(\+\d{1,15}|0\d{9,14}|\d{10,15})$/;
      if (!phoneRegex.test(cleanedPhone)) {
        newErrors.phone_no = "Please enter a valid phone number";
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

  // Copy to clipboard functionality
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus({
        type: "success",
        message: "Copied to clipboard!",
      });

      setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  // Enhanced form submission without backend
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({
        type: "error",
        message: "Please fix the errors above and try again.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "loading", message: "Preparing your message..." });

    try {
      // Simulate loading time
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone_no}

Message:
${formData.message}
      `.trim()
      );

      const mailtoLink = `mailto:abunesh2006@gmail.com?subject=${subject}&body=${body}`;

      // Open default email client
      window.location.href = mailtoLink;

      setStatus({
        type: "success",
        message:
          "Your default email client should open now. If it doesn't, please copy my email address and send manually.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        phone_no: "",
      });

      // Auto-hide success message after 8 seconds
      setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 8000);
    } catch (error) {
      console.error("Error preparing message:", error);
      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try contacting me directly via email.",
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

    const section = document.getElementById("contact");
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
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9042845355",
      link: "tel:+919042845355",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Coimbatore, Tamil Nadu",
      link: "#",
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/dharshan-kumarj/",
      title: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/j-dharshan-kumar/",
      title: "LinkedIn",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/_dharshankumarj/",
      title: "Instagram",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:abunesh2006@gmail.com",
      title: "Email",
    },
  ];

  return (
    <div
      id="contact"
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/15 via-transparent to-transparent pointer-events-none" />

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_: unknown, i: number) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss your
            project and build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-purple-600/10 border border-purple-600/20 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Feel free to reach out for collaborations or just a friendly
                hello
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method: ContactMethod, index: number) => (
                  <motion.div
                    key={method.label}
                    className="flex items-center gap-4 group hover:bg-purple-600/10 p-4 rounded-xl transition-all duration-300"
                    whileHover={{ y: -2 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400">
                        {method.label}
                      </div>
                      <div className="text-white font-medium">
                        {method.value}
                      </div>
                    </div>
                    <motion.button
                      onClick={() => copyToClipboard(method.value)}
                      className="p-2 text-gray-400 hover:text-purple-400 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Copy className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-purple-600/20">
                <h3 className="text-lg font-semibold mb-4 text-purple-300">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social: SocialLink, index: number) => (
                    <motion.a
                      key={social.title}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
                      title={social.title}
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border-2 border-transparent rounded-3xl p-8 relative overflow-hidden"
            initial={{ x: 50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl p-0.5 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-[length:400%_400%] animate-pulse">
              <div className="w-full h-full bg-gray-900 rounded-3xl" />
            </div>

            <div className="relative z-10 p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-purple-400 font-semibold flex items-center gap-2"
                  >
                    Full Name *
                    {errors.name && (
                      <AlertCircle className="w-4 h-4 text-red-400" />
                    )}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setActiveField("name")}
                    onBlur={() => setActiveField("")}
                    className={`w-full p-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 ${
                      errors.name
                        ? "border-red-400 focus:border-red-400 focus:bg-red-900/10"
                        : activeField === "name" || formData.name
                        ? "border-purple-400 focus:border-purple-400 focus:bg-purple-900/10"
                        : "border-purple-600/20 focus:border-purple-400"
                    }`}
                    placeholder="Your full name"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-purple-400 font-semibold flex items-center gap-2"
                  >
                    Email Address *
                    {errors.email && (
                      <AlertCircle className="w-4 h-4 text-red-400" />
                    )}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setActiveField("email")}
                    onBlur={() => setActiveField("")}
                    className={`w-full p-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 ${
                      errors.email
                        ? "border-red-400 focus:border-red-400 focus:bg-red-900/10"
                        : activeField === "email" || formData.email
                        ? "border-purple-400 focus:border-purple-400 focus:bg-purple-900/10"
                        : "border-purple-600/20 focus:border-purple-400"
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone_no"
                    className="text-purple-400 font-semibold flex items-center gap-2"
                  >
                    Phone Number *
                    {errors.phone_no && (
                      <AlertCircle className="w-4 h-4 text-red-400" />
                    )}
                  </label>
                  <input
                    type="tel"
                    id="phone_no"
                    name="phone_no"
                    value={formData.phone_no}
                    onChange={handleChange}
                    onFocus={() => setActiveField("phone_no")}
                    onBlur={() => setActiveField("")}
                    className={`w-full p-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 ${
                      errors.phone_no
                        ? "border-red-400 focus:border-red-400 focus:bg-red-900/10"
                        : activeField === "phone_no" || formData.phone_no
                        ? "border-purple-400 focus:border-purple-400 focus:bg-purple-900/10"
                        : "border-purple-600/20 focus:border-purple-400"
                    }`}
                    placeholder="+91 9042845355"
                    required
                  />
                  {errors.phone_no && (
                    <p className="text-red-400 text-sm">{errors.phone_no}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-purple-400 font-semibold flex items-center gap-2"
                  >
                    Your Message *
                    {errors.message && (
                      <AlertCircle className="w-4 h-4 text-red-400" />
                    )}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField("")}
                    className={`w-full p-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 resize-vertical min-h-[150px] ${
                      errors.message
                        ? "border-red-400 focus:border-red-400 focus:bg-red-900/10"
                        : activeField === "message" || formData.message
                        ? "border-purple-400 focus:border-purple-400 focus:bg-purple-900/10"
                        : "border-purple-600/20 focus:border-purple-400"
                    }`}
                    placeholder="Tell me about your project ideas, requirements, and goals..."
                    rows={6}
                    required
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className={`w-full p-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                    loading
                      ? "bg-gray-600 cursor-not-allowed"
                      : status.type === "success"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-purple-600 hover:bg-purple-700 hover:scale-105 active:scale-95"
                  }`}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Preparing Message...</span>
                    </>
                  ) : status.type === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Prepared!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Message */}
                <AnimatePresence>
                  {status.message && (
                    <motion.div
                      className={`p-4 rounded-xl text-center transition-all duration-300 ${
                        status.type === "success"
                          ? "bg-green-600/20 border border-green-400/30 text-green-300"
                          : status.type === "error"
                          ? "bg-red-600/20 border border-red-400/30 text-red-300"
                          : "bg-blue-600/20 border border-blue-400/30 text-blue-300"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {status.type === "success" && (
                          <CheckCircle className="w-5 h-5" />
                        )}
                        {status.type === "error" && (
                          <AlertCircle className="w-5 h-5" />
                        )}
                        {status.type === "loading" && (
                          <Loader className="w-5 h-5 animate-spin" />
                        )}
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
    </div>
  );
};

export default Contact;
