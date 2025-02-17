'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const contactInfo = [
  { icon: Mail, text: 'brianmiruri983@gmail.com', href: 'mailto:brianmiruri983@gmail.com' },
  { icon: Phone, text: 'Whatsapp', href: 'https://wa.me/254743807662' },
  { icon: Github, text: 'Github', href: 'https://github.com/Manguriu' },
  { icon: Linkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/in/brian-manguriu-3b0b07207/' },
];

const SuccessPopup = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div className="rounded-lg p-6 shadow-lg text-center max-w-sm w-full bg-gradient-to-br from-gray-900 to-gray-800">
          <h3 className="text-xl font-bold text-cyan-500 mb-4">Success</h3>
          <p className="text-white mb-4">{message}</p>
          <Button onClick={onClose} className="bg-cyan-500 text-white px-4 py-2 rounded">
            Close
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const clearFeedback = () => {
    setTimeout(() => {
      setError(null);
      setSuccess(null);
    }, 10000);
  };

  const sendMailHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError('All fields are required.');
      setSuccess(null);
      clearFeedback();
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          subject: `Message from ${name}`,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Email sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(data.error || 'Failed to send email.');
      }
    } catch (error) {
      setError('An error occurred while sending the email.');
    } finally {
      setLoading(false);
      clearFeedback();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">Get in Touch</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} key={index}>
                  <Card className="bg-gray-300 border-gray-700">
                    <CardContent className="flex items-center p-4 space-x-4">
                      <info.icon className="h-6 w-6 text-cyan-400" />
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-cyan-400 transition-colors"
                      >
                        {info.text}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send a Message</h2>
            <form onSubmit={sendMailHandler} className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                className="bg-gray-700 text-white border-gray-600 p-2"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                placeholder="Your Email"
                type="email"
                className="bg-gray-700 text-white border-gray-600 p-2"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                className="bg-gray-700 text-white border-gray-600 p-2"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button type="submit" variant="outline" className="w-full bg-cyan-400" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </div>

        <div className="text-center text-gray-600">
          <p>I'm always open to new opportunities and collaborations.</p>
          <p>Let's create something amazing together!</p>
        </div>
      </motion.div>

      {/* Modal Popup for Success */}
      {success && <SuccessPopup message={success} onClose={() => setSuccess(null)} />}
    </div>
  );
}
