import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'

export default function ServicesPage() {
  return (
    <div className="section-wrapper">
      <Container>
        <SectionHeader
          eyebrow="WHAT I DO"
          titlePrefix="My"
          accentWord="Services"
          description="Transforming ideas into powerful digital solutions with creativity and precision."
        />
      </Container>
    </div>
  )
}
