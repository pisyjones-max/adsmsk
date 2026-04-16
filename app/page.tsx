import { Hero }       from '@/components/sections/Hero'
import { Metrics }    from '@/components/sections/Metrics'
import { PainPoints } from '@/components/sections/PainPoints'
import { Services }   from '@/components/sections/Services'
import { Process }    from '@/components/sections/Process'
import { Cases }      from '@/components/sections/Cases'
import { Trust }      from '@/components/sections/Trust'
import { Promo }      from '@/components/sections/Promo'
import { LeadForm }   from '@/components/sections/LeadForm'
import { Subscribe }  from '@/components/sections/Subscribe'
import { Footer }     from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AdsMsk — Трафик. Автоматизация. Рост продаж.',
  alternates: { canonical: 'https://ads.msk.ru' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <PainPoints />
      <Services />
      <Process />
      <Cases />
      <Trust />
      <Promo />
      <LeadForm />
      <Subscribe />
      <Footer />
    </>
  )
}