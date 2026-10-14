import PageHero from '../components/PageHero';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Let's Plan Your Celebration"
        description="Share your event details and our team will respond with a customized proposal. We are based in JP Nagar, Bangalore and serve clients across the city."
        ctaText={null}
        compact
      />
      <Contact standalone />
    </>
  );
}
