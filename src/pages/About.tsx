import { Award, Calendar, MapPin, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import behindScenesImage from '@/assets/behind-scenes.jpg';

const About = () => {
  const achievements = [
    { icon: Award, title: 'Academy Award Nominee', description: 'Best Actress, "Midnight Dreams" (2023)' },
    { icon: Calendar, title: '15+ Years Experience', description: 'Professional acting since 2008' },
    { icon: MapPin, title: 'Global Recognition', description: 'Films released in 50+ countries' },
    { icon: Heart, title: 'Charity Work', description: 'Ambassador for Children\'s Arts Foundation' },
  ];

  const skills = [
    'Method Acting', 'Shakespearean Theatre', 'Accent Coaching', 'Stage Combat',
    'Voice Acting', 'Improvisation', 'Classical Ballet', 'Horse Riding'
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 cinematic-enter">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            About Alexandra
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate performer dedicated to bringing authentic stories to life through the art of cinema.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Biography */}
          <div className="space-y-6 stagger-children">
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Born and raised in Los Angeles, I discovered my passion for acting during high school theater productions. 
              After graduating from the prestigious Juilliard School, I began my career on Broadway before transitioning to film.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My breakthrough role came in the indie drama "Whispers in the Rain," which premiered at Sundance and earned me 
              critical acclaim. Since then, I've had the privilege of working with renowned directors and talented casts across 
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

        {/* Achievements Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Recognition & Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-card border-0 hover-glow">
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
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Skills & Training</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-gradient-purple hover-glow"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;