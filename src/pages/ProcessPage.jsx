import PageHero from '../components/PageHero';
import CTA from '../components/CTA';
import { HiOutlineLightBulb, HiOutlineColorSwatch, HiOutlineCog } from 'react-icons/hi';

const stages = [
  {
    icon: HiOutlineLightBulb,
    phase: 'Create',
    tagline: 'Vision & Strategy',
    desc: 'Our creative team defines the objective and builds the story behind your event.',
    items: [
      { title: 'Event Conceptualization', text: 'We translate your brief into a workable format, theme, and structure before any design begins.' },
      { title: 'Creative Direction', text: 'A single creative lead owns the look, tone, and narrative from first draft to final walkthrough.' },
      { title: 'Define Objectives', text: 'We agree measurable goals — attendance, engagement, brand recall — so success is clearly defined.' },
      { title: 'Storytelling Strategy', text: 'We build a narrative arc so guests experience a beginning, peak moment, and close.' },
      { title: 'Budget Management', text: 'Line-item budgets tracked across vendors — costs visible before they are committed.' },
    ],
  },
  {
    icon: HiOutlineColorSwatch,
    phase: 'Design',
    tagline: 'Look & Feel',
    desc: 'Our design team turns your story into a physical and visual experience.',
    items: [
      { title: 'Custom Décor & Styling', text: 'Bespoke installations and styling tailored to your theme, venue, and guest experience.' },
      { title: 'Floral & Scenic Design', text: 'Stage, backdrop, entrance, and seating designed as one cohesive environment.' },
      { title: 'Graphic Design', text: 'Invitations, signage, backdrops, and digital assets under one consistent brand system.' },
      { title: 'Lighting Design', text: 'Mood and function-driven lighting for each segment of your programme.' },
      { title: 'Collateral Production', text: 'Printed and digital materials — delegate kits, menus, on-screen decks — all aligned.' },
    ],
  },
  {
    icon: HiOutlineCog,
    phase: 'Produce',
    tagline: 'Flawless Execution',
    desc: 'Our production team handles logistics that make it happen on time and on budget.',
    items: [
      { title: 'Vendor Coordination', text: 'All partners managed under one timeline — catering, AV, décor, security, and more.' },
      { title: 'Venue Sourcing', text: 'Shortlisting and negotiation across Bangalore based on capacity, budget, and date.' },
      { title: 'Audio Visual', text: 'Sound, screens, streaming, and technical rehearsals for in-person and hybrid formats.' },
      { title: 'Catering Management', text: 'Menu planning and service coordination with vetted partners for your event scale.' },
      { title: 'On-Ground Management', text: 'Dedicated command centre on event day — timeline control, issue resolution, guest flow.' },
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        label="How We Work"
        title="Full Range of Work"
        description="Every event moves through three stages — from creative vision to flawless on-ground delivery. Here is what each stage covers."
      />

      {stages.map((stage, idx) => (
        <section
          key={stage.phase}
          className="section"
          style={{ background: idx % 2 === 0 ? 'var(--white)' : 'var(--cream)' }}
        >
          <div className="container">
            <div className="process-stage-grid">
              <div style={{ position: 'sticky', top: 100 }}>
                <div style={{
                  width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--navy)', color: 'var(--gold-light)', borderRadius: 4, marginBottom: 20,
                }}>
                  <stage.icon size={28} />
                </div>
                <span className="section-label">Stage 0{idx + 1}</span>
                <h2 className="section-title">{stage.phase}</h2>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
                  {stage.tagline}
                </p>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>{stage.desc}</p>
              </div>
              <div>
                {stage.items.map((item, i) => (
                  <div key={item.title} style={{
                    display: 'flex', gap: 20, padding: '24px 0',
                    borderBottom: i < stage.items.length - 1 ? '1px solid rgba(30,45,62,0.08)' : 'none',
                  }}>
                    <span style={{
                      flexShrink: 0, fontFamily: 'var(--font-serif)', fontSize: '1.2rem',
                      fontWeight: 700, color: 'var(--gold)', width: 32,
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--navy)', marginBottom: 6 }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', lineHeight: 1.7 }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTA
        title="Ready to Start Your Event Journey?"
        description="Tell us about your celebration and we will walk you through our process step by step."
        primaryLabel="Book a Consultation"
      />
    </>
  );
}
