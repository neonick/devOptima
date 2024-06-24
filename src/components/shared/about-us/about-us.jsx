import Image from 'next/image';
import React from 'react';

import aboutUsPic from 'images/about-us-pic.png';
import aboutUsIcon1 from 'svgs/aboutus-icon-1.svg';
import aboutUsIcon2 from 'svgs/aboutus-icon-2.svg';
import aboutUsIcon3 from 'svgs/aboutus-icon-3.svg';
import aboutUsIcon4 from 'svgs/aboutus-icon-4.svg';

const AboutUs = () => (
  <section className="px-safe pt-[70px] bg-[#0a0813]">
    <div className="container">
      <div className="flex">
        <div className="w-5/12">
          <Image src={aboutUsPic} className="h-[619x] w-[854px] float-right max-w-none" />
        </div>
        <div className="w-7/12 pl-20">
          <h2 className="text-5xl leading-[54px] mt-14 text-white font-sans">What is DevOptima?</h2>
          <p className="text-gray-200 text-xl mt-5 max-w-[630px] font-secondary">
            At DevOptima, we are a team of passionate DevOps experts committed to transforming the
            way businesses approach software development and operations.
          </p>

          <div className="flex flex-wrap mt-14 gap-y-10 gap-x-20 max-w-[565px]">
            <div className="max-w-[242px]">
              <Image src={aboutUsIcon1} className="w-9 h-9" width="36" height="36" />
              <h3 className="text-xl leading-[25px] mt-[14px] text-white font-sans">
                DevOps transformation
              </h3>
              <p className="text-gray-200 text-base leading-[22px] mt-2 font-secondary">
                Reshaping businesses with DevOps expertise.
              </p>
            </div>

            <div className="max-w-[242px]">
              <Image src={aboutUsIcon2} className="w-9 h-9" width="36" height="36" />
              <h3 className="text-xl leading-[25px] mt-[14px] text-white font-sans">
                Efficient operations
              </h3>
              <p className="text-gray-200 text-base leading-[22px] mt-2 font-secondary">
                Streamline processes for productivity gains.
              </p>
            </div>

            <div className="max-w-[242px]">
              <Image src={aboutUsIcon3} className="w-9 h-9" width="36" height="36" />
              <h3 className="text-xl leading-[25px] mt-[14px] text-white font-sans">
                CI/CD implementation
              </h3>
              <p className="text-gray-200 text-base leading-[22px] mt-2 font-secondary">
                Seamless software delivery pipeline.
              </p>
            </div>

            <div className="max-w-[242px]">
              <Image src={aboutUsIcon4} className="w-9 h-9" width="36" height="36" />
              <h3 className="text-xl leading-[25px] mt-[14px] text-white font-sans">
                Automation mastery
              </h3>
              <p className="text-gray-200 text-base leading-[22px] mt-2 font-secondary">
                Unlock full automation potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
