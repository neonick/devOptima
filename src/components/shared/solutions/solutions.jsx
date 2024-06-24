import Image from 'next/image';
import React from 'react';

import solutions1 from 'images/solutions1.png';
import solutions2 from 'images/solutions2.png';
import solutions3 from 'images/solutions3.png';

const Solutions = () => (
  <section className="pt-40 pb-8 px-safe bg-[#0a0813]">
    <div className="container">
      <h2 className="text-5xl text-white text-center font-sans">
        Innovative solutions <br />
        for operational excellence
      </h2>
      <p className="text-gray-200 text-xl mt-5 text-center font-secondary">
        Tailored DevOps expertise driving your business momentum. <br />
        Personalized solutions for growth and evolution.
      </p>

      <div className="flex justify-center gap-x-5 mt-14 relative">
        <div className="w-[380px] rounded-2xl solutions-border z-10">
          <div className="rounded-2xl solutions-card">
            <Image src={solutions1} className="" />

            <div className="p-8 pt-0 font-secondary">
              <h3 className="text-white text-xl leading-[25px] font-medium">
                Continuous Integration & Deployment
              </h3>
              <p className="text-gray-200 text-base leading-[22px] mt-3">
                Streamline your development process with our advanced CI/CD solutions, ensuring
                faster and more reliable code deployment.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[380px] rounded-2xl solutions-border z-10">
          <div className="rounded-2xl solutions-card">
            <Image src={solutions2} className="" />

            <div className="p-8 pt-0 font-secondary">
              <h3 className="text-white text-xl leading-[25px] font-medium">
                Cloud Solutions & Infrastructure Management
              </h3>
              <p className="text-gray-200 text-base leading-[22px] mt-3">
                Leverage the cloud for scalability and efficiency. We provide comprehensive cloud
                infrastructure management and optimization services.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[380px] rounded-2xl solutions-border z-10">
          <div className="rounded-2xl solutions-card">
            <Image src={solutions3} className="" />

            <div className="p-8 pt-0 font-secondary">
              <h3 className="text-white text-xl leading-[25px] font-medium">
                Automated Testing & Quality Assurance
              </h3>
              <p className="text-gray-200 text-base leading-[22px] mt-3">
                Enhance product quality with our automated testing services, designed to detect
                issues early and reduce time-to-market.
              </p>
            </div>
          </div>
        </div>

        {/* decorative background */}
        <div className="w-[1220px] h-[396px] bg-[#141C48] bg-opacity-60 rounded-[1200px] blur-[150px] absolute z-0" />
      </div>
    </div>
  </section>
);

export default Solutions;
