import React from 'react';
import CarouselSection from './CarouselSection';
import BookingForm from './BookingForm';
import ActivitiesSection from './ActivitiesSection';
import ImagesSection from './ImagesSection';
import MenuSection from './MenuSection';
import DescriptionSection from './DescriptionSection';

const HomePage = () => {
  return (
    <div>
      <div className="carousel-and-booking">
        <CarouselSection />
        <BookingForm />
      </div>
      <ActivitiesSection />
      <ImagesSection />
      <MenuSection />
      <DescriptionSection />
    </div>
  );
};

export default HomePage;
