import ProjectsSection from '@/components/sections/projects/projects-section';
import ContactSection from '@/components/sections/contact/contact-section';
import SkillsSection from '@/components/sections/skills/skills-section';
import AboutSection from '@/components/sections/about/about-section';
import StampSection from '@/components/sections/stamp/stamp-section';
import HeroSection from '@/components/sections/hero/hero-section';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <StampSection />
    </div>
  );
}
