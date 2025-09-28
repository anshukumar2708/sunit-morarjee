import { Calendar, Star, Play, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Filmography = () => {
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
      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 cinematic-enter">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Filmography
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of stories brought to life through passion, dedication, and artistic collaboration.
          </p>
        </div>

        {/* Released Films */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Recent Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {releasedFilms.map((film, index) => (
              <FilmCard key={index} film={film} />
            ))}
          </div>
        </section>

        {/* Upcoming Films */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Upcoming Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {upcomingFilms.map((film, index) => (
              <FilmCard key={index} film={film} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Filmography;