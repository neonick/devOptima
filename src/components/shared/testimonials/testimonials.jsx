import Image from 'next/image';
import React from 'react';

import bg from 'images/testimonial-bg.png';
import testimonial1 from 'images/testimonial1.jpg';
import testimonial2 from 'images/testimonial2.jpg';
import testimonialIcon1 from 'images/testimonial_icon_1.png';
import testimonialIcon2 from 'images/testimonial_icon_2.png';

const Testimonials = () => (
  <section
    className="pt-[220px] pb-72 px-safe bg-[#0a0813] bg-center bg-[center_37px] bg-no-repeat"
    style={{
      backgroundImage: `url(${bg.src})`,
    }}
  >
    <div className="container">
      <div className="flex justify-center">
        <div className="py-10 px-11 text-white max-w-[610px]">
          <div className="w-16 h-16 rounded-2x shadow-[0_0_15px_0_rgba(0,0,0,0.4)]">
            <Image src={testimonialIcon1} />
          </div>

          <p className="text-gray-200 text-2xl leading-9 mt-5">
            Thanks to DevOptima, our team can focus more on{' '}
            <strong className="text-gray-100 font-medium">innovation</strong> and less on
            operational challenges. Their{' '}
            <strong className="text-gray-100 font-medium">cloud management solutions</strong> are
            top-notch.
          </p>

          <div className="mt-8 flex">
            <Image
              src={testimonial1}
              className="rounded-full w-11 h-11 mr-3"
              alt="Testimonial"
              width="44"
              height="44"
            />
            <div>
              <p className="font-secondary text-lg leading-6 -mt-0.5 text-white">John Smith</p>
              <span className="text-gray-200 text-sm mt-0.5">IT Director at Reflex</span>
            </div>
          </div>
        </div>

        <div className="py-10 px-11 text-white max-w-[610px]">
          <div className="w-16 h-16 rounded-2x shadow-[0_0_15px_0_rgba(0,0,0,0.4)]">
            <Image src={testimonialIcon2} />
          </div>

          <p className="text-gray-200 text-2xl leading-9 mt-5">
            DevOptima has been a game-changer for us. With their support, we've shifted our focus{' '}
            <strong className="text-gray-100 font-medium">
              from operational hurdles to pushing boundaries in innovation
            </strong>
            .
          </p>

          <div className="mt-8 flex">
            <Image
              src={testimonial2}
              className="rounded-full w-11 h-11 mr-3"
              alt="Testimonial"
              width="44"
              height="44"
            />
            <div>
              <p className="font-secondary text-lg leading-6 -mt-0.5 text-white">Jane Doe</p>
              <span className="text-gray-200 text-sm mt-0.5">Tech Lead at Dribble</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
