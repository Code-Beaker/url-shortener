import React from "react";
import {
  iconFacebook,
  iconInstagram,
  iconPinterest,
  iconTwitter,
  logo,
} from "../assets/images";

const footerLinks = {
  Features: ["Link Shortening", "Branded Links", "Analytics"],
  Resources: ["Blog", "Developers", "Support"],
  Company: ["About", "Our Team", "Careers", "Contact"],
};

const Footer = () => {
  return (
    <footer className="bg-[#232127] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:flex-row md:justify-between">
        {/* Logo */}
        <a href="" className="">
          <img src={logo} />
        </a>

        {/* Navigation */}
        <div className="flex flex-col gap-10 md:flex-row md:gap-20">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-sm font-bold">{title}</h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 transition hover:text-cyan-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="transition hover:opacity-80"
            aria-label="Facebook"
          >
            <img src={iconFacebook} alt="Facebook" />
          </a>

          <a
            href="#"
            className="transition hover:opacity-80"
            aria-label="Twitter"
          >
            <img src={iconTwitter} alt="Twitter" />
          </a>

          <a
            href="#"
            className="transition hover:opacity-80"
            aria-label="Pinterest"
          >
            <img src={iconPinterest} alt="Pinterest" />
          </a>

          <a
            href="#"
            className="transition hover:opacity-80"
            aria-label="Instagram"
          >
            <img src={iconInstagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
