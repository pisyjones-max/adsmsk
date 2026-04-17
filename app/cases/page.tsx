'use client';
import type { Metadata } from 'next'
import Link              from 'next/link'
import { Cases }         from '@/components/sections/Cases'
import { LeadForm }      from '@/components/sections/LeadForm'
import { Footer }        from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Кейсы — реальные результаты клиентов AdsMsk',
  description:
    'Кейсы AdsMsk: Яндекс.Директ, Wildberries/Ozon, Telegram-боты, реклама ВКонтакте. Реальные цифры: CPL, ROI, рост продаж.',
  alternates: { canonical: 'https://ads.msk.ru/cases' },
  openGraph: {
    title: 'Кейсы AdsMsk — реальные результаты',
    description:
      'CPL −65%, продажи ×3, конверсия +67%. Смотрите кейсы наших клиентов.',
    url: 'https://ads.msk.ru/cases',
    type: 'website',
  },
}

const STATS = [
  { value: '120+',  label: 'проектов',        color: '#8B6FFF' },
  { value: '−65%',  label: 'CPL в среднем',   color: '#00D4FF' },
  { value: '+335%', label: 'рост продаж',      color: '#00FF94' },
  { value: '4.9★',  label: 'оценка клиентов', color: '#FFB547' },
]

function CasesHero() {
  return (
    <section
      style={{
        paddingTop: '140px',
        paddingBottom: '60px',
        background:
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,71,255,0.22) 0%, transparent 65%), #04030D',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <nav
          aria-label="Breadcrumb"
          className="flex justify-center items-center gap-2 text-sm mb-8"
          style={{ color: 'rgba(232,230,255,0.40)' }}
        >
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-white"
          >
            Главная
          </Link>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span style={{ color: 'rgba(232,230,255,0.70)' }}>Кейсы</span>
        </nav>

        <p
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: '#00D4FF' }}
        >
          Реальные результаты
        </p>

        <h1
          className="font-display text-white mb-5"
          style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
        >
          Кейсы с{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #8B6FFF, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            цифрами
          </span>
        </h1>

        <p
          className="text-lg max-w-xl mx-auto mb-10"
          style={{ color: 'rgba(232,230,255,0.55)' }}
        >
          Не обещания — конкретные результаты. Яндекс.Директ, маркетплейсы,
          Telegram-боты, реклама ВКонтакте.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="text-center px-6 py-4 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                minWidth: '120px',
              }}
            >
              <p
                className="text-2xl font-display font-bold"
                style={{ color: s.color }}
              >
                {s.value}
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: 'rgba(232,230,255,0.45)' }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CasesPage() {
  return (
    <>
      <CasesHero />
      <Cases />
      <LeadForm />
      <Footer />
    </>
  )
}