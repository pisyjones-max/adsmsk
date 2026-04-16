'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const FILTERS = ['Все', 'Яндекс.Директ', 'Маркетплейсы', 'Telegram-бот', 'ВКонтакте']

const CASES = [
  {
    filter: 'Яндекс.Директ',
    niche: 'Строительные материалы',
    emoji: '🏗️',
    title: 'Снизили стоимость заявки в 3 раза',
    before: { label: 'CPL', value: '2 800 ₽' },
    after:  { label: 'CPL', value: '940 ₽' },
    metric: '−66%',
    metricColor: '#00FF94',
    period: '2 месяца',
    desc: 'Перенастроили Директ с нуля: минус-слова, новые объявления, РСЯ.',
    href: '/cases/stroymat-direct',
    gradient: 'linear-gradient(135deg, #FF6B35, #FF4D6D)',
  },
  {
    filter: 'Маркетплейсы',
    niche: 'Мебель и декор',
    emoji: '🛋️',
    title: 'Ozon: продажи ×3 за 90 дней',
    before: { label: 'Продаж/мес', value: '43 шт' },
    after:  { label: 'Продаж/мес', value: '187 шт' },
    metric: '+335%',
    metricColor: '#00FF94',
    period: '3 месяца',
    desc: 'SEO карточек, инфографика, реклама внутри Ozon, юнит-экономика.',
    href: '/cases/novation-ozon',
    gradient: 'linear-gradient(135deg, #A855F7, #EC4899)',
  },
  {
    filter: 'Telegram-бот',
    niche: 'Услуги красоты',
    emoji: '💅',
    title: 'Бот заменил двух администраторов',
    before: { label: 'Конверсия в запись', value: '12%' },
    after:  { label: 'Конверсия в запись', value: '34%' },
    metric: '+183%',
    metricColor: '#00FF94',
    period: '1 месяц',
    desc: 'Бот для записи, напоминания, CRM-интеграция. Работает 24/7.',
    href: '/cases/beauty-bot',
    gradient: 'linear-gradient(135deg, #00D4FF, #0088FF)',
  },
  {
    filter: 'ВКонтакте',
    niche: 'Интернет-магазин одежды',
    emoji: '👗',
    title: '890 заявок за месяц из ВКонтакте',
    before: { label: 'Заявок/мес', value: '45' },
    after:  { label: 'Заявок/мес', value: '890' },
    metric: 'CPL — 180 ₽',
    metricColor: '#00D4FF',
    period: '1 месяц',
    desc: 'Аудитории, воронка через сообщения группы, конвертирующие креативы.',
    href: '/cases/fashion-vk',
    gradient: 'linear-gradient(135deg, #4A90D9, #6C47FF)',
  },
  {
    filter: 'Маркетплейсы',
    niche: 'Электроника',
    emoji: '⚡',
    title: 'Фотоэпиляторы: топ-7 на Ozon',
    before: { label: 'Позиция', value: 'Топ-100' },
    after:  { label: 'Позиция', value: 'Топ-7' },
    metric: '+240% выручка',
    metricColor: '#00FF94',
    period: '2 месяца',
    desc: 'SEO, 3D-фото, видео, реклама маркетплейса. Рост в 3,4 раза.',
    href: '/cases/epilator-ozon',
    gradient: 'linear-gradient(135deg, #FFB547, #FF6B35)',
  },
]

