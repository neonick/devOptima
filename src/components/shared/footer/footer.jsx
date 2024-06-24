import React from 'react';

import Logo from 'components/shared/logo/logo';

const Footer = () => (
  <footer className="pt-12 pb-12 px-safe bg-[#0a0813] border-t border-t-[#172236]">
    <div className="container">
      <div className="flex">
        <div className="w-6/12">
          <div className="origin-top-left scale-[0.8]">
            <Logo color="#BDC4D1" />
          </div>
        </div>

        <div className="w-1/2 flex justify-between">
          <div className="w-52">
            <h3 className="text-base font-medium text-white">Resources</h3>
            <ul className="text-gray-200 mt-4 flex flex-col gap-y-3">
              <li>
                <a href="#" className="hover:text-gray-100 hover:font-medium">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 hover:font-medium">
                  Release notes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 hover:font-medium">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div className="w-52">
            <h3 className="text-base font-medium text-white">Community</h3>
            <ul className="text-gray-200 mt-4 flex flex-col gap-y-3">
              <li>
                <a href="#" className="hover:text-gray-100 hover:font-medium group">
                  <svg
                    className="inline-block transition-all mr-[10px]"
                    width="16"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                      fill="#BDC4D1"
                      className="group-hover:fill-white"
                    />
                  </svg>
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 hover:font-medium group">
                  <svg
                    className="inline-block transition-all mr-[10px]"
                    width="16"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_173_5911)">
                      <path
                        d="M15.3 0H.7C.3 0 0 .3 0 .7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V.7c-.1-.4-.4-.7-.8-.7zM4.7 13.6H2.4V6h2.4v7.6h-.1zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z"
                        fill="#BDC4D1"
                        className="group-hover:fill-white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_173_5911">
                        <path fill="#fff" d="M0 0H16V16H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 hover:font-medium group">
                  <svg
                    className="inline-block transition-all mr-[10px]"
                    width="16"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_173_5916)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 .2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V14c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"
                        fill="#BDC4D1"
                        className="group-hover:fill-white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_173_5916">
                        <path fill="#fff" d="M0 0H16V16H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 hover:font-medium group">
                  <svg
                    className="inline-block transition-all mr-[10px]"
                    width="16"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_124_336)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7.85C0 3.598 3.648.152 7.98.152c4.328 0 7.845 3.582 7.845 7.833 0 4.25-3.514 7.83-7.847 7.83L0 15.821V7.85zm5.66-4.093a4.937 4.937 0 0 1 2.402-.624h.004c.725 0 1.441.16 2.096.467a4.85 4.85 0 0 1 1.686 1.307c.455.554.779 1.2.947 1.892.168.693.176 1.413.023 2.109a4.731 4.731 0 0 1-.905 1.912 4.843 4.843 0 0 1-1.656 1.343 4.938 4.938 0 0 1-4.19.091l-3.16.7.88-2.777a4.7 4.7 0 0 1 .098-4.713 4.823 4.823 0 0 1 1.774-1.707z"
                        fill="#BDC4D1"
                        className="group-hover:fill-white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_124_336">
                        <path fill="#fff" d="M0 0H16V16H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                  Discourse
                </a>
              </li>
            </ul>
          </div>

          <div className="w-52 ">
            <h3 className="text-base font-medium text-white">Legal</h3>
            <ul className="text-gray-200 mt-4 flex flex-col gap-y-3">
              <li>
                <a href="#" className="hover:text-gray-100 hover:font-medium">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 hover:font-medium">
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-gray-200 text-sm font-secondary">
        Devoptima {new Date().getFullYear()} © All rights reserved
      </div>
    </div>
  </footer>
);

export default Footer;
