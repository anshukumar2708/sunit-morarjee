import React from 'react';
import { Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface FilmCardProps {
    title: string;
    year: string;
    genre: string;
    description: string;
    thumbnail: string;
    videoUrl: string;
    onPlayClick: () => void;
}

const FilmCard: React.FC<FilmCardProps> = ({
    title,
    year,
    genre,
    description,
    thumbnail,
    onPlayClick,
}) => {
    return (
        <Card className="bg-gradient-card border-0 hover-lift group cursor-pointer overflow-hidden h-full flex flex-col">
            {/* Image Container with Play Button */}
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-black">
                <Image
                    src={thumbnail}
                    alt={title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />

                {/* Play Button */}
                <button
                    onClick={onPlayClick}
                    className="absolute inset-0 w-full h-full flex items-center justify-center group"
                    aria-label={`Play video for ${title}`}
                >
                    <div className="relative flex items-center justify-center">
                        {/* Outer Glow */}
                        <div className="absolute inset-0 rounded-full bg-primary opacity-70 blur-md scale-110 group-hover:scale-125 transition-all duration-300" />

                        {/* Main Circle */}
                        <div className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 pr-1">

                            {/* Play Icon */}
                            <svg
                                viewBox="0 0 24 24"
                                className="w-10 h-10 ml-1 fill-black group-hover:scale-110 transition-transform duration-300"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>

                        </div>
                    </div>
                </button>

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {year}
                </div>
            </div>

            {/* Content */}
            <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-base sm:text-lg font-bold group-hover:text-primary transition-colors mb-2">
                    {title}
                </h3>
                <p className="text-xs sm:text-sm text-primary mb-3">{genre}</p>
                <p className="text-xs sm:text-sm text-muted-foreground flex-grow">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
};

export default FilmCard;
