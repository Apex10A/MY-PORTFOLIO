import React, { useState } from 'react';
import Navigation from '../Navigation';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
  
    try {
      const response = await fetch('https://formspree.io/f/xjkkdorp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Let's <span className="text-yellow-400">Connect</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:pafolabi740@gmail.com" className="hover:text-yellow-400">
                      pafolabi740@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a href="tel:+1234567890" className="hover:text-yellow-400">
                      +234 816 086 2773
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p>Ondo, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Let's connect</h2>
              <p className="text-gray-300">
                Follow me on social media to stay updated with my latest projects and insights.
              </p>
              {/* Add your social media links here */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-yellow-400"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                <Send className="h-5 w-5" />
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;