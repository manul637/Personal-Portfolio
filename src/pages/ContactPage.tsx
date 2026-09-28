import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'

export default function ContactPage() {
  return (
    <div className="section-wrapper">
      <Container>
        <SectionHeader
          eyebrow="GET IN TOUCH"
          titlePrefix="Contact"
          accentWord="Me"
          description="Have a project, idea, collaboration, or interesting problem? Tell me a little about it."
        />
      </Container>
    </div>
  )
}
