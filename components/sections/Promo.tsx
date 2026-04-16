'use client'

import { useEffect, useState, useRef } from 'react'

function pad(n: number) { return String(n).padStart(2, '0') }

function getDeadline(): Date {
  const d = new Date()
  const daysUntilThursday = (4 - d.getDay() + 7) % 7 || 7
  d.setDate(d.getDate() + daysUntilThursday)
  d.setHours(23, 59, 59, 999)
  return d
}

export function Promo() {
  const deadlineRef = useRef(getDeadline())
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 })
  const [spots] = useState(3)

  useEffect(() => {
    const tick = () => {
      let diff = deadlineRef.current.getTime() - Date.now()
      if (diff <= 0) {
        deadlineRef.current = getDeadline()
        diff = deadlineRef.current.getTime() - Date.now()
      }
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const segments = [
    { v: t.d, l: 'дн' },
    { v: t.h, l: 'ч'  },
    { v: t.m, l: 'мин'},
    { v: t.s, l: 'сек'},
  ]

  return (
    <section className="py-10" style={{ background: '#04030D' }}>
      <div className="container mx-auto px-4">
        <div
          className="relative overflow-hidden rounded-3xl p-8 lg:p-12"
          style={{
            background: 'linear-gradient(135deg, #0E0C22 0%, #16103A 100%)',
            border: '1px solid rgba(108,71,255,0.25)',
          }}
        >
          {/* Фоновые блобы */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(ellipse 50% 80% at 0% 50%, rgba(108,71,255,0.15) 0%, transparent 60%),
                radial-gradient(ellipse 30% 60% at 100% 50%, rgba(0,212,255,0.10) 0%, transparent 60%)
              `,
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left */}
            <div className="text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
                style={{
                  background: 'rgba(255,77,109,0.15)',
                  border: '1px solid rgba(255,77,109,0.30)',
                  color: '#FF4D6D',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#FF4D6D', animation: 'pulseGlow 1.5s ease-in-out infinite' }}
                />
                Осталось {spots} места на этой неделе
              </div>
              <h2
                className="font-display text-white mb-3"
                style={{ fontSize: 'clamp(26px, 4vw, 42px)' }}
              >
                Скидка{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #FFB547, #FF6B35)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  25%
                </span>{' '}
                на первый месяц
              </h2>
              <p style={{ color: 'rgba(232,230,255,0.55)', maxWidth: '420px' }}>
                Новым клиентам — скидка 25% на любую услугу.
                Начните получать заявки уже через 72 часа.
              </p>
            </div>

            {/* Right — таймер */}
            <div className="text-center flex-shrink-0">
              <p
                className="text-xs uppercase tracking-widest mb-4 font-semibold"
                style={{ color: 'rgba(232,230,255,0.35)' }}
              >
                До конца акции
              </p>

              <div className="flex items-center gap-2 mb-6">
                {segments.map((seg, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center font-display text-2xl text-white"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {pad(seg.v)}
                    </div>
                    <span
                      className="text-xs mt-1.5 font-medium"
                      style={{ color: 'rgba(232,230,255,0.35)' }}
                    >
                      {seg.l}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#lead-form"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white
                           text-base transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #6C47FF, #00D4FF)',
                  boxShadow: '0 8px 32px rgba(108,71,255,0.45)',
                }}
              >
                Забронировать скидку →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}