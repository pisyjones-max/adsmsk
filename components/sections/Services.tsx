'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const CATS = ['Все', 'Реклама', 'Маркетплейсы', 'Автоматизация', 'Разработка']

const SERVICES = [
  {
    cat: 'Реклама', hot: true,
    gradient: 'linear-gradient(135deg, #FF6B35, #FF4D6D)',
    icon: '📡',
    title: 'Яндекс.Директ',
    tagline: 'Горячие заявки из поиска',
    desc: 'Поиск + РСЯ. Семантика, объявления, оптимизация. Первые заявки через 72 часа.',
    result: '−65% CPL',
    href: '/services/context-ads',
  },
  {
    cat: 'Реклама',
    gradient: 'linear-gradient(135deg, #4A90D9, #6C47FF)',
    icon: '🎯',
    title: 'Реклама ВКонтакте',
    tagline: 'Целевая аудитория РФ',
    desc: 'Аудитории, креативы, воронки. Работаем без Google и Facebook.',
    result: 'CTR до 3.5%',
    href: '/services/target-ads',
  },
  {
    cat: 'Маркетплейсы', hot: true,
    gradient: 'linear-gradient(135deg, #A855F7, #EC4899)',
    icon: '🛍️',
    title: 'Wildberries / Ozon',
    tagline: 'Выход и рост продаж ×3',
    desc: 'SEO карточек, контент, юнит-экономика, реклама. Ведение под ключ.',
    result: '+335% за 90 дней',
    href: '/services/marketplaces',
  },
  {
    cat: 'Автоматизация', hot: true,
    gradient: 'linear-gradient(135deg, #00D4FF, #0088FF)',
    icon: '🤖',
    title: 'Telegram-боты',
    tagline: 'Замените менеджера на бота',
    desc: 'Продажи, запись, консультации, CRM-интеграции. Работа 24/7 без выходных.',
    result: 'Конверсия +67%',
    href: '/services/telegram-bots',
  },
  {
    cat: 'Автоматизация',
    gradient: 'linear-gradient(135deg, #00FF94, #00D4FF)',
    icon: '📲',
    title: 'Автопостинг',
    tagline: 'Вы ведёте бизнес — мы контент',
    desc: 'Автопостинг Telegram + ВКонтакте. Контент-план, тексты, аналитика.',
    result: 'Охват ×5',
    href: '/services/autoposting',
  },
  {
    cat: 'Разработка',
    gradient: 'linear-gradient(135deg, #6C47FF, #A855F7)',
    icon: '⚡',
    title: 'Сайты и лендинги',
    tagline: 'Lighthouse 90+ с первого дня',
    desc: 'Next.js, SEO-структура, конверсионный дизайн. Быстро и надёжно.',
    result: 'LCP < 2.5s',
    href: '/services/websites',
  },
  {
    cat: 'Автоматизация',
    gradient: 'linear-gradient(135deg, #FFB547, #FF6B35)',
    icon: '🗂',
    title: 'CRM и автоматизация',
    tagline: 'Система вместо хаоса',
    desc: 'amoCRM, Битрикс24, интеграции с ботами. 80% рутины — автоматически.',
    result: '80% рутины авто',
    href: '/services/crm',
  },
]

export function Services() {
  const [cat, setCat] = useState('Все')
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.05 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const filtered = cat === 'Все' ? SERVICES : SERVICES.filter((s) => s.cat === cat)

  return (
    <section
      ref={ref}
      id="services"
      className="py-24"
      style={{
        background: `
          radial-gradient(ellipse 50% 60% at 10% 50%, rgba(108,71,255,0.08) 0%, transparent 60%),
          #080718
        `,
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(24px)',
            transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#6C47FF' }}>
            Наши услуги
          </p>
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}>
            Не «услуги» —{' '}
            <span style={{
              background: 'linear-gradient(135deg, #8B6FFF, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              результаты
            </span>
          </h2>
          <p style={{ color: 'rgba(232,230,255,0.55)' }}>
            Каждое направление — система с измеримым ростом, а не разовая работа
          </p>
        </div>

        {/* Фильтр */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={cat === c ? {
                background: 'linear-gradient(135deg, #6C47FF, #00D4FF)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(108,71,255,0.40)',
              } : {
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(232,230,255,0.60)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Карточки */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((s, i) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative flex flex-col p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.5s ${i * 0.06}s cubic-bezier(0.16,1,0.3,1),
                             transform 0.5s ${i * 0.06}s cubic-bezier(0.16,1,0.3,1),
                             border-color 0.3s, box-shadow 0.3s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(108,71,255,0.40)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.40), 0 0 0 1px rgba(108,71,255,0.20)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              {s.hot && (
                <span
                  className="absolute -top-3 left-4 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ background: 'linear-gradient(135deg, #FF4D6D, #FFB547)' }}
                >
                  🔥 Топ
                </span>
              )}

              {/* Иконка */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4
                           group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                style={{ background: `${s.gradient}22`, border: '1px solid rgba(255,255,255,0.10)' }}
              >
                {s.icon}
              </div>

              <h3
                className="font-bold text-white text-base mb-1 group-hover:text-transparent transition-all duration-300"
                style={{
                  backgroundImage: s.gradient,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                {s.title}
              </h3>
              <p className="text-xs font-semibold mb-3" style={{ color: '#00D4FF' }}>{s.tagline}</p>
              <p className="text-sm flex-1 mb-4 leading-relaxed" style={{ color: 'rgba(232,230,255,0.50)' }}>
                {s.desc}
              </p>

              <div
                className="flex items-center justify-between pt-4"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: '#00FF94' }}
                >
                  ✓ {s.result}
                </span>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center
                             group-hover:translate-x-1 transition-transform"
                  style={{ background: 'rgba(108,71,255,0.20)', color: '#8B6FFF' }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}