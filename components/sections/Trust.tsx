'use client'

import { useRef, useEffect, useState } from 'react'

const REVIEWS = [
  {
    name: 'Алексей П.',
    role: 'Стройматериалы',
    avatar: 'АП',
    rating: 5,
    text: 'Директ запустили за 3 дня. CPL упал с 2800 до 940 рублей. Каждую неделю отчёт с реальными цифрами — никакой воды.',
    service: 'Яндекс.Директ',
    color: '#FF6B35',
  },
  {
    name: 'Марина К.',
    role: 'Студия красоты',
    avatar: 'МК',
    rating: 5,
    text: 'Telegram-бот окупился за первый месяц. Конверсия в запись +67%, два администратора теперь занимаются другим.',
    service: 'Telegram-бот',
    color: '#00D4FF',
  },
  {
    name: 'Сергей В.',
    role: 'Wildberries-продавец',
    avatar: 'СВ',
    rating: 5,
    text: 'Вышли на Ozon с нуля. Через 90 дней — 187 продаж в месяц вместо 43. Сделали карточки, SEO и рекламу.',
    service: 'Маркетплейсы',
    color: '#A855F7',
  },
  {
    name: 'Ирина Т.',
    role: 'Интернет-магазин',
    avatar: 'ИТ',
    rating: 5,
    text: '890 заявок в первый месяц по 180 рублей. До этого у другого агентства платили 1500 за заявку.',
    service: 'Реклама ВК',
    color: '#4A90D9',
  },
]

const GUARANTEES = [
  { icon: '📈', title: 'KPI в договоре',        desc: 'Прописываем цели. Не выполнили — компенсируем.' },
  { icon: '📊', title: 'Еженедельные отчёты',    desc: 'Реальные цифры без воды и приукрашивания.' },
  { icon: '⚡', title: 'Запуск за 72 часа',      desc: 'Первые заявки через 3 дня после старта.' },
  { icon: '🔒', title: 'Фиксированная цена',     desc: 'Никаких скрытых платежей в конце месяца.' },
]

export function Trust() {
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

  return (
    <section
      ref={ref}
      className="py-24"
      style={{ background: '#080718' }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="text-center max-w-xl mx-auto mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(24px)',
            transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#00FF94' }}>
            Социальное доказательство
          </p>
          <h2 className="font-display text-white" style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
            120 клиентов.<br/>
            <span style={{
              background: 'linear-gradient(135deg, #8B6FFF, #00FF94)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Реальные отзывы.
            </span>
          </h2>
        </div>

        {/* Отзывы */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="flex flex-col p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.5s ${i * 0.08}s cubic-bezier(0.16,1,0.3,1),
                             transform 0.5s ${i * 0.08}s cubic-bezier(0.16,1,0.3,1),
                             border-color 0.3s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${r.color}44`
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
              }}
            >
              {/* Автор */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: `${r.color}33`, border: `1px solid ${r.color}55` }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{r.name}</p>
                  <p className="text-xs" style={{ color: 'rgba(232,230,255,0.45)' }}>{r.role}</p>
                </div>
              </div>

              {/* Звёзды */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(r.rating)].map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5 fill-current text-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'rgba(232,230,255,0.60)' }}>
                «{r.text}»
              </p>

              <span
                className="inline-block text-xs font-bold px-2.5 py-1 rounded-lg w-fit"
                style={{ background: `${r.color}15`, color: r.color, border: `1px solid ${r.color}30` }}
              >
                {r.service}
              </span>
            </div>
          ))}
        </div>

        {/* Гарантии */}
        <div
          className="rounded-3xl p-8 lg:p-12"
          style={{
            background: 'linear-gradient(145deg, rgba(108,71,255,0.10), rgba(0,212,255,0.05))',
            border: '1px solid rgba(108,71,255,0.20)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s 0.4s',
          }}
        >
          <h3
            className="font-display text-white text-center mb-10"
            style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
          >
            Наши гарантии
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUARANTEES.map((g, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-3">{g.icon}</div>
                <h4 className="font-bold text-white mb-2 text-sm">{g.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,230,255,0.50)' }}>
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}