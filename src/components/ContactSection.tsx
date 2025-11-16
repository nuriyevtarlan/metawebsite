import React from "react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, MessageSquare, Send, Twitter, Youtube, Instagram, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY", // Заменим после регистрации
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New contact from ${formData.name} - MetaForgeVerse`,
          from_name: "MetaForgeVerse Website"
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full group" disabled={isSubmitting}>
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    {isSubmitting ? "Sending..." : "Send Message"}
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
                  <a 
                    href="https://x.com/metaforgeverse" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-slate-900 hover:bg-purple-500/20 p-3 rounded-lg transition-colors group"
                  >
                    <Twitter className="h-5 w-5 text-slate-400 group-hover:text-purple-400" />
                  </a>
                  <a 
                    href="https://t.me/MetaForgeVerseBot" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-slate-900 hover:bg-purple-500/20 p-3 rounded-lg transition-colors group"
                  >
                    <Send className="h-5 w-5 text-slate-400 group-hover:text-purple-400" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-slate-900 hover:bg-purple-500/20 p-3 rounded-lg transition-colors group cursor-not-allowed opacity-50"
                    title="Coming soon"
                  >
                    <Youtube className="h-5 w-5 text-slate-400 group-hover:text-purple-400" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-slate-900 hover:bg-purple-500/20 p-3 rounded-lg transition-colors group cursor-not-allowed opacity-50"
                    title="Coming soon"
                  >
                    <svg className="h-5 w-5 text-slate-400 group-hover:text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/metaforgeverse/?utm_source=ig_web_button_share_sheet" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-slate-900 hover:bg-purple-500/20 p-3 rounded-lg transition-colors group"
                  >
                    <Instagram className="h-5 w-5 text-slate-400 group-hover:text-purple-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-md w-full mx-auto text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-2xl text-white mb-2">Message Sent!</h3>
              <p className="text-slate-400">
                Your message has been sent successfully. We'll review it and get back to you as soon as possible. Thank you for contacting MetaForgeVerse!
              </p>
            </div>
            <Button 
              onClick={() => setShowSuccess(false)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Close
            </Button>
          </div>
        </div>
      )}

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
