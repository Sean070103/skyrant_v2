'use client';

import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Contact form error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="brutalist-section px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mb-12 sm:mb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <h2 className="brutalist-text text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-5">
              LET&apos;S TALK
            </h2>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-primary mb-5 sm:mb-6">
              Have a complex project? Need a technical partner? Let&apos;s discuss how we can build something remarkable together.
            </p>
            <div className="space-y-4 sm:space-y-5">
              <div>
                <p className="brutalist-text text-xs mb-1">Email</p>
                <a href="mailto:skyranttt@gmail.com" className="text-primary hover:underline text-xs">
                  skyranttt@gmail.com
                </a>
              </div>
              <div>
                <p className="brutalist-text text-xs mb-1">Connect</p>
                <div className="flex gap-3 sm:gap-4">
                  <a href="https://www.linkedin.com/in/skyrant-tech-a77635400/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs">LinkedIn</a>
                  <a href="https://web.facebook.com/search/top?q=skyrant%20tech" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs">Facebook</a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {submitted && (
              <div className="brutalist-border border-2 p-3 bg-primary/10">
                <p className="text-xs text-primary">Message sent! We&apos;ll be in touch soon.</p>
              </div>
            )}
            {error && (
              <div className="brutalist-border border-2 p-3 bg-red-900/20">
                <p className="text-xs text-red-400">{error}</p>
              </div>
            )}
            <div className="brutalist-border border-2 p-1">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-background px-3 py-2 focus:outline-none text-xs"
              />
            </div>
            <div className="brutalist-border border-2 p-1">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-background px-3 py-2 focus:outline-none text-xs"
              />
            </div>
            <div className="brutalist-border border-2 p-1">
              <textarea
                name="message"
                placeholder="Project Details"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full bg-background px-3 py-2 focus:outline-none text-xs resize-none"
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="brutalist-border border-2 bg-primary text-background px-6 py-3 text-xs font-black w-full hover:bg-transparent hover:text-primary transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'SENDING...' : 'SEND'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
