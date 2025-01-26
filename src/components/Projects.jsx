import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  };

  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Projects{' '}
        <span className="underline underline-offset-4 decoration-2 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">
        Crafting space, Building Legacies - Explore Our Portfolio
      </p>

      {/* Slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors shadow-md mr-2"
        >
          <img src={assets.left_arrow} alt="Previous" className="w-6 h-6" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors shadow-md"
        >
          <img src={assets.right_arrow} alt="Next" className="w-6 h-6" />
        </button>
      </div>

      {/* Project Slider container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-1/4 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-lg">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span> • </span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;