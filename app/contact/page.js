"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    venue: '',
    budget: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const inputVariants = {
    focused: { scale: 1.02, transition: { duration: 0.2 } },
    unfocused: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 bg-stone-100">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl mb-6">Let's Connect</h1>
          <p className="text-xl font-sans font-light text-gray-500">
            Begin your journey to extraordinary floral design
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl mb-8">Tell Us About Your Vision</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={inputVariants}
                animate={focusedField === 'name' ? 'focused' : 'unfocused'}
              >
                <label className="block text-sm font-sans uppercase tracking-wider mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-rose-400 transition-colors duration-300 outline-none"
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  variants={inputVariants}
                  animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                >
                  <label className="block text-sm font-sans uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-rose-400 transition-colors duration-300 outline-none"
                  />
                </motion.div>

                <motion.div
                  variants={inputVariants}
                  animate={focusedField === 'phone' ? 'focused' : 'unfocused'}
                >
                  <label className="block text-sm font-sans uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-rose-400 transition-colors duration-300 outline-none"
                  />
                </motion.div>
              </div>

              <motion.div
                variants={inputVariants}
                animate={focusedField === 'eventType' ? 'focused' : 'unfocused'}
              >
                <label className="block text-sm font-sans uppercase tracking-wider mb-2">
                  Event Type *
                </label>
                <select
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('eventType')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-rose-400 transition-colors duration-300 outline-none"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="private">Private Party</option>
                  <option value="installation">Installation</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  variants={inputVariants}
                  animate={focusedField === 'eventDate' ? 'focused' : 'unfocused'}
                >
                  <label className="block text-sm font-sans uppercase tracking-wider mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('eventDate')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-rose-400 transition-colors duration-300 outline-none"
                  />
                </motion.div>

                <motion.div
                  variants={inputVariants}
                  animate={focusedField === 'venue' ? 'focused' : 'unfocused'}
                >
                  <label className="block text-sm font-sans uppercase tracking-wider mb-2">
                    Venue
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('venue')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-rose-400 transition-colors duration-300 outline-none"
                  />
                </motion.div>
              </div>

              <motion.div
                variants={inputVariants}
                animate={focusedField === 'budget' ? 'focused' : 'unfocused'}
              >
                <label className="block text-sm font-sans uppercase tracking-wider mb-2">
                  Estimated Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('budget')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-rose-400 transition-colors duration-300 outline-none"
                >
                  <option value="">Select budget range</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-25000">$10,000 - $25,000</option>
                  <option value="25000-50000">$25,000 - $50,000</option>
                  <option value="50000+">$50,000+</option>
                </select>
              </motion.div>

              <motion.div
                variants={inputVariants}
                animate={focusedField === 'message' ? 'focused' : 'unfocused'}
              >
                <label className="block text-sm font-sans uppercase tracking-wider mb-2">
                  Tell Us More
                </label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-rose-400 transition-colors duration-300 outline-none resize-none"
                  placeholder="Share your vision, inspiration, or any special requests..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-rose-400 text-white font-sans text-sm font-medium tracking-wider uppercase rounded-none hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl mb-6">Get in Touch</h3>
              <div className="space-y-4 font-sans font-light">
                <p>
                  <span className="text-rose-400">Email:</span><br />
                  hello@sevenstems.com
                </p>
                <p>
                  <span className="text-rose-400">Phone:</span><br />
                  (555) 123-4567
                </p>
                <p>
                  <span className="text-rose-400">Studio:</span><br />
                  123 Floral Avenue<br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6">Studio Hours</h3>
              <div className="space-y-2 font-sans font-light">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: By appointment only</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6">Follow Our Journey</h3>
              <div className="flex space-x-6">
                <motion.a
                  href="#"
                  className="text-2xl hover:text-rose-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Instagram
                </motion.a>
                <motion.a
                  href="#"
                  className="text-2xl hover:text-rose-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Pinterest
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-96 bg-stone-100 relative">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center">
            <p className="text-4xl text-rose-400 mb-4">Visit Our Studio</p>
            <p className="font-sans font-light">Map integration will be added here</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}