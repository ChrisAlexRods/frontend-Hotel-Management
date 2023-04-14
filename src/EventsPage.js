import React from 'react';
import { Link } from 'react-router-dom';

import CarouselSection from './CarouselSection';
import BookingForm from './BookingForm';
import ActivitiesSection from './ActivitiesSection';
import ImagesSection from './ImagesSection';
import MenuSection from './MenuSection';
import DescriptionSection from './DescriptionSection';

const HomePage = () => {
  return (
    <div>
      <CarouselSection />
      <BookingForm />
      <ActivitiesSection />
      <ImagesSection />
      <MenuSection />
      <DescriptionSection />
    </div>
  );
};

export default HomePage;
