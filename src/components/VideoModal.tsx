import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
    isOpen: boolean;
    videoUrl: string;
    title: string;
    onClose: () => void;
}

const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return '';
    const regExp =
        /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : '';
};

const VideoModal: React.FC<VideoModalProps> = ({
    isOpen,
    videoUrl,
    title,
    onClose,
}) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const youtubeEmbed = getYoutubeEmbedUrl(videoUrl);
    const isYoutube = Boolean(youtubeEmbed);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative z-10 w-full max-w-5xl mx-4">
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 md:top-4 md:right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                    <X className="h-6 w-6 text-white" />
                </button>

                <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-2xl">
                    {/* Title */}
                    <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                            {title}
                        </h2>
                    </div>

                    {/* Video */}
                    <div className="relative w-full pt-[56.25%] bg-black">
                        {isYoutube ? (
                            <iframe
                                src={youtubeEmbed}
                                title={title}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            />
                        ) : (
                            <video
                                src={videoUrl}
                                controls
                                autoPlay
                                className="absolute top-0 left-0 w-full h-full"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
