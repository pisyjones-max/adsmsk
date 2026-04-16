'use client'

import { useEffect, useState } from 'react'

export function ExitPopup() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('ep')) {
        setShow(true)
        sessionStorage.setItem('ep', '1')
      }
    }
    document.addEventListener('mouseleave', onLeave)
    return () => document.removeEventListener('mouseleave', onLeave)
  }, [])

  if (!show) return null
  const close = () => setShow(false)

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(4,3,13,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={close}
    >
      <div
        className="relative w-full max-w-md rounded-3xl p-8 text-center"
        style={{
          background: 'linear-gradient(145deg, #0E0C22, #080718)',
          border: '1px solid rgba(108,71,255,0.30)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.60), 0 0 60px rgba(108,71,255,0.15)',
          animation: 'fadeUp 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
          style={{ color: 'rgba(232,230,255,0.40)' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#fff')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(232,230,255,0.40)')}
        >
          ✕
        </button>

        {!sent ? (
          <>
            <div className="text-5xl mb-4">🎁</div>
            <h3 className="font-display text-white text-xl mb-2">
              Подождите! Вам подарок
            </h3>
            <p className="text-sm mb-6" style={{ color: 'rgba(232,230,255,0.55)' }}>
              Получите <strong style={{ color: '#A594FF' }}>чек-лист 15 ошибок</strong>, из-за которых вы
              теряете клиентов прямо сейчас. Бесплатно.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true) }}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ваш@email.ru"
                className="w-full px-4 py-3 rounded-xl text-sm text-white text-center"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  outline: 'none',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(108,71,255,0.60)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #6C47FF, #00D4FF)' }}
              >
                Получить чек-лист бесплатно
              </button>
            </form>
            <button
              onClick={close}
              className="mt-4 text-xs"
              style={{ color: 'rgba(232,230,255,0.25)' }}
            >
              Нет, я хочу продолжать терять клиентов
            </button>
          </>
        ) : (
          <>
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-white mb-2">Готово!</h3>
            <p className="text-sm" style={{ color: 'rgba(232,230,255,0.55)' }}>
              Чек-лист уже летит к вам. Проверьте почту.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
