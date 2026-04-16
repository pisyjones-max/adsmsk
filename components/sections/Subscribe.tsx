'use client'

import { useState, useRef, useEffect } from 'react'

const MAGNETS = [
  { icon: '📋', title: 'Чек-лист 15 ошибок в рекламе',     desc: 'PDF · 5 страниц' },
  { icon: '📊', title: 'Шаблон юнит-экономики',             desc: 'Google Sheets' },
  { icon: '🤖', title: 'Гайд по Telegram-ботам для продаж', desc: 'PDF · 12 страниц' },
]

type Status = 'idle' | 'loading' | 'ok' | 'err'

export function Subscribe() {
  const [chosen, setChosen] = useState(0)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
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

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, leadMagnet: MAGNETS[chosen].title }),
      })
      setStatus('ok')
    } catch {
      setStatus('err')
    }
  }

  return (
    <section
      ref={ref}
      className="py-24"
      style={{ background: '#080718' }}
    >
      <div className="container mx-auto px-4">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-8 lg:p-14 transition-all duration-700"
          style={{
            background: 'linear-gradient(145deg, rgba(108,71,255,0.10), rgba(0,212,255,0.05))',
            border: '1px solid rgba(108,71,255,0.20)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(32px)',
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#00D4FF' }}>
                Бесплатные материалы
              </p>
              <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
                Получите полезный материал прямо сейчас
              </h2>
              <p className="mb-8 text-sm leading-relaxed" style={{ color: 'rgba(232,230,255,0.50)' }}>
                Выберите актуальное для вашего бизнеса — пришлём на email бесплатно, без спама.
              </p>

              {/* Выбор */}
              <div className="flex flex-col gap-3">
                {MAGNETS.map((m, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setChosen(i)}
                    className="flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200"
                    style={chosen === i ? {
                      background: 'rgba(108,71,255,0.20)',
                      border: '1px solid rgba(108,71,255,0.45)',
                    } : {
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <span className="text-2xl flex-shrink-0">{m.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-semibold text-sm leading-snug"
                        style={{ color: chosen === i ? '#E8E6FF' : 'rgba(232,230,255,0.70)' }}
                      >
                        {m.title}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'rgba(232,230,255,0.35)' }}>
                        {m.desc}
                      </p>
                    </div>
                    {chosen === i && (
                      <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#6C47FF' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right — форма */}
            <div>
              {status === 'ok' ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-white mb-2">Готово!</h3>
                  <p className="text-sm" style={{ color: 'rgba(232,230,255,0.55)' }}>
                    Проверьте почту — материал уже там.<br/>
                    Если не видите — загляните в «Спам».
                  </p>
                  <a
                    href="https://t.me/adsmsk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90"
                    style={{
                      background: 'rgba(0,212,255,0.15)',
                      border: '1px solid rgba(0,212,255,0.35)',
                      color: '#00D4FF',
                    }}
                  >
                    Подписаться на Telegram-канал →
                  </a>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: 'rgba(232,230,255,0.55)' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ivan@example.com"
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-white transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.10)',
                        outline: 'none',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(108,71,255,0.60)'
                        e.target.style.background = 'rgba(108,71,255,0.08)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.10)'
                        e.target.style.background = 'rgba(255,255,255,0.06)'
                      }}
                    />
                  </div>

                  {status === 'err' && (
                    <p className="text-xs" style={{ color: '#FF4D6D' }}>
                      Ошибка. Попробуйте позже или напишите нам в Telegram.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-2xl font-bold text-white transition-all duration-300
                               hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ background: 'linear-gradient(135deg, #6C47FF, #00D4FF)' }}
                  >
                    {status === 'loading'
                      ? 'Отправляем...'
                      : `Получить: ${MAGNETS[chosen].icon} ${MAGNETS[chosen].title}`}
                  </button>

                  <p className="text-xs text-center" style={{ color: 'rgba(232,230,255,0.28)' }}>
                    Никакого спама. Соглашаетесь с{' '}
                    <a href="/personal" className="underline" style={{ color: 'rgba(232,230,255,0.45)' }}>
                      политикой конфиденциальности
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}