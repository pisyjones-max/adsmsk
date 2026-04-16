import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header }          from '@/components/layout/Header'
import { StickyContacts }  from '@/components/ui/StickyContacts'
import { ExitPopup }       from '@/components/ui/ExitPopup'
import { JsonLd }          from '@/components/seo/JsonLd'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ads.msk.ru'),
  title: {
    default: 'AdsMsk — Трафик. Автоматизация. Рост.',
    template: '%s | AdsMsk',
  },
  description: 'Яндекс.Директ, ВКонтакте, Telegram-боты, Wildberries/Ozon. Снижаем стоимость заявки. 120+ проектов. Москва.',
  openGraph: {
    type: 'website', locale: 'ru_RU', siteName: 'AdsMsk',
    images: [{ url: '/img/og.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <JsonLd />
        {/* Syne для заголовков */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0];
          k.async=1;k.src=r;a.parentNode.insertBefore(k,a)})(window,document,'script',
          'https://mc.yandex.ru/metrika/tag.js','ym');
          ym(103922217,'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});
        `}} />
      </head>
      <body className="bg-[#04030D] text-[#E8E6FF] antialiased">
        <Header />
        <main>{children}</main>
        <StickyContacts />
        <ExitPopup />
      </body>
    </html>
  )
}