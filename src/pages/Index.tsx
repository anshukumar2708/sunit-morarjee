import { ArrowDown, Play, Star, Award, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import heroPortrait from '@/assets/hero-portrait.jpg';
import redCarpet from '@/assets/red-carpet.jpg';

const Index = () => {
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
    </div>
  );
};

export default Index;
