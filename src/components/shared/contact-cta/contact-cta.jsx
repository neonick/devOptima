import React from 'react';

const ContactCTA = () => (
  <section className="pb-44 px-safe bg-[#0a0813] relative overflow-hidden">
    <div className="container">
      <div className="text-center">
        <h2 className="text-white text-5xl font-sans gradient-h2">
          Ready to elevate your DevOps strategy?
        </h2>
        <p className="text-gray-200 text-xl max-w-3xl mt-5 mx-auto">
          Join the multitude of companies benefiting from optimized DevOps practices. Contact us to
          discover how DevOptima can help your business.
        </p>
        <div className="mt-10 flex gap-x-3 justify-center">
          <a href="#" className="primary-btn py-4">
            Get started
          </a>
          <a href="#" className="secondary-btn py-4">
            Try for free
          </a>
        </div>
      </div>
    </div>

    {/* decoration background */}
    <div className="w-[800px] h-[800px] absolute bg-[#141C48] bg-opacity-60 rounded-full -left-[500px] -bottom-[600px] blur-[200px]" />

    <div className="w-[800px] h-[800px] absolute bg-[#141C48] bg-opacity-60 rounded-full -right-[500px] -bottom-[600px] blur-[200px]" />
  </section>
);

export default ContactCTA;
