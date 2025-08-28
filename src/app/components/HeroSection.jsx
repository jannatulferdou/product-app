"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const HeroSection = () => {
  // Company showcase images
  const companyImages = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756316865/iphone_cv9hep.jpg",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756317090/dell_b2ursm.jpg",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756318382/tablet_pxhbyi.jpg",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dwcqwzm0f/image/upload/v1756317533/watch_ifgnce.jpg",
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 -mr-48 -mb-48"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Company Introduction */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="block">Welcome to</span>
              <span className="block bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                NextShop
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 max-w-3xl">
              We are a premier destination for quality products and exceptional service. 
              Since our founding in 2010, we've been committed to delivering the best 
              shopping experience to our customers worldwide.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-gray-600 mt-1">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-gray-600 mt-1">Products</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary">12+</div>
                <div className="text-gray-600 mt-1">Years Experience</div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/about"
                className="px-8 py-4 text-lg font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Learn More About Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="px-8 py-4 text-lg font-semibold rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 border border-gray-300 hover:border-gray-400 flex items-center justify-center gap-2"
              >
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Image Slider */}
          <div className="relative">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ 
                clickable: true,
                el: '.swiper-pagination',
                bulletClass: 'swiper-pagination-bullet bg-gray-400 opacity-50',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary !opacity-100'
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="swiper-container rounded-2xl overflow-hidden"
            >
              {companyImages.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative flex items-center justify-center h-80 lg:h-96 p-4">
                    <img
                      src={item.image}
                      alt='product photo'
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="swiper-pagination mt-4 flex justify-center gap-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
