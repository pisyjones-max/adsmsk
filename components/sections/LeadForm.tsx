'use client'

import { useState } from 'react'

const SERVICES = [
  'Яндекс.Директ', 'Реклама ВКонтакте', 'Wildberries / Ozon',
  'Telegram-бот', 'Автопостинг', 'Сайт / Лендинг', 'CRM', 'Нужна консультация',
]

type Status = 'idle' | 'loading' | 'ok' | 'err'

export function LeadForm() {
  const [selected, setSelected] = useState<string[]>([])
  const [form, setForm] = useState({ name: '', phone: '' })
  const [status, setStatus] = useState<Status>('idle')

  const toggle = (s: string) =>
    setSelected((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, services: selected }),
      })
      setStatus('ok')
      ;(window as any).ym?.(103922217, 'reachGoal', 'lead_form_submit')
    } catch {
      setStatus('err')
    }
  }

  return (
    <section
      id="lead-form"
      className="py-24 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 60% at 50% 0%, rgba(108,71,255,0.20) 0%, transparent 65%),
          #04030D
        `,
      }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(108,71,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,71,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                background: 'rgba(108,71,255,0.15)',
                border: '1px solid rgba(108,71,255,0.30)',
                color: '#A594FF',
              }}
            >
              🎯 Бесплатно · Ответ за 15 минут
            </div>
            <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
              Получите разбор <br/>
              <span style={{
                background: 'linear-gradient(135deg, #8B6FFF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                вашего бизнеса
              </span>
            </h2>
            <p style={{ color: 'rgba(232,230,255,0.55)' }}>
              Покажем, где вы теряете клиентов и что нужно сделать прямо сейчас
            </p>
          </div>

          {status === 'ok' ? (
            <SuccessState />
          ) : (
            <form
              onSubmit={submit}
              className="rounded-3xl p-8"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Услуги */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-white mb-4">
                  Что интересует? <span style={{ color: 'rgba(232,230,255,0.40)', fontWeight: 400 }}>(можно несколько)</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggle(s)}
                      className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                      style={selected.includes(s) ? {
                        background: 'linear-gradient(135deg, #6C47FF, #00D4FF)',
                        color: '#fff',
                        boxShadow: '0 4px 16px rgba(108,71,255,0.35)',
                      } : {
                        background: 'rgba(255,255,255,0.06)',
                        color: 'rgba(232,230,255,0.65)',
                        border: '1px solid rgba(255,255,255,0.10)',
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Поля */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { key: 'name',  placeholder: 'Ваше имя',                  label: 'Имя' },
                  { key: 'phone', placeholder: '@username или +7 999 000-00', label: 'Telegram / телефон' },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block text-sm mb-2" style={{ color: 'rgba(232,230,255,0.55)' }}>
                      {f.label} *
                    </label>
                    <input
                      required
                      type="text"
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                      placeholder={f.placeholder}
                      className="w-full px-4 py-3 rounded-xl text-white text-sm transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.10)',
                        outline: 'none',
                        color: '#E8E6FF',
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
                ))}
              </div>

              {status === 'err' && (
                <p className="text-sm mb-4" style={{ color: '#FF4D6D' }}>
                  Ошибка. Попробуйте ещё раз или напишите в Telegram.
                </p>
              )}

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex-1 relative overflow-hidden py-4 px-8 rounded-2xl font-bold text-white
                             text-base transition-all duration-300 hover:opacity-90 disabled:opacity-50"
                  style={{ background: 'linear-gradient(135deg, #6C47FF, #00D4FF)' }}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <Spinner /> Отправляем...
                    </span>
                  ) : 'Получить бесплатный разбор →'}
                </button>
                <a
                  href="https://t.me/UR16_bot?start"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:flex-none flex items-center justify-center gap-2 py-4 px-6
                             rounded-2xl font-semibold text-white transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <TgIcon />
                  Telegram
                </a>
              </div>

              <p className="text-xs text-center mt-4" style={{ color: 'rgba(232,230,255,0.30)' }}>
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/personal" className="underline" style={{ color: 'rgba(232,230,255,0.50)' }}>
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function SuccessState() {
  return (
    <div
      className="rounded-3xl p-12 text-center"
      style={{
        background: 'rgba(0,255,148,0.05)',
        border: '1px solid rgba(0,255,148,0.25)',
      }}
    >
      <div className="text-6xl mb-6">🎉</div>
      <h3 className="text-2xl font-bold text-white mb-3">Заявка отправлена!</h3>
      <p style={{ color: 'rgba(232,230,255,0.60)' }}>
        Ответим в течение 15 минут. <br/>
        Пока ждёте — подпишитесь на наш Telegram-канал.
      </p>
      <a
        href="https://t.me/adsmsk"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all duration-200 hover:opacity-90"
        style={{ background: 'rgba(0,212,255,0.20)', border: '1px solid rgba(0,212,255,0.40)', color: '#00D4FF' }}
      >
        <TgIcon />
        Подписаться на канал
      </a>
    </div>
  )
}

function Spinner() {
  return (
    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
    </svg>
  )
}

function TgIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.717l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.646.869z"/>
    </svg>
  )
}