import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@sunitmorarjee.com',
      description: 'For general inquiries and collaborations'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Business inquiries only'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Los Angeles, CA',
      description: 'Available for projects worldwide'
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', url: '#', handle: '@sunitmorarjee' },
    { icon: Twitter, name: 'Twitter', url: '#', handle: '@sunit morarjee' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', handle: 'SUNIT MORARJEE' }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 cinematic-enter">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's discuss your next project or collaboration. I'm always excited to hear about new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-0 shadow-dramatic">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border focus:border-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border focus:border-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border focus:border-primary resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-golden hover:bg-gradient-golden hover-glow"
                    size="lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6 stagger-children">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card border-0 hover-glow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-golden rounded-lg">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{info.title}</h3>
                        <p className="text-primary font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Follow My Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <social.icon className="h-5 w-5 text-primary group-hover:text-primary-glow transition-colors" />
                    <div>
                      <p className="font-medium">{social.name}</p>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="bg-gradient-purple border-0">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2 text-white">Professional Representation</h3>
                <p className="text-white/80 text-sm mb-3">
                  For casting inquiries and business opportunities, please contact my agent.
                </p>
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  Agent Contact Info
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;