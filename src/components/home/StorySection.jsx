import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SITE } from '../../data/site';
import { Reveal, StaggerContainer, StaggerItem } from '../animations/Reveal';

const steps = [
  { num: '01', title: 'Discover', text: 'We listen to your vision, budget, and guest expectations.' },
  { num: '02', title: 'Design', text: 'Custom themes, décor concepts, and a detailed production plan.' },
  { num: '03', title: 'Deliver', text: 'Flawless on-ground execution with a dedicated coordinator.' },
];

export default function StorySection() {
  return (
    <section className="story section">
      <div className="container story__grid">
        <Reveal className="story__left">
          <span className="section-label">Our Story</span>
          <h2 className="section-title">
            Hospitality Is<br />Our Language
          </h2>
          <p className="story__text">
            Kalav Hospitality by {SITE.tagline} was built on a simple belief —
            you should enjoy your own celebration. Based in JP Nagar, Bangalore,
            we manage everything from intimate birthdays to multi-day weddings
            with the same care and precision.
          </p>
          <Link to="/about" className="story__link">
            Read Our Story →
          </Link>
        </Reveal>

        <div className="story__right">
          <StaggerContainer className="story__steps" stagger={0.15}>
            {steps.map((step) => (
              <StaggerItem key={step.num}>
                <motion.div
                  className="story__step"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="story__step-num">{step.num}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <motion.div
            className="story__badge"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <img src="/logo.png" alt="" className="story__badge-logo" />
            <div>
              <strong>{SITE.tagline}</strong>
              <span>Premium Event Solutions</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
