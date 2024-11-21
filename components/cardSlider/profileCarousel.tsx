import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './ProfileCardCarousel.css';

// Import required modules
import { EffectCoverflow, Navigation } from 'swiper/modules';
import Card from './profileCard';

interface ProfileData {
  imageSrc: string;
  flagSrc: string;
  name: string;
  skills: string[];
  exp: string;
}

export default function ProfileCardCarousel() {
  const [profiles, setProfiles] = useState<ProfileData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfiles() {
      try {
        const response = await fetch('/api/skills');
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error('Failed to fetch profiles:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProfiles();
  }, []);

  const renderLoadingCards = () => {
    return Array.from({ length: 3 }).map((_, index) => (
      <SwiperSlide key={`loading-${index}`}>
        <div className="w-72 h-96 bg-gray-200 rounded-lg animate-pulse"></div>
      </SwiperSlide>
    ));
  };

  const renderProfileCards = () => {
    return profiles.map((profile, index) => (
      <SwiperSlide key={index}>
        <Card
          imageSrc={profile.imageSrc}
          flagSrc={profile.flagSrc}
          name={profile.name}
          skills={profile.skills}
          exp={profile.exp}
        />
      </SwiperSlide>
    ));
  };

  return (
    <div className="container">
      <Swiper
        loop={true}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 400,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={-100}
        navigation
        modules={[EffectCoverflow, Navigation]}
        className="profileSwiper"
      >
        {loading ? renderLoadingCards() : renderProfileCards()}
      </Swiper>
    </div>
  );
}
