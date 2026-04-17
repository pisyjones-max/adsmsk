'use client';
import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'AdsMsk — Трафик. Автоматизация. Рост продаж.',
  description:
    'Яндекс.Директ, реклама ВКонтакте, Telegram-боты, Wildberries/Ozon, разработка сайтов. 120+ проектов. Снижаем стоимость заявки. Москва и вся РФ.',
  alternates: { canonical: 'https://ads.msk.ru' },
  openGraph: {
    title: 'AdsMsk — Трафик. Автоматизация. Рост продаж.',
    description:
      'Яндекс.Директ, ВКонтакте, Telegram-боты, маркетплейсы. 120+ проектов. Москва.',
    url: 'https://ads.msk.ru',
    type: 'website',
  },
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