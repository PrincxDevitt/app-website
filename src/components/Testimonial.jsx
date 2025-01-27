import React from 'react';
import { assets, testimonialsData } from '../assets/assets';

const Testimonial = () => {
  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
        Customer{' '}
        <span className="underline underline-offset-4 decoration-2 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        Real Stories from Those Who Found Home With Us
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[340px] border border-gray-200 shadow-lg rounded-xl px-6 py-8 text-center bg-white hover:shadow-2xl transition-shadow"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-gray-300"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl text-gray-800 font-semibold mb-2">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm italic">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-yellow-500 mb-4">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <img key={index} src={assets.star_icon} alt="star" className="w-5 h-5" />
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
