'use client';

import { ArrowDown, Play, Star, Award, Film, Sparkles, Heart, Users, Trophy, TrendingUp, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import heroPortrait from '@/assets/hero-portrait1.jpg';
import redCarpet from '@/assets/red-carpet.jpg';
import ContactForm from '@/components/ContactForm';
import ContactInfoSection from '@/components/ContactInfoSection';

const HomePage = () => {

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

  const stats_section = [
    { value: '25+', label: 'Blockbuster Films' },
    { value: '12+', label: 'Major Awards' },
    { value: '50+', label: 'Countries Reached' },
    { value: '8.9', label: 'Average Rating' },
  ];

  const gallery_preview = [
    { id: 1, title: 'Film Premiere' },
    { id: 2, title: 'Award Show' },
    { id: 3, title: 'Behind the Scenes' },
    { id: 4, title: 'Editorial' },
    { id: 5, title: 'Red Carpet' },
    { id: 6, title: 'Portrait' },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroPortrait}
            alt="SUNIT MORARJEE"
            fill
            className="w-full h-full object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center lg:text-left md:pt-20">
          <div className="max-w-3xl cinematic-enter">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-gradient animate-float">SUNIT MORARJEE</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Award-winning actress bringing authentic stories to life through the power of cinema.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-golden hover:bg-gradient-golden hover-glow text-lg px-8 py-4"
              >
                <Link href="/filmography" className="flex items-center">
                  <Play className="h-5 w-5 mr-2" />
                  Watch My Work
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                <Link href="/about">Learn More</Link>
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
            >
              <Link href="/filmography">
                View Complete Filmography
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={redCarpet}
            alt="Red carpet"
            fill
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
          >
            <Link href="/contact">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {filmHighlights.map((film, index) => (
              <Card key={index} className="bg-gradient-card border-0 hover-lift group cursor-pointer overflow-hidden">
                <div className="h-40 bg-gradient-purple relative flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-12 w-12 text-white/60 group-hover:text-white group-hover:scale-125 transition-all" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{film.title}</h3>
                    <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">{film.year}</span>
                  </div>
                  <p className="text-sm text-primary mb-2">{film.genre}</p>
                  <p className="text-sm text-muted-foreground">{film.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 stagger-children">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              WHAT INDUSTRY LEADERS SAY
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Words from collaborators and industry professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 hover-lift">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg text-white/90 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers Section */}
      <section className="py-20 bg-background/95">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              BY THE NUMBERS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {stats_section.map((stat, index) => (
              <div key={index} className="text-center hover-lift p-8 rounded-xl bg-gradient-card border border-border">
                <div className="text-5xl font-bold text-gradient mb-3">{stat.value}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              GALLERY PREVIEW
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visual moments from film sets, events, and photoshoots
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {gallery_preview.map((item) => (
              <div
                key={item.id}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer hover-lift bg-gradient-purple"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Star className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-125 transition-transform" />
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-golden hover:bg-gradient-golden hover-glow"
            >
              <Link href="/gallery">
                View Full Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Inquiry Section */}
      <section className="py-16 bg-gradient-to-b from-background to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Quick Inquiry
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project opportunity? Let's talk about it.
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
                    <ContactForm/>
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
  );
};

export default HomePage;
