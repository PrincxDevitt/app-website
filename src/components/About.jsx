import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{opacity: 0, x: 200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once:true}}
      className="flex flex-col items-center justify-center container mx-auto py-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
        About{' '}
        <span className="underline underline-offset-4 decoration-2 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-xl text-center mb-10">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt="Brand"
          className="w-full sm:w-1/2 max-w-lg rounded-lg shadow-md"
        />

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-12 w-full">
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold text-gray-800">10+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold text-gray-800">12+</p>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold text-gray-800">20+</p>
              <p className="text-gray-600">Mn. Sq. Ft. Delivered</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold text-gray-800">25+</p>
              <p className="text-gray-600">Ongoing Projects</p>
            </div>
          </div>

          <p className="my-10 max-w-lg text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nulla omnis
            magni. Placeat, officia at. Ipsam id ipsa, ratione enim exercitationem provident
            corporis sequi inventore sunt obcaecati, aspernatur quo esse.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-md transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;