export function Cases() {
  const [active, setActive] = useState('Все')
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

  const filtered = active === 'Все' ? CASES : CASES.filter((c) => c.filter === active)

  return (
    <section
      ref={ref}
      id="cases"
      className="py-24"
      style={{
        background: `
          radial-gradient(ellipse 50% 60% at 90% 20%, rgba(0,212,255,0.07) 0%, transparent 60%),
          #04030D
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
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#00D4FF' }}>
            Реальные результаты
          </p>
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}>
            Кейсы с{' '}
            <span style={{
              background: 'linear-gradient(135deg, #8B6FFF, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              цифрами
            </span>
          </h2>
          <p style={{ color: 'rgba(232,230,255,0.50)' }}>
            Не обещания — конкретные результаты наших клиентов
          </p>
        </div>

        {/* Фильтр */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={active === f ? {
                background: 'linear-gradient(135deg, #6C47FF, #00D4FF)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(108,71,255,0.40)',
              } : {
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(232,230,255,0.55)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Сетка кейсов */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((c, i) => (
            <Link
              key={c.title}
              href={c.href}
              className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.5s ${i * 0.08}s cubic-bezier(0.16,1,0.3,1),
                             transform 0.5s ${i * 0.08}s cubic-bezier(0.16,1,0.3,1),
                             box-shadow 0.3s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.50), 0 0 0 1px rgba(108,71,255,0.25)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(108,71,255,0.30)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
              }}
            >
              {/* Шапка карточки */}
              <div
                className="relative p-6 pb-4 flex items-start justify-between"
                style={{ background: `${c.gradient.replace('linear-gradient(135deg, ', '').split(',')[0].trim()}12` }}
              >
                {/* Градиентная полоска сверху */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: c.gradient }}
                />
                <div>
                  <span
                    className="inline-block text-xs font-bold px-2.5 py-1 rounded-lg mb-3"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(232,230,255,0.60)' }}
                  >
                    {c.filter} · {c.niche}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {c.title}
                  </h3>
                </div>
                <span className="text-3xl flex-shrink-0 ml-3">{c.emoji}</span>
              </div>

              {/* Было / Стало */}
              <div className="px-6 py-4 grid grid-cols-2 gap-3">
                <div
                  className="rounded-xl p-3 text-center"
                  style={{ background: 'rgba(255,77,109,0.08)', border: '1px solid rgba(255,77,109,0.15)' }}
                >
                  <p className="text-xs font-bold mb-1" style={{ color: '#FF4D6D' }}>БЫЛО</p>
                  <p className="text-xs mb-1" style={{ color: 'rgba(232,230,255,0.45)' }}>{c.before.label}</p>
                  <p className="text-lg font-bold" style={{ color: '#FF4D6D' }}>{c.before.value}</p>
                </div>
                <div
                  className="rounded-xl p-3 text-center"
                  style={{ background: 'rgba(0,255,148,0.06)', border: '1px solid rgba(0,255,148,0.15)' }}
                >
                  <p className="text-xs font-bold mb-1" style={{ color: '#00FF94' }}>СТАЛО</p>
                  <p className="text-xs mb-1" style={{ color: 'rgba(232,230,255,0.45)' }}>{c.after.label}</p>
                  <p className="text-lg font-bold" style={{ color: '#00FF94' }}>{c.after.value}</p>
                </div>
              </div>

              {/* Описание */}
              <div className="px-6 pb-4 flex-1">
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,230,255,0.50)' }}>
                  {c.desc}
                </p>
              </div>

              {/* Футер карточки */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-sm font-bold"
                    style={{ color: c.metricColor }}
                  >
                    {c.metric}
                  </span>
                  <span className="text-xs" style={{ color: 'rgba(232,230,255,0.30)' }}>
                    · {c.period}
                  </span>
                </div>
                <span
                  className="text-sm font-semibold flex items-center gap-1 transition-gap duration-200"
                  style={{ color: '#8B6FFF' }}
                >
                  Кейс
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-12"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s 0.5s' }}
        >
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold
                       transition-all duration-200"
            style={{
              background: 'rgba(108,71,255,0.12)',
              border: '1px solid rgba(108,71,255,0.25)',
              color: '#A594FF',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(108,71,255,0.20)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(108,71,255,0.45)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(108,71,255,0.12)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(108,71,255,0.25)'
            }}
          >
            Смотреть все кейсы →
          </Link>
        </div>
      </div>
    </section>
  )
}