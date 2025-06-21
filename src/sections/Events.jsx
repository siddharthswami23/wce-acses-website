import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { EventsData } from '../constants/index.js';

const EventCount = EventsData.length;

const Events = () => {
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedEventIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? EventCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === EventCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedEventIndex]);

  const currentEvent = EventsData[selectedEventIndex];

  return (
    <section className="c-space my-20">
      <p className="head-text">Our Events</p>
      // Inside the JSX of your Events component
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          {currentEvent.spotlight && (
            <div className="absolute top-0 right-0">
              <img
                src={currentEvent.spotlight}
                alt="spotlight"
                className="w-full h-96 object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          )}

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentEvent.logoStyle}>
            <img className="w-10 h-10 shadow-sm" src={currentEvent.logo} alt="logo" loading="lazy" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentEvent.title}</p>
            <p className="animatedText">{currentEvent.desc}</p>
            <p className="animatedText">{currentEvent.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <a
              href={currentEvent.link || '#'}
              className="flex items-center gap-2 cursor-pointer text-white-600"
              target="_blank"
              rel="noreferrer">
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>
            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <img
            src={currentEvent.image || '/assets/default-event.jpg'}
            alt="event"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
