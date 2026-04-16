import type { Metadata } from 'next'
import Link from 'next/link'
import { LeadForm } from '@/components/sections/LeadForm'
import { Footer }   from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Команда AdsMsk — специалисты по рекламе и автоматизации',
  description:
    'Команда AdsMsk: специалисты по Яндекс.Директ, ВКонтакте, Telegram-ботам, маркетплейсам Wildberries/Ozon и веб-разработке. Москва.',
  alternates: { canonical: 'https://ads.msk.ru/team' },
  openGraph: {
    title: 'Команда AdsMsk',
    description:
      'Специалисты-практики с реальными кейсами и измеримыми результатами.',
    url: 'https://ads.msk.ru/team',
    type: 'website',
  },
}

const TEAM = [
  {
    initials: 'РП',
    name: 'Руководитель проектов',
    role: 'Project Manager',
    desc: 'Координирует все проекты, контролирует сроки и качество. 5+ лет в digital.',
    gradient: 'linear-gradient(135deg, #6C47FF, #00D4FF)',
    tags: ['Стратегия', 'Контроль качества', 'Клиентский сервис'],
  },
  {
    initials: 'ЯД',
    name: 'Специалист Яндекс.Директ',
    role: 'PPC Expert',
    desc: 'Сертифицированный специалист. 50+ кампаний. Снижает CPL на 60–70%.',
    gradient: 'linear-gradient(135deg, #FF6B35, #FF4D6D)',
    tags: ['Яндекс.Директ', 'Поиск', 'РСЯ'],
  },
  {
    initials: 'МП',
    name: 'Маркетплейс-менеджер',
    role: 'Marketplace Manager',
    desc: 'Ведёт 30+ магазинов на WB и Ozon. Эксперт по SEO карточек и аналитике.',
    gradient: 'linear-gradient(135deg, #A855F7, #EC4899)',
    tags: ['Wildberries', 'Ozon', 'SEO карточек'],
  },
  {
    initials: 'ТБ',
    name: 'Разработчик Telegram-ботов',
    role: 'Bot Developer',
    desc: 'Python, aiogram, интеграции с CRM. 20+ ботов в продакшене.',
    gradient: 'linear-gradient(135deg, #00D4FF, #0088FF)',
    tags: ['Python', 'aiogram', 'CRM-интеграции'],
  },
  {
    initials: 'ТВ',
    name: 'Таргетолог ВКонтакте',
    role: 'Targeting Specialist',
    desc: 'Настройка ВКонтакте Ads, Look-alike аудитории, воронки продаж.',
    gradient: 'linear-gradient(135deg, #4A90D9, #6C47FF)',
    tags: ['ВКонтакте Ads', 'Look-alike', 'Воронки'],
  },
  {
    initials: 'ВР',
    name: 'Веб-разработчик',
    role: 'Frontend Developer',
    desc: 'Next.js, TypeScript, Tailwind CSS. Lighthouse 90+ на каждом проекте.',
    gradient: 'linear-gradient(135deg, #6C47FF, #A855F7)',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
]

const CULTURE = [
  { icon: '🎯', title: 'Результат прежде всего',  desc: 'KPI в договоре. Не выполнили — компенсируем.' },
  { icon: '📊', title: 'Прозрачность',             desc: 'Еженедельные отчёты с реальными цифрами, без воды.' },
  { icon: '⚡', title: 'Скорость',                 desc: 'Запуск за 72 часа. Никакой бюрократии.' },
  { icon: '🔄', title: 'Постоянное улучшение',     desc: 'A/B-тесты, оптимизация, масштабирование лучших связок.' },
]

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: '140px',
          paddingBottom: '60px',
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,71,255,0.22) 0%, transparent 65%), #04030D',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <nav
            className="flex justify-center items-center gap-2 text-sm mb-8"
            aria-label="Breadcrumb"
            style={{ color: 'rgba(232,230,255,0.40)' }}
          >
            <Link href="/" className="transition-colors duration-200 hover:text-white">
              Главная
            </Link>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span style={{ color: 'rgba(232,230,255,0.70)' }}>Команда</span>
          </nav>

          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#6C47FF' }}
          >
            Люди за результатами
          </p>

          <h1
            className="font-display text-white mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Команда{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #8B6FFF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AdsMsk
            </span>
          </h1>

          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: 'rgba(232,230,255,0.55)' }}
          >
            Специалисты-практики с реальными кейсами.
            Каждый эксперт в своей области — без универсалов-дилетантов.
          </p>
        </div>
      </section>

      {/* Команда */}
      <section
        className="py-20"
        style={{ background: '#080718' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <div
                key={i}
                className="group flex flex-col p-7 rounded-2xl transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(108,71,255,0.35)'
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.40)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(255,255,255,0.07)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Аватар */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center
                               text-lg font-bold text-white flex-shrink-0"
                    style={{ background: member.gradient }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm leading-snug">
                      {member.name}
                    </h3>
                    <p
                      className="text-xs mt-0.5 font-semibold"
                      style={{ color: '#00D4FF' }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Описание */}
                <p
                  className="text-sm leading-relaxed flex-1 mb-5"
                  style={{ color: 'rgba(232,230,255,0.55)' }}
                >
                  {member.desc}
                </p>

                {/* Теги */}
                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg"
                      style={{
                        background: 'rgba(108,71,255,0.12)',
                        color: '#A594FF',
                        border: '1px solid rgba(108,71,255,0.20)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Культура */}
      <section
        className="py-20"
        style={{ background: '#04030D' }}
      >
        <div className="container mx-auto px-4">
          <h2
            className="font-display text-white text-center mb-12"
            style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            Наши принципы
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CULTURE.map((c, i) => (
              <div
                key={i}
                className="text-center p-7 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{c.title}</h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(232,230,255,0.50)' }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: '#080718' }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
          >
            Хотите работать с нами?
          </h2>
          <p
            className="text-base mb-8 max-w-md mx-auto"
            style={{ color: 'rgba(232,230,255,0.55)' }}
          >
            Обсудим ваш проект и предложим конкретный план с цифрами
          </p>
          <Link
            href="/#lead-form"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl
                       font-bold text-white text-base transition-all duration-300
                       hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #6C47FF, #00D4FF)',
              boxShadow: '0 8px 32px rgba(108,71,255,0.40)',
            }}
          >
            Обсудить проект
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>

      <LeadForm />
      <Footer />
    </>
  )
}