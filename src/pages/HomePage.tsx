import { HeroSection } from '../components/home/HeroSection'
import { SkillsSection } from '../components/home/SkillsSection'
import { FeaturedProjectsSection } from '../components/home/FeaturedProjectsSection'
import { ServicesSection } from '../components/home/ServicesSection'
import { ContactSection } from '../components/home/ContactSection'

export default function HomePage() {
  return (
    <div className="home-page-container">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Skills & Technologies Preview */}
      <SkillsSection />

      {/* 3. Featured Projects */}
      <FeaturedProjectsSection />

      {/* 4. My Services */}
      <ServicesSection />

      {/* 5. Contact Section */}
      <ContactSection />
    </div>
  )
}
