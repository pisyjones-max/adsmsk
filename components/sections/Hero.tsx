'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const TYPED_WORDS = ['клиентов', 'заявки', 'продажи', 'выручку']

export function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const tickRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* Typewriter */
  useEffect(() => {
    const word = TYPED_WORDS[wordIdx]
    if (!deleting && displayed.length < word.length) {
      tickRef.current = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      tickRef.current = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      tickRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIdx((i) => (i + 1) % TYPED_WORDS.length)
    }
    return () => { if (tickRef.current) clearTimeout(tickRef.current) }
  }, [displayed, deleting, wordIdx])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,71,255,0.28) 0%, transparent 65%),
          radial-gradient(ellipse 50% 40% at 90% 50%, rgba(0,212,255,0.14) 0%, transparent 60%),
          radial-gradient(ellipse 30% 30% at 10% 80%, rgba(108,71,255,0.10) 0%, transparent 50%),
          #04030D
        `,
      }}
    >
      {/* Grid фон */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Орбы */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: '600px', height: '600px',
            top: '-200px', left: '50%', transform: 'translateX(-30%)',
            background: 'radial-gradient(circle, rgba(108,71,255,0.18) 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '400px', height: '400px',
            bottom: '-100px', right: '-100px',
            background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
            animation: 'float 13s ease-in-out infinite reverse',
          }}
        />
      </div>

      <div
        className="container mx-auto px-4 sm:px-6 relative z-10"
        style={{ paddingTop: '120px', paddingBottom: '80px' }}
      >
        <div className="max-w-4xl mx-auto text-center">

          {/* Статус-pill */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 text-sm font-medium"
            style={{
              background: 'rgba(108,71,255,0.15)',
              border: '1px solid rgba(108,71,255,0.35)',
              color: '#A594FF',
              animation: 'fadeIn 0.5s ease both',
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: '#00FF94',
                boxShadow: '0 0 8px #00FF94',
                animation: 'pulseGlow 2s ease-in-out infinite',
              }}
            />
            120+ проектов · Москва и вся РФ · Работаем с 2020
          </div>

          {/* H1 */}
          <h1
            className="font-display mb-6 leading-none"
            style={{
              fontSize: 'clamp(42px, 7vw, 88px)',
              letterSpacing: '-0.03em',
              animation: 'fadeUp 0.6s 0.1s cubic-bezier(0.16,1,0.3,1) both',
            }}
          >
            <span className="block text-white">Приводим</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #8B6FFF 0%, #00D4FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                minHeight: '1.2em',
              }}
            >
              {displayed}
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '0.85em',
                  background: '#6C47FF',
                  marginLeft: '4px',
                  verticalAlign: 'middle',
                  animation: 'blink 1s step-end infinite',
                }}
              />
            </span>
            <span className="block text-white">и&nbsp;автоматизируем</span>
          </h1>

          {/* Подзаголовок */}
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{
              color: 'rgba(232,230,255,0.60)',
              animation: 'fadeUp 0.6s 0.2s cubic-bezier(0.16,1,0.3,1) both',
            }}
          >
            Яндекс.Директ, реклама ВКонтакте, Telegram-боты, Wildberries/Ozon.
            Без Google — только актуальные каналы РФ.
            Делаем <strong style={{ color: '#fff', fontWeight: 600 }}>систему</strong>, а не разовую рекламу.
          </p>

          {/* CTA группа */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-14"
            style={{ animation: 'fadeUp 0.6s 0.3s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            <Link
              href="/#lead-form"
              className="group relative overflow-hidden inline-flex items-center gap-2
                         px-8 py-4 rounded-2xl font-bold text-white text-base
                         transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #6C47FF 0%, #00D4FF 100%)',
                boxShadow: '0 0 0 0 rgba(108,71,255,0.5)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(108,71,255,0.50), 0 0 0 0 transparent'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 rgba(108,71,255,0.5)'
              }}
            >
              {/* Shimmer слой */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                  animation: 'shimmer 1.5s linear infinite',
                }}
              />
              <span className="relative">Получить бесплатный разбор</span>
              <svg className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </Link>

            <a
              href="https://t.me/UR16_bot?start"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl
                         font-bold text-white text-base transition-all duration-300
                         hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.10)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(108,71,255,0.50)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'
              }}
            >
              <TgIcon />
              Написать в Telegram
            </a>
          </div>

          {/* Social proof strip */}
          <div
            className="flex flex-wrap justify-center items-center gap-6"
            style={{ animation: 'fadeUp 0.6s 0.4s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            {/* Аватары */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {['АП','МК','СВ','ИТ','РВ'].map((abbr, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white border-2"
                    style={{
                      background: `linear-gradient(135deg, hsl(${250 + i*20}, 70%, 55%), hsl(${200 + i*15}, 80%, 60%))`,
                      borderColor: '#04030D',
                      zIndex: 5 - i,
                    }}
                  >
                    {abbr}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(232,230,255,0.50)' }}>
                  4.9 из 5 · 120+ клиентов
                </p>
              </div>
            </div>

            <div className="w-px h-8 hidden sm:block" style={{ background: 'rgba(255,255,255,0.10)' }} />

            <p className="text-sm" style={{ color: 'rgba(232,230,255,0.50)' }}>
              <span style={{ color: '#00FF94', fontWeight: 600 }}>↓ CPL в среднем на 65%</span>
              {' '}за первые 60 дней
            </p>
          </div>
        </div>

        {/* Floating cards */}
        <div className="hidden xl:block">
          <FloatCard
            style={{ position: 'absolute', top: '140px', left: '0', animation: 'float 8s ease-in-out infinite' }}
            label="Стоимость заявки"
            before="2 800 ₽"
            after="940 ₽"
            badge="Яндекс.Директ"
            positive
          />
          <FloatCard
            style={{ position: 'absolute', bottom: '100px', right: '0', animation: 'float 9s 1s ease-in-out infinite reverse' }}
            label="Продажи в месяц"
            before="43 шт"
            after="187 шт"
            badge="Wildberries"
            positive
          />
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'rgba(232,230,255,0.30)', animation: 'fadeIn 1s 1s both' }}
      >
        <span className="text-xs uppercase tracking-widest">Скролл</span>
        <div
          className="w-5 h-8 rounded-full border flex items-start justify-center p-1.5"
          style={{ borderColor: 'rgba(255,255,255,0.15)' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: '#6C47FF',
              animation: 'float 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  )
}

function FloatCard({
  style, label, before, after, badge, positive,
}: {
  style: React.CSSProperties
  label: string; before: string; after: string; badge: string; positive?: boolean
}) {
  return (
    <div
      style={{
        ...style,
        background: 'rgba(14,12,34,0.90)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(108,71,255,0.25)',
        borderRadius: '20px',
        padding: '20px 24px',
        minWidth: '200px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.50)',
      }}
    >
      <p className="text-xs mb-3" style={{ color: 'rgba(232,230,255,0.40)' }}>{label}</p>
      <div className="flex items-end gap-3 mb-3">
        <span className="text-sm line-through" style={{ color: 'rgba(232,230,255,0.30)' }}>{before}</span>
        <span
          className="text-2xl font-bold font-display"
          style={{ color: positive ? '#00FF94' : '#FF4D6D' }}
        >
          {after}
        </span>
      </div>
      <span
        className="inline-block px-2.5 py-1 rounded-lg text-xs font-semibold"
        style={{ background: 'rgba(108,71,255,0.20)', color: '#A594FF' }}
      >
        {badge}
      </span>
    </div>
  )
}

function TgIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.717l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.646.869z"/>
    </svg>
  )
}