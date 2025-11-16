import React from "react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, MessageSquare, Send, Twitter, Youtube, Instagram } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:hello@metaforgeverse.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
              <MessageSquare className="h-4 w-4 text-purple-400" />
              <span className="text-purple-300 text-sm">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-slate-400">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl text-white mb-6">Send us a message</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Input 
                      name="name"
                      id="contact-name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      name="email"
                      id="contact-email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <Textarea 
                      name="message"
                      id="contact-message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full group">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:hello@metaforgeverse.com" className="flex items-center gap-3 text-slate-400 hover:text-purple-400 transition-colors">
                    <div className="bg-purple-500/10 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-purple-400" />
                    </div>
                    <span>hello@metaforgeverse.com</span>
                  </a>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl text-white mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-slate-900 hover:bg-purple-500/20 p-3 rounded-lg transition-colors group">
                    <Twitter className="h-5 w-5 text-slate-400 group-hover:text-purple-400" />
                  </a>
                  <a href="https://t.me/MetaForgeVerseBot" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-purple-500/20 p-3 rounded-lg transition-colors group">
                    <Send className="h-5 w-5 text-slate-400 group-hover:text-purple-400" />
                  </a>
                  <a href="#" className="bg-slate-900 hover:bg-purple-500/20 p-3 rounded-lg transition-colors group">
                    <Youtube className="h-5 w-5 text-slate-400 group-hover:text-purple-400" />
                  </a>
                  <a href="#" className="bg-slate-900 hover:bg-purple-500/20 p-3 rounded-lg transition-colors group">
                    <svg className="h-5 w-5 text-slate-400 group-hover:text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-slate-900 hover:bg-purple-500/20 p-3 rounded-lg transition-colors group">
                    <Instagram className="h-5 w-5 text-slate-400 group-hover:text-purple-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500">
            © 2024 MetaForgeVerse. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
