import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Industries } from '@/components/industries'
import { Destinations } from '@/components/destinations'
import { Process } from '@/components/process'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Jobs } from '@/components/jobs'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ job?: string; category?: string }>
}) {
  const { job, category } = await searchParams

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Industries />
        <Destinations />
        <Process />
        <WhyChooseUs />
        <Jobs />
        <Testimonials />
        <Faq />
        <Contact job={job} category={category} />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
