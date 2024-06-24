import Image from 'next/image';
import React from 'react';

import heroIllustration from 'images/hero-illustration.png';
import cursor1 from 'svgs/cursor1.svg';
import cursor2 from 'svgs/cursor2.svg';

const Hero = () => (
  <section className="px-safe pt-[136px] pb-32">
    <div className="container">
      <div className="flex justify-between">
        <div className="w-1/2">
          <h1 className="text-7xl text-white leading-[81px] gradient-h1 font-sans">
            Revolutionize your DevOps journey with DevOptima
          </h1>
          <p className="text-gray-200 text-xl mt-7 font-secondary">
            Empower teams to innovate faster through streamlined development, efficient automated
            workflows, and reliable scaling.
          </p>

          <div className="mt-9">
            <div className="w-full">
              <form action="">
                <div className="h-[56px] w-[460px] rounded-full basic-input-border relative">
                  <input
                    type="text"
                    placeholder="Your business email..."
                    className="basic-input mt-[1px] mx-[1px] h-[54px] px-5 text-white rounded-full focus:outline-none focus:border-[#3A3A3A]"
                    required
                  />

                  {/* FIXME: button states */}
                  <input
                    type="submit"
                    className="primary-btn absolute top-[6px] right-[6px] cursor-pointer h-11 py-[14px]"
                    value="Free trial"
                  />
                </div>

                <p className="block form-error text-red mt-3 ml-6 hidden">
                  Email is a required field
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="w-5/12">
          <div className="relative">
            <Image src={heroIllustration} className="w-[659px] h-[487px] max-w-none -mt-[70px]" />

            <div className="absolute w-[120px] h-[53px] top-[340px] left-[130px] animation-user-action">
              <div className="relative w-full h-full">
                <img src={cursor1} className="absolute top-0 left-0" alt="" />
                <span className="bg-[#749FF6] text-[#0A0812] py-[7px] px-[10px] rounded-full rounded-ss-none font-secondary absolute top-[18px] left-[18px] font-medium text-[13px] leading-[13px]">
                  CarinaWolli
                </span>
              </div>
            </div>

            <div className="absolute w-[120px] h-[53px] top-[180px] left-[290px] animation-user-action2">
              <div className="relative w-full h-full">
                <img src={cursor2} className="absolute top-[26px] left-0" alt="" />
                <span className="bg-[#AD79D2] text-[#0A0812] py-[7px] px-[10px] rounded-full rounded-es-none font-secondary absolute top-0 left-[18px] font-medium text-[13px] leading-[13px]">
                  HenriSal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
