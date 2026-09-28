import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'

export default function WorkPage() {
  return (
    <div className="section-wrapper">
      <Container>
        <SectionHeader
          eyebrow="MY PORTFOLIO"
          titlePrefix="Featured"
          accentWord="Projects"
          description="A selection of things I've designed, built, experimented with, and occasionally broken before fixing."
        />
      </Container>
    </div>
  )
}
