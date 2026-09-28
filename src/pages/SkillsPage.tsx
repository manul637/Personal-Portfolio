import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'

export default function SkillsPage() {
  return (
    <div className="section-wrapper">
      <Container>
        <SectionHeader
          eyebrow="MY EXPERTISE"
          titlePrefix="Skills &"
          accentWord="Technologies"
          description="Tools I use to turn ideas into fast, scalable and polished digital experiences."
        />
      </Container>
    </div>
  )
}
