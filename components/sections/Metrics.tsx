'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 120, suffix: '+', label: 'проектов запущено',        icon: '🚀', color: '#6C47FF' },
  { value: 65,  suffix: '%', label: 'снижение CPL в среднем',   icon: '📉', color: '#00D4FF' },
  { value: 4.9, suffix: '★', label: 'средняя оценка клиентов',  icon: '⭐', color: '#FFB547', decimals: 1 },
  { value: 80,  suffix: '%', label: 'рутины автоматизируем',     icon: '🤖', color: '#00FF94' },
]

function useCountUp(target: number, decimals = 0, active: boolean) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const duration = 1600
    const raf = (time: number) => {
      const p = Math.min((time - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setVal(parseFloat((ease * target).toFixed(decimals)))
      if (p < 1) requestAnimationFrame(raf)
      else setVal(target)
    }
    requestAnimationFrame(raf)
  }, [active, target, decimals])
  return val
}

function StatCard({ stat, active }: { stat: typeof STATS[0]; active: boolean }) {
  const val = useCountUp(stat.value, stat.decimals ?? 0, active)
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-6 text-center group transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${stat.color}44`
        ;(e.currentTarget as HTMLElement).style.background = `${stat.color}0A`
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'
        ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'
      }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 100%, ${stat.color}15 0%, transparent 70%)`,
        }}
      />
      <div className="text-3xl mb-3">{stat.icon}</div>
      <div
        className="text-4xl font-display mb-1.5"
        style={{ color: stat.color }}
      >
        {stat.decimals ? val.toFixed(stat.decimals) : Math.floor(val)}
        {stat.suffix}
      </div>
      <p className="text-sm" style={{ color: 'rgba(232,230,255,0.50)' }}>
        {stat.label}
      </p>
    </div>
  )
}

export function Metrics() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="py-16"
      style={{ background: '#080718', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <StatCard key={i} stat={s} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}