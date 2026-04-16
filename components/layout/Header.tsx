'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV = [
  { label: 'Услуги',   href: '/#services' },
  { label: 'Кейсы',    href: '/#cases' },
  { label: 'О нас',    href: '/team' },
  { label: 'Контакты', href: '/#lead-form' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        paddingTop:    scrolled ? '12px' : '20px',
        paddingBottom: scrolled ? '12px' : '20px',
      }}
    >
      {/* Плавающая капсула */}
      <div
        className="container mx-auto px-4"
        style={{ maxWidth: '1200px' }}
      >
        <div
          className="flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500"
          style={scrolled ? {
            background: 'rgba(8,7,24,0.92)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          } : {
            background: 'transparent',
          }}
        >
          {/* Лого */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center font-display text-sm text-white"
              style={{ background: 'linear-gradient(135deg, #6C47FF, #00D4FF)' }}
            >
              A
            </div>
            <span className="text-white font-display text-lg tracking-tight">
              Ads<span style={{ color: '#00D4FF' }}>Msk</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: 'rgba(232,230,255,0.65)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(232,230,255,0.65)')}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://t.me/UR16_bot?start"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white
                         transition-all duration-200"
              style={{
                background: 'rgba(108,71,255,0.18)',
                border: '1px solid rgba(108,71,255,0.35)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(108,71,255,0.32)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(108,71,255,0.18)'
              }}
            >
              <TgIcon />
              Telegram
            </a>
            <Link
              href="/#lead-form"
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white
                         transition-all duration-200 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #6C47FF, #00D4FF)' }}
            >
              Получить разбор →
            </Link>
          </div>

          {/* Burger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            {[0,1,2].map((i) => (
              <span
                key={i}
                className="block h-0.5 bg-white transition-all duration-300 rounded-full"
                style={{
                  width: i === 1 ? (open ? '24px' : '16px') : '24px',
                  transform: open
                    ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                    : i === 2 ? 'rotate(-45deg) translate(4px, -4px)'
                    : 'scaleX(0)'
                    : 'none',
                  opacity: (open && i === 1) ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-300 rounded-2xl mt-2"
          style={{
            maxHeight: open ? '400px' : '0',
            background: open ? 'rgba(8,7,24,0.97)' : 'transparent',
            border: open ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          }}
        >
          <div className="p-5 flex flex-col gap-4">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium py-2 border-b"
                style={{ color: 'rgba(232,230,255,0.8)', borderColor: 'rgba(255,255,255,0.06)' }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://t.me/UR16_bot?start"
              className="mt-2 w-full text-center py-3.5 rounded-xl font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #6C47FF, #00D4FF)' }}
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

function TgIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.717l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.646.869z"/>
    </svg>
  )
}