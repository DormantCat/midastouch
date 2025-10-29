import { Hero } from "@/app/v1/components/hero"
import { Benefits } from "@/app/v1/components/benefits"
import { CaseStudies } from "@/app/v1/components/case-studies"
import { Services } from "@/app/v1/components/services"
import { CTASection } from "@/app/v1/components/cta-section"
import { Footer } from "@/app/v1/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <CaseStudies />
      <Services />
      <CTASection />
      <Footer />
    </main>
  )
}
