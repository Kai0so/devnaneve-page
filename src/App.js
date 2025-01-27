import './App.css';
import React, { useState } from "react";
import emailjs from 'emailjs-com';
const progress = require("./assets/102030.jpg");

const App = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_wbz93wr';
    const templateId = 'template_gkvzal1';
    const userId = 'Oosd9odogR4OIZue7';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Message sent:', response);
        alert('Message sent successfully!');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        alert('Error sending message. Please try again.');
      });
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">AI WhatsApp Bot</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-indigo-600">How it Works</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-indigo-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-extrabold">Transform WhatsApp into Your Business Assistant</h2>
            <p className="mt-4 text-lg">Boost your productivity with our AI-powered chatbot tailored for WhatsApp. Respond to customers 24/7 with ease!</p>
            <a href='#contact'>
              <button className="mt-6 px-6 py-3 bg-white text-indigo-600 rounded-lg shadow-md hover:bg-gray-100">Get Started</button>
            </a>
          </div>
        </section>

        <section id="features" className="py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800">Why Choose Our Bot?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h4 className="text-xl font-bold text-indigo-600">24/7 Availability</h4>
                <p className="mt-2 text-gray-600">Never miss a customer query. Our bot works round the clock to keep your clients satisfied.</p>
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h4 className="text-xl font-bold text-indigo-600">AI-Powered Responses</h4>
                <p className="mt-2 text-gray-600">Provide accurate and helpful responses, tailored to your business needs.</p>
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h4 className="text-xl font-bold text-indigo-600">Easy Integration</h4>
                <p className="mt-2 text-gray-600">Integrate with your existing systems and get started in no time.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full mx-auto"><img src={progress} alt="progress..." className="w-full h-full object-cover rounded-full" /></div>
                <p className="mt-2 text-gray-600 text-sm font-bold">In progress...</p>
                <h4 className="mt-4 text-xl font-bold text-gray-800">Sign Up</h4>
                <p className="mt-2 text-gray-600">Create an account and configure your bot with simple steps.</p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full mx-auto"><img src={progress} alt="progress..." className="w-full h-full object-cover rounded-full" /></div>
                <p className="mt-2 text-gray-600 text-sm font-bold">In progress...</p>
                <h4 className="mt-4 text-xl font-bold text-gray-800">Integrate</h4>
                <p className="mt-2 text-gray-600">Connect the bot to your WhatsApp business account effortlessly.</p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full mx-auto"><img src={progress} alt="progress..." className="w-full h-full object-cover rounded-full" /></div>
                <p className="mt-2 text-gray-600 text-sm font-bold">In progress...</p>
                <h4 className="mt-4 text-xl font-bold text-gray-800">Go Live</h4>
                <p className="mt-2 text-gray-600">Launch the bot and start engaging with your customers immediately.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800">Get in Touch</h3>
            <p className="mt-4 text-gray-600">Have questions? We're here to help. Contact us today!</p>
            <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg mb-4" />
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg mb-4" />
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required placeholder="Your Phone" className="w-full p-3 border border-gray-300 rounded-lg mb-4" />
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Your Message" className="w-full h-28 p-3 border border-gray-300 rounded-lg mb-4 resize-none"></textarea>
              <button type="submit" className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 AI WhatsApp Bot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
