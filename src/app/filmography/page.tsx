'use client';

import { useState } from 'react';
import { Calendar, Star, Play, Award, Send, TrendingUp, Users, Globe, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import ContactInfoSection from '@/components/ContactInfoSection';

const Filmography = () => {

  const filmStats = [
    { icon: TrendingUp, label: 'Blockbuster Hits', value: '15+' },
    { icon: DollarSign, label: 'Films Crossed Crore', value: '18+' },
    { icon: Globe, label: 'International Releases', value: '20+' },
    { icon: Award, label: 'Award-winning Performances', value: '12+' }
  ];

  const topCollaborators = [
    { name: 'Sanjay Leela Bhansali', films: 3, specialty: 'Epic Drama' },
    { name: 'Rajkumar Hirani', films: 2, specialty: 'Comedy Drama' },
    { name: 'Anurag Kashyap', films: 2, specialty: 'Thriller' }
  ];

  const films = [
    {
      title: 'Midnight Dreams',
      year: '2023',
      role: 'Sarah Mitchell',
      genre: 'Drama',
      director: 'James Cameron',
      rating: '8.9',
      awards: ['Academy Award Nominee - Best Actress', 'Golden Globe Winner'],
      description: 'A haunting tale of love and loss set against the backdrop of 1940s New York.',
      status: 'released'
    },
    {
      title: 'Echoes of Tomorrow',
      year: '2022',
      role: 'Dr. Elena Vasquez',
      genre: 'Sci-Fi Thriller',
      director: 'Christopher Nolan',
      rating: '9.1',
      awards: ['BAFTA Winner - Best Supporting Actress'],
      description: 'A mind-bending journey through time and parallel dimensions.',
      status: 'released'
    },
    {
      title: 'The Last Symphony',
      year: '2021',
      role: 'Isabella Romano',
      genre: 'Musical Drama',
      director: 'Damien Chazelle',
      rating: '8.7',
      awards: ['Screen Actors Guild Award Winner'],
      description: 'The inspiring story of a virtuoso pianist overcoming personal tragedy.',
      status: 'released'
    },
    {
      title: 'Crimson Tide Rising',
      year: '2024',
      role: 'Agent Victoria Cross',
      genre: 'Action/Thriller',
      director: 'Patty Jenkins',
      rating: 'TBD',
      awards: [],
      description: 'An elite operative must stop a global conspiracy before it\'s too late.',
      status: 'upcoming'
    },
    {
      title: 'Whispers in the Rain',
      year: '2019',
      role: 'Maya Chen',
      genre: 'Indie Drama',
      director: 'Ari Aster',
      rating: '8.4',
      awards: ['Sundance Film Festival - Best Actress'],
      description: 'My breakthrough role in this intimate story of family and forgiveness.',
      status: 'released'
    },
    {
      title: 'Galactic Horizons',
      year: '2024',
      role: 'Commander Zara',
      genre: 'Space Opera',
      director: 'Denis Villeneuve',
      rating: 'TBD',
      awards: [],
      description: 'An epic space adventure spanning multiple worlds and civilizations.',
      status: 'upcoming'
    }
  ];

  const releasedFilms = films.filter(film => film.status === 'released');
  const upcomingFilms = films.filter(film => film.status === 'upcoming');

  const FilmCard = ({ film }: { film: typeof films[0] }) => (
    <Card className="bg-gradient-card border-0 hover-lift group overflow-hidden">
      <CardContent className="p-0">
        <div className="h-64 bg-gradient-purple relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white mb-2">{film.title}</h3>
            <p className="text-white/80 text-sm">{film.description}</p>
          </div>
          {film.status === 'released' && (
            <Button
              size="icon"
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 border-0"
            >
              <Play className="h-4 w-4" />
            </Button>
          )}
          {film.status === 'upcoming' && (
            <Badge className="absolute top-4 left-4 bg-gradient-golden">
              Coming Soon
            </Badge>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{film.year}</span>
              </Badge>
              {film.status === 'released' && (
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-current text-primary" />
                  <span>{film.rating}</span>
                </Badge>
              )}
            </div>
            <Badge className="bg-gradient-purple">{film.genre}</Badge>
          </div>
          
          <div className="space-y-2 mb-4">
            <p><span className="font-semibold">Role:</span> {film.role}</p>
            <p><span className="font-semibold">Director:</span> {film.director}</p>
          </div>
          
          {film.awards.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center space-x-2">
                <Award className="h-4 w-4 text-primary" />
                <span>Awards & Recognition</span>
              </h4>
              <div className="space-y-1">
                {film.awards.map((award, index) => (
                  <p key={index} className="text-sm text-muted-foreground">• {award}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 cinematic-enter">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            FILMOGRAPHY
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of stories brought to life through passion, dedication, and artistic collaboration.
          </p>
        </div>

        {/* Film Statistics */}
        <section className="py-16 bg-background/95 rounded-2xl -mx-6 px-6 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filmStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Top Collaborators */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Top Collaborations</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {topCollaborators.map((collaborator, index) => (
              <Card key={index} className="bg-gradient-card border-0 hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{collaborator.name}</h3>
                  <p className="text-primary font-semibold mb-2">{collaborator.films} Films</p>
                  <Badge className="bg-gradient-purple">{collaborator.specialty}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Released Films */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">RECENT WORKS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {releasedFilms.map((film, index) => (
              <FilmCard key={index} film={film} />
            ))}
          </div>
        </section>

        {/* Upcoming Films */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">UPCOMING PROJECTS</h2>
          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {upcomingFilms.map((film, index) => (
              <FilmCard key={index} film={film} />
            ))}
          </div>
        </section>

        {/* International Awards */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">International Recognition</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-8">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Film Festival Awards</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>✓ Sundance Film Festival - Best Actress</li>
                  <li>✓ Berlin International Film Festival - Award Winner</li>
                  <li>✓ IIFA Best Actress Award (Multiple nominations)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-8">
                <Star className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Industry Recognition</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>✓ Filmfare Best Actress Awards</li>
                  <li>✓ National Film Award Winner</li>
                  <li>✓ Many prestigious nominations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Casting Inquiry Section - 2 Column Layout */}
        <section className="py-20 bg-gradient-to-b from-background to-black/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                READY TO CAST?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind? Send your inquiry and let's collaborate!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Form on Left */}
              <div>
                <Card className="bg-gradient-card border-0 shadow-dramatic h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Casting Inquiry</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">Tell me about your project</p>
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
    </div>
  );
};

export default Filmography;
