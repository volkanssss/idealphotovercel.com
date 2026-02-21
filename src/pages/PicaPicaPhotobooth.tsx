'use client';


import React, { useState, useEffect } from 'react';
import SEOHead from '@/components/landing/SEOHead';
import { toast } from 'sonner';
import PhotoboothLayout from '@/components/photobooth/PhotoboothLayout';
import HeroArea from '@/components/photobooth/HeroArea';
import PhotoboothFAQ from '@/components/photobooth/PhotoboothFAQ';
import PhotoboothSEOSection from '@/components/photobooth/PhotoboothSEOSection';
import TipsBanner from '@/components/photobooth/TipsBanner';
import PhotoboothTabs from '@/components/photobooth/PhotoboothTabs';
import PhotoboothFeatures from '@/components/photobooth/PhotoboothFeatures';
import PhotoboothTestimonials from '@/components/photobooth/PhotoboothTestimonials';
import usePhotoboothState from '@/hooks/usePhotoboothState';
import { downloadPhotoStrip } from '@/utils/downloadPhotoStrip';
import { FilterType } from '@/components/photobooth/FilterSelector';
import { FrameColorType } from '@/components/photobooth/FrameColorSelector';
import { StickerType } from '@/components/photobooth/StickerSelector';
import { motion } from 'framer-motion';

const picaPicaStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Pica Pica Photo Booth - İdeal Photo",
  "applicationCategory": "PhotoApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Pica Pica Photo Booth by İdeal Photo — Free online photo booth app for capturing and customizing special moments with personalized frames, filters, and effects. The best picapica booth experience online.",
  "screenshot": "https://idealphotovercel.com/og-image.png",
  "softwareVersion": "2.1",
  "url": "https://idealphotovercel.com/pica-pica-booth"
};

const PicaPicaPhotobooth = () => {
  const {
    capturedPhotos, isCapturing, bgColor, selectedFilter, countdownTime,
    frameColor, selectedSticker, showControls, isDownloading, setIsDownloading,
    handlePhotoCaptured, handleTakePhoto, handleRetakePhoto, handleTakeNewPhotos,
    handleFilterChange, handleCountdownChange, setFrameColor, setSelectedSticker
  } = usePhotoboothState();
  
  const [activeTab, setActiveTab] = useState('capture');
  const [showTips, setShowTips] = useState(true);
  const [layoutMode, setLayoutMode] = useState('classic');
  
  const handleDownloadStrip = async () => {
    if (capturedPhotos.length < 3) {
      toast.error('Please take at least 3 photos first');
      return;
    }
    downloadPhotoStrip(setIsDownloading);
  };
  
  const handleSharePhotos = () => {
    if (capturedPhotos.length === 0) {
      toast.error('Please take some photos first');
      return;
    }
    if (navigator.share) {
      navigator.share({
        title: 'My Pica Pica Photos - İdeal Photo',
        text: 'Check out these awesome photos I took with the Pica Pica Photo Booth on İdeal Photo!',
        url: 'https://idealphotovercel.com/pica-pica-booth'
      }).catch(() => toast.error('Failed to share photos'));
    } else {
      toast.info('Copy this link to share: https://idealphotovercel.com/pica-pica-booth');
    }
  };
  
  const toggleLayoutMode = () => {
    const modes = ['classic', 'modern', 'fun'];
    const currentIndex = modes.indexOf(layoutMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setLayoutMode(modes[nextIndex]);
    toast.success(`Layout changed to ${modes[nextIndex]} mode`);
  };
  
  useEffect(() => {
    if (capturedPhotos.length >= 4 && activeTab === 'capture') {
      setActiveTab('preview');
      toast.success('Photo session complete! Now customize your photos');
    }
  }, [capturedPhotos.length, activeTab]);
  
  useEffect(() => {
    if (showTips) {
      const timer = setTimeout(() => setShowTips(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [showTips]);

  return (
    <>
      <SEOHead
        title="Pica Pica Photo Booth | Free Online Picapica Booth | İdeal Photo"
        description="Pica Pica Photo Booth by İdeal Photo — the best free online picapica booth app. Create stunning photo strips with customizable frames, filters, and effects. Try the pica pica photobooth experience now!"
        canonicalPath="/pica-pica-booth"
        keywords="pica pica photobooth, picapica booth, pica pica photo booth, picapica photo booth, free online photo booth, İdeal Photo, ideal photo booth, photo booth app, virtual photo booth, photo frames, photo effects"
        ogType="website"
        structuredData={picaPicaStructuredData}
      />
      
      <PhotoboothLayout bgColor={bgColor}>
        <HeroArea />
        
        {showTips && <TipsBanner onDismiss={() => setShowTips(false)} />}
        
        <motion.main 
          id="photobooth-area" 
          className="flex-grow container mx-auto px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <PhotoboothTabs 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            layoutMode={layoutMode}
            toggleLayoutMode={toggleLayoutMode}
            capturedPhotos={capturedPhotos}
            isCapturing={isCapturing}
            showControls={showControls}
            selectedFilter={selectedFilter as FilterType}
            countdownTime={countdownTime}
            handlePhotoCaptured={handlePhotoCaptured}
            handleTakePhoto={handleTakePhoto}
            handleRetakePhoto={handleRetakePhoto}
            handleFilterChange={handleFilterChange}
            handleCountdownChange={handleCountdownChange}
            handleTakeNewPhotos={handleTakeNewPhotos}
            handleDownloadStrip={handleDownloadStrip}
            handleSharePhotos={handleSharePhotos}
            frameColor={frameColor as FrameColorType}
            setFrameColor={setFrameColor}
            selectedSticker={selectedSticker as StickerType}
            setSelectedSticker={setSelectedSticker}
            isDownloading={isDownloading}
          />
        </motion.main>
        
        <PhotoboothFeatures />
        <PhotoboothTestimonials type="pica-pica" />
        <PhotoboothFAQ />
        <PhotoboothSEOSection />
      </PhotoboothLayout>
    </>
  );
};

export default PicaPicaPhotobooth;
