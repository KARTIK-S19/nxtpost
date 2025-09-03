import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import AnimatedHero from '@/components/AnimatedHero'
import SplineComponent from '@/components/Spline'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <main className="bg-slate-900 text-white overflow-hidden">
      <Navbar />
      <AnimatedHero />
      <SplineComponent />
      <Features />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}