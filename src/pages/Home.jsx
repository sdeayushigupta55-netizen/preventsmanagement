import HeroEditorial from '../components/home/HeroEditorial';
import ServicePanels from '../components/home/ServicePanels';
import StorySection from '../components/home/StorySection';
import QuoteSpotlight from '../components/home/QuoteSpotlight';
import HomeClosing from '../components/home/HomeClosing';
import '../styles/home-v2.css';

export default function Home() {
  return (
    <>
      <HeroEditorial />
      <ServicePanels />
      <StorySection />
      <QuoteSpotlight />
      <HomeClosing />
    </>
  );
}
