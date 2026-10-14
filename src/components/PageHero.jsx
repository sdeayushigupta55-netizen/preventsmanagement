import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

export default function PageHero({
  label,
  title,
  description,
  ctaText = 'Plan Your Event',
  ctaLink = '/contact',
  compact = false,
  image,
  breadcrumb,
}) {
  return (
    <section className={`page-hero ${compact ? 'page-hero--compact' : ''} ${image ? 'page-hero--photo' : ''}`}>
      <div className="page-hero__bg">
        {image ? (
          <img src={image} alt="" className="page-hero__photo" loading="eager" />
        ) : null}
        <div className="page-hero__overlay" />
        <div className="page-hero__pattern" />
      </div>
      <div className="container page-hero__content">
        {breadcrumb}
        {label && <span className="page-hero__label">{label}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {description && <p className="page-hero__desc">{description}</p>}
        {ctaText ? (
          <Link to={ctaLink} className="btn btn-primary">
            {ctaText} <HiArrowRight />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
