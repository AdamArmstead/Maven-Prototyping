import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Throughline from '@/components/Throughline'
import HowILead from '@/components/HowILead'
import Work from '@/components/Work'
import Timeline from '@/components/Timeline'
import Voices from '@/components/Voices'
import Recognition from '@/components/Recognition'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'
import RevealInit from '@/components/RevealInit'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Throughline />
        <HowILead />
        <Work />
        <Timeline />
        <Voices />
        <Recognition />
        <Connect />
      </main>
      <Footer />
      <RevealInit />
    </>
  )
}
