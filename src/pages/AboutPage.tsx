import { SectionHeader } from '../components/ui/SectionHeader'
import { Container } from '../components/ui/Container'

export default function AboutPage() {
  return (
    <div className="section-wrapper">
      <Container>
        <SectionHeader
          eyebrow="ABOUT ME"
          titlePrefix="I Build Things Where"
          accentWord="Design"
          titleSuffix="Meets Technology."
          description="A computer science student and developer interested in the intersection of software, artificial intelligence, design, and real-world products."
        />
      </Container>
    </div>
  )
}
