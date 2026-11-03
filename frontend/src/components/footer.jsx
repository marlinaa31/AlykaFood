import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Menu' },
  { to: '/contact', label: 'Contact Us' },
]

const iconProps = {
  className: 'w-4 h-4 shrink-0 text-[#F4AE3D] mt-0.5',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const social =
  'w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-[#E9DCCB] hover:bg-[#F4AE3D] hover:border-[#F4AE3D] hover:text-[#2B1B12] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4AE3D]'

const Footer = () => {
  return (
    <footer className="pt-6 pb-6 px-4 md:px-6">
      <div className="max-w-screen-xl mx-auto rounded-[8px] bg-[#2B1B12] text-white px-6 md:px-10 pt-12 pb-6 shadow-[0_20px_50px_-20px_rgba(43,27,18,0.6)]">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-[#F4AE3D] text-[#2B1B12] flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 3v8M5.5 3v5a2.5 2.5 0 005 0V3M8 11v10" />
                  <path d="M17 21V3c-2.5 1.5-3.5 4.5-3.5 8H17" />
                </svg>
              </span>
              <span className="text-xl font-bold tracking-tight">AlykaFood</span>
            </div>

            <p className="text-[#E9DCCB]/70 text-sm mt-4">Good Food. Good Mood.</p>

            <div className="flex gap-3 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className={social}>
                <FaInstagram size={17} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className={social}>
                <FaFacebookF size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm text-[#E9DCCB]/70">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-[#F4AE3D] transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-3 text-sm text-[#E9DCCB]/70">
              <li className="flex items-start gap-2.5">
                <svg {...iconProps}>
                  <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Banda Aceh, Indonesia
              </li>
              <li className="flex items-start gap-2.5">
                <svg {...iconProps}>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                hello@alykafood.com
              </li>
              <li className="flex items-start gap-2.5">
                <svg {...iconProps}>
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z" />
                </svg>
                +62 812-3456-7890
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold mb-5">Opening Hours</h3>
            <ul className="space-y-1 text-sm text-[#E9DCCB]/70">
              <li>Monday - Friday</li>
              <li className="text-[#F4AE3D]">08:00 AM - 10:00 PM</li>
              <li className="pt-3">Saturday - Sunday</li>
              <li className="text-[#F4AE3D]">09:00 AM - 11:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 pt-5 text-center">
          <p className="text-[#E9DCCB]/60 text-xs">
            © {new Date().getFullYear()} AlykaFood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer