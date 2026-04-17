'use client';

import Link from 'next/link'
import { Footer } from '@/components/layout/Footer'

export default function PersonalPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Политика обработки персональных данных
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-500 mb-8">
              Настоящая Политика конфиденциальности регулирует порядок обработки и использования
              персональных данных пользователей сайта <strong>ads.msk.ru</strong> в соответствии
              с Федеральным законом РФ №152-ФЗ «О персональных данных».
            </p>

            {[
              {
                title: '1. Какие данные we собираем',
                content: 'Имя, номер телефона, адрес электронной почты, Telegram-аккаунт — только данные, которые вы добровольно указываете в формах на сайте.',
              },
              {
                title: '2. Для чего мы используем данные',
                content: 'Для обработки ваших заявок, связи с вами по вопросам услуг, отправки запрошенных материалов (чек-листы, гайды). Мы не передаём данные третьим лицам в коммерческих целях.',
              },
              {
                title: '3. Хранение данных',
                content: 'Данные хранятся на защищённых серверах в РФ. Срок хранения — не более 3 лет с момента последнего обращения.',
              },
              {
                title: '4. Ваши права',
                content: 'Вы вправе в любой момент запросить удаление ваших данных, отписаться от рассылки, получить информацию о хранимых данных. Для этого напишите нам в Telegram.',
              },
              {
                title: '5. Cookies',
                content: 'Сайт использует cookies для аналитики (Яндекс.Метрика, Top.Mail.Ru). Продолжая пользоваться сайтом, вы соглашаетесь с их использованием.',
              },
              {
                title: '6. Контакты',
                content: 'По вопросам обработки персональных данных: Telegram @adsmsk | Телефон: +7 (915) 468-39-25',
              },
            ].map((section, i) => (
              <div key={i} className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}

            <div className="text-center mt-10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline"
              >
                ← Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}