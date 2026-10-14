import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';
import { SITE, NAV_LINKS, SERVICE_LINKS } from '../data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isDesktopNav = () => window.matchMedia('(min-width: 1101px)').matches;

  const isTransparent = !scrolled && !menuOpen;
  const navClass = [
    isTransparent ? 'navbar--transparent' : 'navbar--scrolled',
    menuOpen ? 'navbar--menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={`navbar ${navClass}`}>
      {menuOpen ? (
        <button
          type="button"
          className="navbar__backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand">
          <img
            src={isTransparent ? '/logo-light.png' : '/logo.png'}
            alt="Kalav Hospitality"
            className="navbar__logo"
          />
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">Kalav Hospitality</span>
            <span className="navbar__brand-tag">{SITE.tagline}</span>
          </div>
        </Link>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {NAV_LINKS.filter((l) => !['Contact', 'Services'].includes(l.label)).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}

          <div
            className="navbar__dropdown"
            onMouseEnter={() => {
              if (isDesktopNav()) setServicesOpen(true);
            }}
            onMouseLeave={() => {
              if (isDesktopNav()) setServicesOpen(false);
            }}
          >
            <button
              type="button"
              className={`navbar__link navbar__dropdown-trigger ${servicesOpen ? 'navbar__link--active' : ''}`}
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services <HiChevronDown className={`navbar__chevron ${servicesOpen ? 'navbar__chevron--open' : ''}`} />
            </button>
            <div
              className={`navbar__dropdown-menu ${servicesOpen ? 'navbar__dropdown-menu--open' : ''}`}
              aria-hidden={!servicesOpen}
            >
              <Link to="/services" className="navbar__dropdown-item navbar__dropdown-item--all">
                All Services
              </Link>
              {SERVICE_LINKS.map((s) => (
                <Link key={s.path} to={s.path} className="navbar__dropdown-item">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/contact" className="btn btn-primary navbar__cta">
            Plan Your Event
          </Link>
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => {
            setMenuOpen(!menuOpen);
            if (menuOpen) setServicesOpen(false);
          }}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
        </button>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 18px 0;
          transition: var(--transition);
        }
        .navbar--transparent {
          background: linear-gradient(
            to bottom,
            rgba(10, 18, 25, 0.72) 0%,
            rgba(10, 18, 25, 0.35) 70%,
            transparent 100%
          );
        }
        .navbar--transparent .navbar__brand-name {
          color: var(--white);
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.55);
        }
        .navbar--transparent .navbar__brand-tag {
          color: #e8d5b0;
          font-weight: 600;
          text-shadow: 0 1px 10px rgba(0, 0, 0, 0.6);
        }
        .navbar--transparent .navbar__link {
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
        }
        .navbar--transparent .navbar__toggle { color: var(--white); }
        .navbar--transparent .navbar__chevron { color: rgba(255, 255, 255, 0.95); }
        .navbar--scrolled,
        .navbar--menu-open {
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(12px);
          box-shadow: var(--shadow-sm);
          padding: 12px 0;
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar__brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .navbar__logo {
          height: 48px;
          width: auto;
          background: transparent;
          object-fit: contain;
        }
        .navbar--transparent .navbar__logo {
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.35));
        }
        .navbar__brand-text { display: flex; flex-direction: column; }
        .navbar__brand-name {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.2;
        }
        .navbar__brand-tag {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold-dark);
        }
        .navbar__nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .navbar__link {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--navy);
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-sans);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .navbar__link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gold);
          transition: var(--transition);
        }
        .navbar__link:hover::after,
        .navbar__link--active::after { width: 100%; }
        .navbar__chevron {
          transition: var(--transition);
          font-size: 14px;
        }
        .navbar__chevron--open { transform: rotate(180deg); }
        .navbar__dropdown { position: relative; }
        .navbar__dropdown-menu {
          position: absolute;
          top: calc(100% + 16px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 240px;
          background: var(--white);
          border-radius: 4px;
          box-shadow: var(--shadow-lg);
          padding: 8px 0;
          opacity: 0;
          visibility: hidden;
          transition: var(--transition);
        }
        .navbar__dropdown-menu--open {
          opacity: 1;
          visibility: visible;
        }
        .navbar__dropdown-item {
          display: block;
          padding: 12px 24px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--navy);
          transition: var(--transition);
        }
        .navbar__dropdown-item:hover {
          background: var(--cream);
          color: var(--gold);
        }
        .navbar__cta {
          padding: 10px 24px;
          font-size: 0.75rem;
        }
        .navbar__toggle {
          display: none;
          background: none;
          border: none;
          color: var(--navy);
          cursor: pointer;
        }
        .navbar__backdrop {
          display: none;
        }
        @media (max-width: 1100px) {
          .navbar {
            --nav-bar-height: 76px;
          }
          .navbar__inner {
            position: relative;
            z-index: 1002;
            min-height: 52px;
          }
          .navbar__toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 1003;
            min-width: 44px;
            min-height: 44px;
            padding: 8px;
            margin: -8px -8px -8px 0;
          }
          .navbar__backdrop {
            display: block;
            position: fixed;
            inset: 0;
            z-index: 1000;
            border: none;
            padding: 0;
            cursor: pointer;
            background: rgba(30, 45, 62, 0.55);
          }
          .navbar__nav {
            position: fixed;
            top: 0;
            right: -100%;
            z-index: 1001;
            width: 100%;
            max-width: 100%;
            height: 100dvh;
            padding: calc(var(--nav-bar-height) + 16px) 28px 40px;
            background: var(--white);
            flex-direction: column;
            align-items: stretch;
            gap: 6px;
            box-shadow: var(--shadow-lg);
            transition: right 0.35s ease;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
          .navbar__nav--open { right: 0; }
          .navbar__link {
            font-size: 0.9rem;
            width: 100%;
            justify-content: space-between;
            padding: 14px 0;
            border-bottom: 1px solid rgba(30, 45, 62, 0.08);
          }
          .navbar__link::after { display: none; }
          .navbar__dropdown {
            width: 100%;
            border-bottom: 1px solid rgba(30, 45, 62, 0.08);
          }
          .navbar__dropdown-trigger {
            width: 100%;
            padding: 14px 0;
          }
          .navbar__dropdown-menu {
            position: static;
            transform: none;
            box-shadow: none;
            opacity: 1;
            visibility: visible;
            max-height: 0;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            padding: 0 0 0 12px;
            margin: 0;
            border-left: 3px solid var(--gold);
            transition: max-height 0.35s ease, padding 0.25s ease, margin 0.25s ease;
          }
          .navbar__dropdown-menu--open {
            max-height: 520px;
            padding: 8px 0 16px 16px;
            margin: 0 0 8px;
          }
          .navbar__dropdown-item {
            padding: 12px 0;
            font-size: 0.88rem;
            border-bottom: 1px solid rgba(30, 45, 62, 0.06);
          }
          .navbar__dropdown-item--all {
            font-weight: 700;
            color: var(--gold-dark);
          }
          .navbar__cta {
            width: 100%;
            justify-content: center;
            margin-top: 20px;
            border-bottom: none;
          }
        }
        @media (max-width: 520px) {
          .navbar__brand-text { display: none; }
          .navbar__logo { height: 44px; }
        }
      `}</style>
    </header>
  );
}
