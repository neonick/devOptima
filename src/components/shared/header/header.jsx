'use client';

import Logo from 'components/shared/logo/logo';

const Header = () => (
  <header className="h-20 font-sans relative">
    <div className="container">
      <div className="h-20 flex justify-between items-center">
        <Logo color="#fff" />

        <nav className="flex gap-x-12">
          <a
            href="#"
            className="text-white text-base opacity-90 hover:font-medium fix-shift"
            title="About us"
          >
            About us
          </a>
          <a
            href="#"
            className="text-white text-base opacity-90 hover:font-medium fix-shift"
            title="Services"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white text-base opacity-90 hover:font-medium fix-shift"
            title="Why DevOptima"
          >
            Why DevOptima
          </a>
        </nav>

        <a href="#" className="secondary-btn py-4">
          Get started
        </a>
      </div>
    </div>

    {/* decorative */}
    <div className="w-[800px] h-[800px] absolute bg-[#141C48] bg-opacity-60 rounded-full -left-[500px] -top-[600px] blur-[200px] z-[-1]" />
  </header>
);

export default Header;
