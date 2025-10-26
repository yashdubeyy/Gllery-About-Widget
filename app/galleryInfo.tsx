"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';

const GalleryInfo = () => {
    const [images, setImages] = useState<string[]>([]);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            const newScrollLeft = scrollContainerRef.current.scrollLeft + 
                (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImages(prev => [...prev, imageUrl]);
        }
    };

    const handleAddImage = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="h-full p-3 sm:p-4 md:p-6">
            {/* Gallery header  */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
                <div className="flex items-center">
                    <div className="bg-[#1B1B1B] text-white px-4 sm:px-6 py-2 rounded-[10px] font-medium text-sm sm:text-base">
                        Gallery
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        accept="image/*"
                        className="hidden"
                    />
                    <button 
                        onClick={handleAddImage}
                        className="px-3 sm:px-4 py-2 bg-[#1B1B1B] text-white rounded-[10px] hover:bg-[#2A2F35] transition-colors text-sm sm:text-base">
                        + ADD IMAGE
                    </button>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => handleScroll('left')}
                            className="w-[40px] h-[40px] bg-black text-gray-400 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button 
                            onClick={() => handleScroll('right')}
                            className="w-[40px] h-[40px] bg-black text-gray-400 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Gallery row with horizontal scroll */}
            <div 
                ref={scrollContainerRef}
                className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth h-[200px] sm:h-[250px] md:h-[300px] [scrollbar-gutter:stable]">
                {images.map((imageUrl, index) => (
                    <div key={index} className="relative flex-none w-[200px] sm:w-[250px] md:w-[300px] h-[150px] sm:h-[190px] md:h-[230px] bg-[#1B1B1B] rounded-[15px] overflow-hidden">
                        <Image 
                            src={imageUrl} 
                            alt={`Gallery image ${index + 1}`}
                            className="object-cover"
                            fill
                            sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
                        />
                    </div>
                ))}
                {images.length === 0 && (
                    <div className="flex-none w-[200px] sm:w-[250px] md:w-[300px] h-[150px] sm:h-[190px] md:h-[230px] bg-[#1B1B1B] rounded-[15px] flex items-center justify-center text-gray-400 text-sm sm:text-base">
                        No images yet
                    </div>
                )}
            </div>
        </div>
    );
}

export default GalleryInfo;