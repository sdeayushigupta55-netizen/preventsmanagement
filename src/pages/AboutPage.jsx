import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { SITE } from '../data/site';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';
import {
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineStar,
} from 'react-icons/hi';

const values = [
  { icon: HiOutlineSparkles, title: 'Creative Excellence', text: 'Every event begins with a unique concept tailored to your vision, not a recycled template.' },
  { icon: HiOutlineHeart, title: 'Genuine Care', text: 'We treat every celebration as if it were our own — because hospitality is in our name.' },
  { icon: HiOutlineShieldCheck, title: 'Reliable Execution', text: 'Meticulous planning and on-ground precision ensure your event runs exactly as designed.' },
  { icon: HiOutlineUserGroup, title: 'Client Partnership', text: 'We collaborate, not dictate. Your input shapes every decision we make.' },
  { icon: HiOutlineLightBulb, title: 'Innovative Solutions', text: 'Fresh ideas within your budget — creative problem-solving is part of our DNA.' },
  { icon: HiOutlineStar, title: 'Premium Standards', text: 'From vendor selection to final teardown, we maintain luxury-grade quality throughout.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Where Hospitality Meets Celebration"
        description={`Kalav Hospitality by ${SITE.tagline} is a Bangalore-based event management company built on one belief — every celebration deserves to be extraordinary.`}
        ctaText="Work With Us"
      />

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="about-page-grid">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Incredible Experience, Exceptional Results</h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.85, marginBottom: 16 }}>
                Founded with a passion for creating memorable moments, Kalav Hospitality has grown
                into a trusted name for premium event management across Bangalore. From intimate
                birthday gatherings in JP Nagar to grand wedding celebrations across the city, we
                bring the same level of dedication to every project.
              </p>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.85, marginBottom: 16 }}>
                {SITE.tagline} powers our operations with structured processes, transparent
                budgeting, and a vetted network of vendors — ensuring every client receives
                end-to-end solutions without the stress of coordinating multiple parties.
              </p>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.85 }}>
                Our team handles each project from the first planning call through on-ground
                execution, giving you a single point of contact and complete peace of mind.
              </p>
            </div>
            <div className="stats-bar">
              <div className="stats-bar__item"><strong>500+</strong><span>Events Delivered</span></div>
              <div className="stats-bar__item"><strong>4</strong><span>Core Services</span></div>
              <div className="stats-bar__item"><strong>100%</strong><span>End-to-End</span></div>
              <div className="stats-bar__item"><strong>1</strong><span>Dedicated Coordinator</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="value-card">
                <div className="value-card__icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Our Approach</span>
          <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: 20 }}>
            One Team. One Vision. One Flawless Event.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 640, margin: '0 auto 36px', lineHeight: 1.8 }}>
            Unlike agencies that outsource coordination, Kalav Hospitality maintains in-house
            creative direction and production management — giving you accountability at every stage.
          </p>
          <Link to="/process" className="btn btn-primary">See Our Process</Link>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}
