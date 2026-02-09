'use client';

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  description: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  url: string;
  handle: string;
}

const ContactInfoSection: React.FC = () => {
  const contactInfo: ContactInfo[] = [
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
      value: 'Mumbai, India',
      description: 'Available for projects worldwide'
    }
  ];

  const socialLinks: SocialLink[] = [
    { icon: Instagram, name: 'Instagram', url: '#', handle: '@sunitmorarjee' },
    { icon: Twitter, name: 'Twitter', url: '#', handle: '@sunitmorarjee' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', handle: 'SUNIT MORARJEE' }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <div className="space-y-6 stagger-children">
        {contactInfo.map((info, index) => (
          <Card key={index} className="bg-gradient-card border-0 hover-glow hover-lift transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-golden rounded-lg flex-shrink-0">
                  <info.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-white">{info.title}</h3>
                  <p className="text-primary font-medium break-words">{info.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Social Media */}
      <Card className="bg-gradient-card border-0 hover-lift transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Follow My Journey</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group cursor-pointer"
            >
              <social.icon className="h-5 w-5 text-primary group-hover:text-primary-glow transition-colors flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-white">{social.name}</p>
                <p className="text-sm text-muted-foreground">{social.handle}</p>
              </div>
            </a>
          ))}
        </CardContent>
      </Card>

      {/* Professional Representation */}
      <Card className="bg-gradient-purple border-0 hover-lift transition-all duration-300">
        <CardContent className="p-6 text-center">
          <h3 className="font-bold text-lg mb-2 text-white">Professional Representation</h3>
          <p className="text-white/80 text-sm mb-4">
            For casting inquiries and business opportunities, please contact my agent.
          </p>
          <button className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors">
            Agent Contact Info
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfoSection;
