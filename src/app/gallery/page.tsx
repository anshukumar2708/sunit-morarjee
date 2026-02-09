'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Heart, Share, Download, Send, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import ContactInfoSection from '@/components/ContactInfoSection';
import heroPortrait from '@/assets/hero-portrait.jpg';
import portraitGallery1 from '@/assets/portrait-gallery-1.jpg';
import portraitGallery2 from '@/assets/portrait-gallery-2.jpg';
import redCarpet from '@/assets/red-carpet.jpg';
import behindScenes from '@/assets/behind-scenes.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
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
      description: "Thank you for your inquiry. We'll get back to you soon.",
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

  const images = [
    {
      id: 1,
      src: heroPortrait,
      alt: 'Professional headshot',
      category: 'portraits',
      title: 'Professional Headshot',
      description: 'Studio portrait session, 2023'
    },
    {
      id: 2,
      src: portraitGallery1,
      alt: 'Film noir style portrait',
      category: 'portraits',
      title: 'Film Noir Style',
      description: 'Classic photography session'
    },
    {
      id: 3,
      src: portraitGallery2,
      alt: 'Cinematic portrait',
      category: 'portraits',
      title: 'Cinematic Portrait',
      description: 'Dramatic lighting showcase'
    },
    {
      id: 4,
      src: redCarpet,
      alt: 'Red carpet event',
      category: 'events',
      title: 'Academy Awards Premiere',
      description: 'Red carpet appearance, 2023'
    },
    {
      id: 5,
      src: behindScenes,
      alt: 'Behind the scenes',
      category: 'behind-scenes',
      title: 'On Set - Midnight Dreams',
      description: 'Behind the scenes moment'
    }
  ];

  const categories = [
    { id: 'all', name: 'All', count: images.length },
    { id: 'portraits', name: 'Portraits', count: images.filter(img => img.category === 'portraits').length },
    { id: 'events', name: 'Events', count: images.filter(img => img.category === 'events').length },
    { id: 'behind-scenes', name: 'Behind the Scenes', count: images.filter(img => img.category === 'behind-scenes').length }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const selectedImageData = selectedImage ? images.find(img => img.id === selectedImage) : null;

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16 cinematic-enter">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A visual journey through moments both on and off the screen.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id 
                  ? 'bg-gradient-golden hover:bg-gradient-golden' 
                  : 'hover-glow'
              }`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer hover-lift"
              onClick={() => openLightbox(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                width={400}
                height={320}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                <p className="text-white/80 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                width={1000}
                height={800}
              />
              
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-bold text-xl mb-2">{selectedImageData.title}</h3>
                <p className="text-white/80 mb-4">{selectedImageData.description}</p>
                
                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                    <Heart className="h-4 w-4 mr-2" />
                    Like
                  </Button>
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Photography Info Section */}
        <section className="py-20 bg-background/95 rounded-2xl -mx-6 px-6 mt-20 mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gradient">ABOUT THE PHOTOGRAPHY</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our gallery showcases professional photography from various film sets, award ceremonies, and promotional shoots. Each image captures a unique moment from SUNIT MORARJEE's illustrious Bollywood career.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From red carpet appearances to intimate behind-the-scenes moments, these photographs tell the story of dedication, artistry, and passion that goes into every film project.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Camera className="h-5 w-5 text-primary" />
                  <span>Professional Studio Photography</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>On-Set Behind the Scenes</span>
                </li>
                <li className="flex items-center gap-3">
                  <Camera className="h-5 w-5 text-primary" />
                  <span>Red Carpet & Event Coverage</span>
                </li>
              </ul>
            </div>
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">High Resolution Downloads</h3>
                <p className="text-muted-foreground mb-6">
                  Looking for high-resolution images for press, media, or promotional use? We offer professional-quality downloads and licensing options.
                </p>
                <Button className="w-full bg-gradient-golden hover:bg-gradient-golden hover-glow" size="lg">
                  Request Media Kit & License
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Media Inquiry Form - 2 Column Layout */}
        <section className="py-20 bg-gradient-to-b from-background to-black/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                MEDIA & PHOTO INQUIRIES
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Need photos for press releases, articles, or promotional material? Submit your licensing request below.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Form on Left */}
              <div>
                <Card className="bg-gradient-card border-0 shadow-dramatic h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Photo License Request</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">Request high-resolution photos</p>
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

export default Gallery;
