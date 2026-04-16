import Link from 'next/link'

const LINKS = {
  Услуги: [
    { label: 'Яндекс.Директ',  href: '/services/context-ads' },
    { label: 'Реклама ВК',      href: '/services/target-ads' },
    { label: 'Маркетплейсы',   href: '/services/marketplaces' },
    { label: 'Telegram-боты',  href: '/services/telegram-bots' },
    { label: 'Автопостинг',    href: '/services/autoposting' },
    { label: 'Сайты',          href: '/services/websites' },
    { label: 'CRM',            href: '/services/crm' },
  ],
  Компания: [
    { label: 'Кейсы',   href: '/cases' },
    { label: 'Команда', href: '/team' },
  ],
  Правовое: [
    { label: 'Перс. данные', href: '/personal' },
  ],
}

export function Footer() {
  return (
    <footer
      style={{
        background: '#080718',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-display text-sm text-white"
                style={{ background: 'linear-gradient(135deg, #6C47FF, #00D4FF)' }}
              >
                A
              </div>
              <span className="text-white font-display text-xl">
                Ads<span style={{ color: '#00D4FF' }}>Msk</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: 'rgba(232,230,255,0.45)' }}>
              Приводим клиентов и автоматизируем продажи.
              Яндекс.Директ, ВКонтакте, Telegram-боты, маркетплейсы.
              Только актуальные каналы РФ.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { href: 'https://t.me/adsmsk', color: '#10A0E8', label: 'TG',
                  icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.717l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.646.869z"/></svg>
                },
                { href: 'https://vk.com/adsmsk', color: '#4680C2', label: 'VK',
                  icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.07 13.33h-1.55c-.59 0-.77-.47-1.83-1.55-.92-.92-1.32-.92-1.32 0v1.55c0 .47-.15.75-1.38.75-2.03 0-4.28-1.23-5.86-3.52C4.86 10.02 4.5 8.27 4.5 8c0-.32.26-.47.47-.47h1.55c.35 0 .48.17.61.54.67 1.97 1.8 3.7 2.27 3.7.17 0 .25-.08.25-.52V9.2c-.06-.98-.57-1.06-.57-1.41 0-.2.17-.4.44-.4h2.44c.3 0 .4.15.4.48v3.08c0 .3.13.4.22.4.17 0 .32-.1.64-.42 1-1.12 1.71-2.84 1.71-2.84.1-.2.27-.38.64-.38h1.55c.47 0 .57.24.47.54-.21.93-2.28 3.89-2.28 3.89-.18.3-.24.43 0 .73.18.22 1.25 1.22 1.88 1.95.53.6.92 1.12.98 1.43.07.32-.1.5-.43.5z"/></svg>
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = `${s.color}33`)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)')}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <h3
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: 'rgba(232,230,255,0.35)' }}
              >
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'rgba(232,230,255,0.50)' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#fff')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(232,230,255,0.50)')}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(232,230,255,0.25)' }}>
            © 2020–2026 AdsMsk. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="tel:+79154683925"
              className="text-sm transition-colors duration-200"
              style={{ color: 'rgba(232,230,255,0.45)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#fff')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(232,230,255,0.45)')}
            >
              +7 (915) 468-39-25
            </a>
            <a
              href="https://t.me/UR16_bot?start"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-80
                            "
              style={{ background: 'linear-gradient(135deg, #6C47FF, #00D4FF)' }}
            >
              Написать нам
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}