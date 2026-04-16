'use client'

import { useRef, useEffect, useState } from 'react'

const STEPS = [
  {
    n: '01',
    icon: '🔍',
    title: 'Бесплатный разбор',
    desc: 'Анализируем бизнес, нишу, конкурентов. Показываем точки потери клиентов.',
    time: '15 минут',
    color: '#6C47FF',
  },
  {
    n: '02',
    icon: '📐',
    title: 'Стратегия и КП',
    desc: 'Конкретный план: каналы, бюджет, прогноз результата. Без воды.',
    time: '1–2 дня',
    color: '#00D4FF',
  },
  {
    n: '03',
    icon: '⚡',
    title: 'Запуск за 72 часа',
    desc: 'Первые заявки уже через 3 дня. Тестируем, настраиваем, оптимизируем.',
    time: '3 дня',
    color: '#00FF94',
  },
  {
    n: '04',
    icon: '📈',
    title: 'Рост и масштаб',
    desc: 'Еженедельные отчёты, A/B-тесты, масштабирование лучших связок.',
    time: 'Постоянно',
    color: '#FFB547',
  },
]

export function Process() {
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
      className="py-24 overflow-hidden"
      style={{ background: '#04030D' }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(24px)',
            transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#6C47FF' }}>
            Как работаем
          </p>
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}>
            От звонка до заявки —{' '}
            <span style={{
              background: 'linear-gradient(135deg, #8B6FFF, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              3 дня
            </span>
          </h2>
          <p style={{ color: 'rgba(232,230,255,0.50)' }}>
            Прозрачный процесс. Никакой бюрократии. Результат на каждом шаге.
          </p>
        </div>

        {/* Шаги */}
        <div className="relative">
          {/* Линия-коннектор */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px mx-24"
            style={{
              background: 'linear-gradient(90deg, #6C47FF, #00D4FF, #00FF94, #FFB547)',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.8s 0.3s',
            }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(32px)',
                  transition: `opacity 0.5s ${i * 0.12}s cubic-bezier(0.16,1,0.3,1),
                               transform 0.5s ${i * 0.12}s cubic-bezier(0.16,1,0.3,1)`,
                }}
              >
                {/* Круг с иконкой */}
                <div className="relative z-10 mb-6">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl
                               transition-transform duration-300 hover:scale-110"
                    style={{
                      background: `${step.color}15`,
                      border: `1px solid ${step.color}35`,
                      boxShadow: `0 0 30px ${step.color}20`,
                    }}
                  >
                    {step.icon}
                  </div>
                  {/* Номер */}
                  <div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center
                               text-xs font-bold text-white"
                    style={{ background: step.color, boxShadow: `0 4px 12px ${step.color}60` }}
                  >
                    {step.n}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: 'rgba(232,230,255,0.50)' }}
                >
                  {step.desc}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ background: `${step.color}12`, color: step.color, border: `1px solid ${step.color}25` }}
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {step.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="text-center mt-16"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s 0.6s' }}
        >
          <a
            href="#lead-form"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-white
                       text-base transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #6C47FF, #00D4FF)',
              boxShadow: '0 8px 32px rgba(108,71,255,0.40)',
            }}
          >
            Начать бесплатный разбор
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}