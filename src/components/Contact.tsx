// Contact.tsx
import React, { useState, useRef } from "react";

const Contact: React.FC = () => {
  const initialForm = { name: "", email: "", message: "" };
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "success" | "pending">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("pending");
    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
      formRef.current?.reset();
    }, 1200);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 py-16 px-4">
      <div className="max-w-4xl w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl rounded-xl p-8 border border-white/20 dark:border-gray-700/50">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Feel free to reach out to me through any of the following methods:</p>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:abuneshfire@gmail.com" className="text-blue-600 dark:text-blue-400">abuneshfire@gmail.com</a></li>
              <li>Phone: <a href="tel:+919042845355" className="text-blue-600 dark:text-blue-400">+91 9042845355</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/abunesh-r-p-803677278/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">LinkedIn Profile</a></li>
            </ul>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {status === "pending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
