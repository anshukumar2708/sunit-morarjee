import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Clock, Globe, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import ContactForm from '@/components/ContactForm';
import ContactInfoSection from '@/components/ContactInfoSection';

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

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form on Left */}
             <ContactForm/>

            {/* Contact Info on Right */}
            <div>
              <ContactInfoSection />
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