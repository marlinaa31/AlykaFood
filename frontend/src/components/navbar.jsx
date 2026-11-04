import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact Us' },
]

const iconProps = {
  className: 'w-5 h-5',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const IconButton = ({ label, children, badge = 0, className = '' }) => (
  <button
    type="button"
    aria-label={label}
    className={`relative w-9 h-9 rounded-full flex items-center justify-center text-[#2B1B12] hover:bg-[#F4AE3D]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4AE3D] transition ${className}`}
  >
    {children}
    {badge > 0 && (
      <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#F4AE3D] text-[#2B1B12] text-[10px] font-bold flex items-center justify-center">
        {badge}
      </span>
    )}
  </button>
)

const Navbar = ({ cartCount = 0 }) => {
  const [open, setOpen] = useState(false)

  const desktopLink = ({ isActive }) =>
    `relative py-1 text-sm font-medium transition-colors ${
      isActive ? 'text-[#2B1B12]' : 'text-[#66564A] hover:text-[#2B1B12]'
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-[#F4AE3D] after:transition-all ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`

  const mobileLink = ({ isActive }) =>
    `block rounded-xl px-4 py-3 text-sm font-medium transition ${
      isActive
        ? 'bg-[#F4AE3D]/25 text-[#2B1B12]'
        : 'text-[#66564A] hover:bg-[#F4AE3D]/15'
    }`

  return (
    // inset-x sama dengan padding section (px-4 / md:px-6) supaya tepi kiri-kanan sejajar
    <header className="fixed top-3 inset-x-4 md:inset-x-6 z-30">
      <nav className="max-w-screen-xl mx-auto rounded-[20px] bg-[#FFF9EE]/95 backdrop-blur border border-[#F0DFC0] shadow-[0_10px_30px_-12px_rgba(120,80,30,0.35)]">
        <div className="flex items-center justify-between px-4 md:px-6 py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Logo Alyka Food"
              className="w-9 h-9 rounded-full object-cover"
            />
            <span className="text-xl font-bold tracking-tight text-[#2B1B12]">AlykaFood</span>
          </Link>

          {/* Menu desktop */}
          <ul className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className={desktopLink}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Aksi kanan */}
          <div className="flex items-center gap-1">
            <IconButton label="Cari">
              <svg {...iconProps}><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4-4" /></svg>
            </IconButton>

            <IconButton label="Favorit" className="hidden sm:flex">
              <svg {...iconProps}><path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" /></svg>
            </IconButton>

            <IconButton label="Akun" className="hidden sm:flex">
              <svg {...iconProps}><circle cx="12" cy="8" r="3.5" /><path d="M5 20c1-4 4-5.5 7-5.5s6 1.5 7 5.5" /></svg>
            </IconButton>

            <IconButton label="Keranjang" badge={cartCount}>
              <svg {...iconProps}>
                <path d="M4 5h2l2 10h9l2-7H7" />
                <circle cx="9" cy="19" r="1.2" />
                <circle cx="17" cy="19" r="1.2" />
              </svg>
            </IconButton>

            <button
              type="button"
              aria-label="Buka menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden ml-1 w-9 h-9 rounded-full flex items-center justify-center text-[#2B1B12] hover:bg-[#F4AE3D]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4AE3D] transition"
            >
              <svg {...iconProps}>
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M5 7h14M5 12h14M5 17h14" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {open && (
          <div id="mobile-menu" className="md:hidden border-t border-[#F0DFC0] p-3">
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.to === '/'} className={mobileLink} onClick={() => setOpen(false)}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar