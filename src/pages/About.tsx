import { useState } from 'react';
import { Award, Calendar, MapPin, Heart, Send, Sparkles, Users, Globe, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import ContactInfoSection from '@/components/ContactInfoSection';
import behindScenesImage from '@/assets/behind-scenes.jpg';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

  const achievements = [
    { icon: Award, title: 'Filmfare Best Actress', description: 'Best Actress Award (2023)' },
    { icon: Calendar, title: '15+ Years Experience', description: 'Professional acting since 2008' },
    { icon: Globe, title: 'Global Recognition', description: 'Films released in 50+ countries' },
    { icon: Heart, title: 'Charity Work', description: 'Ambassador for Children\'s Arts Foundation' },
  ];

  const skills = [
    'Method Acting', 'Shakespearean Theatre', 'Accent Coaching', 'Stage Combat',
    'Voice Acting', 'Improvisation', 'Classical Ballet', 'Horse Riding'
  ];

  const education = [
    {
      icon: BookOpen,
      institution: 'FTII Pune',
      program: 'Advanced Acting & Performance',
      year: '2008',
      details: 'Post-graduation in advanced acting techniques'
    },
    {
      icon: BookOpen,
      institution: 'National School of Drama',
      program: 'Classical Theatre Studies',
      year: '2006',
      details: 'Specialized in classical and contemporary theatre'
    }
  ];

  const filmIndustryStats = [
    { label: 'Lead Roles', value: '18+' },
    { label: 'Awards Won', value: '12+' },
    { label: 'Blockbuster Films', value: '15+' },
    { label: 'Avg Rating', value: '8.6' }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 cinematic-enter">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            ABOUT SUNIT MORARJEE
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate performer dedicated to bringing authentic stories to life through the art of cinema.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Biography */}
          <div className="space-y-6 stagger-children">
            <h2 className="text-3xl font-bold mb-6">My Journey in Bollywood</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Born and raised in Mumbai, I discovered my passion for acting during high school theater productions. 
              After graduating from the prestigious National School of Drama and FTII Pune, I began my career on stage before transitioning to Bollywood cinema.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My breakthrough role came in the critically acclaimed drama "Whispers in the Rain," which premiered at international film festivals and earned me 
              national recognition. Since then, I've had the privilege of working with renowned Bollywood directors and talented casts across 
              various genres, from intimate character studies to epic blockbusters.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not on set, I'm passionate about mentoring young actors and supporting arts education in underserved communities. 
              I believe in the transformative power of storytelling and its ability to create empathy and understanding across cultures.
            </p>
          </div>

          {/* Image */}
          <div className="relative hover-lift">
            <img
              src={behindScenesImage}
              alt="Behind the scenes"
              className="rounded-2xl shadow-dramatic w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-golden opacity-20 rounded-2xl"></div>
          </div>
        </div>

        {/* Film Industry Stats */}
        <section className="py-20 bg-background/95 rounded-2xl -mx-6 px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">Bollywood Career Highlights</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filmIndustryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Recognition & Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-card border-0 hover-glow hover-lift">
                <CardContent className="p-6 text-center">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Professional Skills & Training</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-gradient-purple hover-glow cursor-pointer transition-all hover:scale-110"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Education & Training</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="bg-gradient-card border-0 hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary rounded-lg">
                      <edu.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{edu.institution}</h3>
                      <p className="text-primary font-semibold mb-1">{edu.program}</p>
                      <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                      <p className="text-muted-foreground">{edu.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-20 bg-gradient-to-r from-purple-500/10 to-primary/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">My Philosophy as an Actor</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            I believe that great acting is not about pretending or becoming someone else; it's about understanding the depths of human emotion and channeling that authenticity into every character I portray. Every role I take is an opportunity to tell stories that matter—stories that can touch hearts, challenge minds, and inspire change.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            In the realm of Bollywood cinema, I'm committed to bringing fresh perspectives and meaningful content to audiences. Whether it's a blockbuster entertainer or a critically acclaimed drama, I approach each project with the same dedication and passion—ensuring that every performance leaves a lasting impact.
          </p>
        </section>

        {/* Contact Section for Inquiries - Now 2 Column Layout */}
        <section className="py-20 bg-gradient-to-b from-black/50 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                LET'S CONNECT
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Interested in collaborations? Reach out with your inquiry or message.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Form on Left */}
              <div>
                <Card className="bg-gradient-card border-0 shadow-dramatic h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Get In Touch</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">Send your inquiry or collaboration idea</p>
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
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-background/50 border-border focus:border-primary"
                          placeholder="Your full name"
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
                          className="bg-background/50 border-border focus:border-primary"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="block text-sm font-medium">
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

                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="bg-background/50 border-border focus:border-primary resize-none"
                          placeholder="Tell me about your inquiry..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-golden hover:bg-gradient-golden hover-glow text-lg py-6"
                        size="lg"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info on Right */}
              <div>
                <ContactInfoSection />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;