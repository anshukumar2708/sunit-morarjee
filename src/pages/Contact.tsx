import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Clock, Globe, MessageSquare } from 'lucide-react';
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
      value: 'Mumbai India',
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

        {/* Response Time & Info Section */}
        <section className="py-20 bg-background/95 rounded-2xl -mx-6 px-6 mt-20 mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-0 hover-lift text-center">
              <CardContent className="p-8">
                <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Response Time</h3>
                <p className="text-muted-foreground">
                  We aim to respond to all inquiries within 48 hours during business days.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 hover-lift text-center">
              <CardContent className="p-8">
                <Globe className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Worldwide Availability</h3>
                <p className="text-muted-foreground">
                  Open to international projects and collaborations across all regions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 hover-lift text-center">
              <CardContent className="p-8">
                <MessageSquare className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Multiple Channels</h3>
                <p className="text-muted-foreground">
                  Reach out via email, phone, social media, or contact form—we're here to help!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">FREQUENTLY ASKED QUESTIONS</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">How can I book for a project?</h3>
                <p className="text-muted-foreground text-sm">
                  Please submit a detailed project inquiry through our contact form or reach out to our representation team. We review all casting opportunities carefully.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">What's your commission structure?</h3>
                <p className="text-muted-foreground text-sm">
                  Our agency handles all business negotiations. Please contact our office directly for detailed information about rates and availability.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Can I get high-resolution photos?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! Visit our Gallery page for photo licensing requests, or contact media@sunitmorarjee.com for professional media kits.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">How can I collaborate?</h3>
                <p className="text-muted-foreground text-sm">
                  We love collaborations! Whether it's brands, charities, or creative projects, please share your ideas through our contact form.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Are interviews available?</h3>
                <p className="text-muted-foreground text-sm">
                  Media and interview requests are handled separately. Please specify your publication and details when contacting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">What about fan mail?</h3>
                <p className="text-muted-foreground text-sm">
                  We love hearing from fans! Send your messages via mail to our office address or through our social media channels.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;