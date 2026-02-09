import { ArrowDown, Play, Star, Award, Film, Sparkles, Heart, Users, Trophy, TrendingUp, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import ContactInfoSection from '@/components/ContactInfoSection';
import heroPortrait from '@/assets/hero-portrait1.jpg';
import redCarpet from '@/assets/red-carpet.jpg';

const Index = () => {
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
  const { toast } = useToast();

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

  const stats = [
    { icon: Film, number: '25+', label: 'Films' },
    { icon: Award, number: '12', label: 'Awards' },
    { icon: Star, number: '8.9', label: 'IMDB Rating' },
  ];

  const recentWork = [
    {
      title: 'Midnight Dreams',
      year: '2023',
      role: 'Lead Role',
      description: 'Academy Award nominated performance'
    },
    {
      title: 'Echoes of Tomorrow',
      year: '2022',
      role: 'Supporting Role',
      description: 'BAFTA winning performance'
    }
  ];

  const awards = [
    {
      title: 'Filmfare Best Actress',
      year: '2023',
      film: 'Midnight Dreams',
      icon: Trophy
    },
    {
      title: 'National Film Award',
      year: '2022',
      film: 'Echoes of Tomorrow',
      icon: Trophy
    },
    {
      title: 'IIFA Best Actress',
      year: '2021',
      film: 'Bollywood Dream',
      icon: Star
    },
    {
      title: 'Screen Awards Icon Award',
      year: '2020',
      film: 'Silver Screen Stardom',
      icon: Sparkles
    }
  ];

  const testimonials = [
    {
      quote: "Working with SUNIT MORARJEE was an absolute delight. Her dedication and talent bring every character to life with remarkable authenticity.",
      author: "Renowned Bollywood Director",
      role: "Film Director"
    },
    {
      quote: "She is not just an actress, but an artist who understands the depth of every emotion her character needs to convey.",
      author: "Award-Winning Producer",
      role: "Film Producer"
    },
    {
      quote: "Her performances have set new standards in Indian cinema. A true gem of Bollywood.",
      author: "Leading Film Critic",
      role: "Entertainment Journalist"
    }
  ];

  const filmHighlights = [
    {
      title: 'Midnight Dreams',
      year: '2023',
      genre: 'Drama',
      description: 'A compelling narrative about ambition and sacrifice'
    },
    {
      title: 'Echoes of Tomorrow',
      year: '2022',
      genre: 'Thriller',
      description: 'Suspenseful journey through unexpected twists'
    },
    {
      title: 'Bollywood Dream',
      year: '2021',
      genre: 'Romance',
      description: 'A love story that transcends all boundaries'
    },
    {
      title: 'Silver Screen',
      year: '2020',
      genre: 'Drama',
      description: 'Powerful portrayal of resilience and determination'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroPortrait}
            alt="SUNIT MORARJEE"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
          <div className="max-w-3xl cinematic-enter">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-white">SUNIT</span>
              <br />
              <span className="text-gradient animate-float">MORARJEE</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Award-winning actress bringing authentic stories to life through the power of cinema.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-golden hover:bg-gradient-golden hover-glow text-lg px-8 py-4"
                asChild
              >
                <Link to="/filmography">
                  <Play className="h-5 w-5 mr-2" />
                  Watch My Work
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/60" />
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-20 bg-background/95">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 stagger-children">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Recent Acclaimed Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pushing the boundaries of storytelling through powerful performances
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 stagger-children">
            {recentWork.map((work, index) => (
              <Card key={index} className="bg-gradient-card border-0 hover-lift overflow-hidden">
                <div className="h-48 bg-gradient-purple relative">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{work.title}</h3>
                    <p className="text-white/80">{work.year} • {work.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-purple hover:bg-gradient-purple hover-glow"
              asChild
            >
              <Link to="/filmography">
                View Complete Filmography
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={redCarpet}
            alt="Red carpet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Create Something
            <span className="text-gradient block">Extraordinary</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Available for film, television, and theater projects worldwide.
          </p>
          <Button
            size="lg"
            className="bg-gradient-golden hover:bg-gradient-golden hover-glow text-lg px-8 py-4"
            asChild
          >
            <Link to="/contact">
              Get In Touch
            </Link>
          </Button>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20 bg-gradient-to-b from-background to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 stagger-children">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              AWARDS & RECOGNITION
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebrated achievements and prestigious accolades in Bollywood cinema
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <Card key={index} className="bg-gradient-card border-0 hover-lift group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-bold text-primary">{award.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{award.title}</h3>
                    <p className="text-sm text-muted-foreground">{award.film}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Film Highlights Section */}
      <section className="py-20 bg-background/95">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 stagger-children">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              FILMOGRAPHY HIGHLIGHTS
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcase of diverse roles and memorable performances
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filmHighlights.map((film, index) => (
              <Card key={index} className="bg-gradient-card border-0 hover-lift overflow-hidden group">
                <div className="h-40 bg-gradient-purple relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent group-hover:from-primary/40 transition-all" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary text-black text-xs font-bold rounded-full">{film.year}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">{film.genre}</p>
                  <h3 className="text-lg font-bold text-white mb-3">{film.title}</h3>
                  <p className="text-sm text-muted-foreground">{film.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-purple hover:bg-gradient-purple hover-glow"
              asChild
            >
              <Link to="/filmography">
                Explore Full Filmography
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 stagger-children">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              WHAT THEY SAY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Words from industry leaders who've collaborated with SUNIT MORARJEE
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Deep Dive */}
      <section className="py-20 bg-background/95">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 stagger-children">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              BY THE NUMBERS
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A decade of excellence in Indian cinema
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-card border-0 hover-lift text-center">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <Film className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">25+</div>
                <div className="text-muted-foreground">Bollywood Films</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 hover-lift text-center">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">12+</div>
                <div className="text-muted-foreground">National Awards</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 hover-lift text-center">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">Million+</div>
                <div className="text-muted-foreground">Fans Worldwide</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 hover-lift text-center">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                <div className="text-muted-foreground">Countries Released</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-gradient-to-b from-background to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 stagger-children">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              GALLERY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Behind-the-scenes moments and iconic shots from film sets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-2xl shadow-dramatic hover-lift cursor-pointer">
                <div className="h-64 bg-gradient-purple relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/40 group-hover:from-primary/40 group-hover:to-primary/20 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white font-bold text-sm">Gallery Item {item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-golden hover:bg-gradient-golden hover-glow"
              asChild
            >
              <Link to="/gallery">
                View Complete Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact & Inquiry Section */}
      <section className="py-20 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              CONNECT WITH ME
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Get in touch for collaborations and inquiries.
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
        </div>
      </section>
    </div>
  );
};

export default Index;
