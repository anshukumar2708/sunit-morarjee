import React from 'react'
import { useState } from 'react';
import {  Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
   const [formData, setFormData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  }>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
             <div>
              <Card className="bg-gradient-card border-0 shadow-dramatic h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Quick Inquiry</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">Tell me about your project</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="bg-background/50 border-border focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="bg-background/50 border-border focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium">
                        Project Type / Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Film, Web Series, Commercial, Event, etc."
                        className="bg-background/50 border-border focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Project Details
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project, requirements, and timeline..."
                        className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-golden hover:bg-gradient-golden hover-glow text-lg py-6"
                      size="lg"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
  )
}

export default ContactForm