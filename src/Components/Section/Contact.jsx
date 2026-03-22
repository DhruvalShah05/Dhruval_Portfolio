import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const Service_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const Template_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const User_ID = import.meta.env.VITE_EMAILJS_USER_ID;

  const verifyEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!verifyEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const full_message = `Name: ${formData.name}
Email: ${formData.email}
Time: ${new Date().toLocaleString()}

Message:
${formData.message}`;

    emailjs
      .send(
        Service_ID,
        Template_ID,
        {
          from_name: formData.name,
          full_message: full_message,
        },
        User_ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Message failed to send. Try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:w-full"
    >
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl p-6 sm:p-8 rounded-xl border border-white/10 bg-gray-900/50 hover:bg-gray-900/70 transition-transform duration-300 hover:-translate-y-1 shadow-md">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Contact Me
        </h2>
        <form className="space-y-6 mb-3" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              name="from_name"
              required
              className="w-full px-4 py-3 border border-gray-700 rounded bg-transparent text-gray-300 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-700 rounded bg-transparent text-gray-300 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              name="message"
              required
              className="w-full px-4 py-3 border border-gray-700 rounded bg-transparent text-gray-300 focus:outline-none focus:border-blue-500 h-32 sm:h-40 resize-none text-sm sm:text-base"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;