import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import CTA from '../components/CTA';
import { galleryCategories, galleryItems } from '../data/gallery';

export default function GalleryPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === active);

  return (
    <>
      <PageHero
        label="Portfolio"
        title="Our Work Speaks for Itself"
        description="A glimpse into the celebrations we craft — from corporate stages to wedding mandaps and birthday wonderlands."
        ctaText={null}
        image="/images/gallery/wedding-reception.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`gallery-filter ${active === cat ? 'gallery-filter--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            className="gallery-grid"
            layout
            key={active}
          >
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                className="gallery-item"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <div className="gallery-item__bg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-item__img"
                    loading="lazy"
                  />
                </div>
                <div className="gallery-item__overlay">
                  <span className="gallery-item__category">{item.category}</span>
                  <h3 className="gallery-item__title">{item.title}</h3>
                  <p className="gallery-item__desc">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <p className="gallery-note">
            Sample event photography for demonstration — your own gallery photos can be added anytime.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
