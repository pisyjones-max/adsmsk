'use client'

import { useRef, useState, useEffect } from 'react'

const PAINS = [
  { icon: '💸', title: 'Деньги на рекламу уходят — заявок нет',        desc: 'Директ настроен наобум: деньги списываются, а продаж ноль. Конкуренты забирают ваших клиентов.' },
  { icon: '📦', title: 'Товары на WB/Ozon не продаются',                desc: 'Карточки без SEO, слабые фото, неверная юнит-экономика — вы в минусе с каждой продажи.' },
  { icon: '⏰', title: 'Заявки теряются — клиенты не дожидаются',       desc: 'Пишут ночью, ждут часами. Без автоматизации вы теряете 30–50% обращений.' },
  { icon: '📉', title: 'Нет системы — хаос во всём',                    desc: 'Реклама, соцсети, сайт — всё разрознено. Нет воронки, нет аналитики, нет понимания что работает.' },
  { icon: '📱', title: 'ВКонтакте и Telegram не приносят продаж',       desc: 'Посты редкие, аудитория не растёт, таргет не настроен. Потенциальные клиенты проходят мимо.' },
  { icon: '🔍', title: 'Сайт не ранжируется и не конвертирует',         desc: 'Медленная загрузка, слабое SEO, нет CTA — посетители уходят, не оставив заявку.' },
]

export function PainPoints() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="py-24"
      style={{
        background: `
          radial-gradient(ellipse 60% 50% at 90% 50%, rgba(255,77,109,0.06) 0%, transparent 70%),
          #04030D
        `,
      }}
    >
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div
          className="max-w-2xl mx-auto text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(24px)',
            transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#FF4D6D' }}
          >
            Узнаёте себя?
          </p>
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
          >
            Почему бизнес теряет деньги{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FF4D6D, #FFB547)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              прямо сейчас
            </span>
          </h2>
          <p style={{ color: 'rgba(232,230,255,0.55)' }}>
            Если хотя бы 2 пункта про вас — пора это исправить
          </p>
        </div>

        {/* Карточки */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {PAINS.map((pain, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl cursor-default transition-all duration-400 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.6s ${i * 0.08}s cubic-bezier(0.16,1,0.3,1),
                             transform 0.6s ${i * 0.08}s cubic-bezier(0.16,1,0.3,1),
                             border-color 0.3s, background 0.3s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,77,109,0.35)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,77,109,0.05)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'
              }}
            >
              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl transition-all duration-500"
                style={{
                  width: '0%',
                  background: 'linear-gradient(90deg, #FF4D6D, #FFB547)',
                }}
                ref={(el) => {
                  if (!el) return
                  const parent = el.parentElement
                  parent?.addEventListener('mouseenter', () => { el.style.width = '100%' })
                  parent?.addEventListener('mouseleave', () => { el.style.width = '0%' })
                }}
              />
              <span className="text-3xl block mb-4">{pain.icon}</span>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">{pain.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,230,255,0.50)' }}>
                {pain.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s 0.5s' }}>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white
                       text-base transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #6C47FF, #00D4FF)' }}
          >
            Получить бесплатный разбор → убрать эти проблемы
          </a>
        </div>
      </div>
    </section>
  )
}