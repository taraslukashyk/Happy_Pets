# Happy Pets — CLAUDE.md

## Що це за проект

Веб-сайт для **Happy Pets Grooming & Spa Salon** — грумінг-салону в центрі Черкас (вул. Симоненка, 5).
Instagram: [@happy_pets_che](https://www.instagram.com/happy_pets_che/)

Мета сайту — конверсійний хаб: відвідувач за 60 секунд бачить прайс, команду та записується через Easyweek.

## Поточний стан

Зараз у репо — **UI-кіт / прототип** (vanilla React via Babel CDN), не Next.js.
Це дизайн-система для ітерацій перед переходом на продакшн-стек.

Файли прототипу:
- `colors_and_type.css` — токени бренду (кольори, типографіка, відступи, тіні, анімації)
- `Components.jsx` — базові компоненти: `Button`, `Chip`, `Badge`, `Input`, `Paw` іконка
- `Sections.jsx` — блоки сайту: `Nav`, `Hero`, `Services`, `Masters`, `Pricing`, `Footer`, `BookingModal`
- `tweaks-panel.jsx` — панель для live-редагування параметрів прототипу
- `index.html` — головна сторінка (підключає все вище через CDN)
- `assets/logo-official.jpg` — офіційний логотип

Специфікація і брендбук у папці `uploads/`:
- `Happy_Pets_Website_Specification.md` — повна специфікація (15 розділів)
- `Happy_Pets_Brandbook_2026.docx` — брендбук 2026

## Бренд та дизайн-система

### Кольори (CSS-змінні)
- `--hp-rose: #D4457A` — primary, signature
- `--hp-rose-soft: #FFD6E8` — поверхні, фони
- `--hp-rose-deep: #A6245A` — заголовки, hover-стани
- `--hp-lilac: #9B5EA0` — вторинний акцент (max 10–15% композиції)
- `--hp-ink: #1A1A2E` — основний текст
- `--hp-paper: #FDFAFB` — фон сторінки

Тіні — теплі, рожево-сливові. Ніколи не холодні/сині.

### Типографіка
- **Display:** Playfair Display (заголовки, editorial, feminine)
- **Text:** Nunito (тіло, кнопки, лейбли)
- **Mono:** JetBrains Mono (технічний текст)
- Обидва шрифти — Google Fonts, повна кирилиця

### Компоненти
Всі компоненти приймають CSS-змінні бренду. Варіанти Button: `primary`, `secondary`, `ghost`, `ink`, `soft`.
Клас `.hp-reset` — обов'язковий на кореневому елементі.

## Продакшн-стек (майбутній Next.js проект)

| Шар | Технологія |
|---|---|
| Frontend | Next.js 15 (App Router) + TypeScript |
| Стилізація | Tailwind CSS v4 + shadcn/ui |
| Анімації | Framer Motion |
| БД + Auth + Storage | Supabase (PostgreSQL + RLS + Storage) |
| Хостинг | Vercel (frontend) + Supabase Cloud |
| Форми | React Hook Form + Zod |
| Запити | TanStack Query |
| Email | Resend або Brevo |
| Toast | sonner |
| Редактор | Tiptap або Plate (для блогу) |

## Архітектура продакшн-проекту

```
/app
  /(public)        — публічні сторінки (SSG/ISR)
  /admin           — адмінка (захищена middleware)
  /api             — webhooks, Instagram feed, Telegram notify
/components
  /ui              — shadcn компоненти
  /public          — блоки публічного сайту
  /admin           — компоненти адмінки
  /shared          — header, footer, MessengerFab
/lib
  /supabase        — client.ts, server.ts, admin.ts
  /db              — по одному файлу на таблицю (services.ts, masters.ts, ...)
  /validations     — Zod схеми (один раз для клієнта і сервера)
/supabase
  /migrations      — SQL-файли міграцій
```

## Структура сайту

```
/                  — Головна (лендинг)
/poslugy           — Повний каталог послуг
/poslugy/[slug]    — Окрема послуга
/velyki-porody     — Лендинг великих порід
/ozonoterapiya     — Лендинг озонотерапії
/komanda           — Команда майстрів
/komanda/[slug]    — Портфоліо майстра
/porody/[breed]    — SEO-сторінки порід
/blog, /blog/[slug]
/akcii             — Акції
/kontakty          — Контакти
/zapys             — Форма «Записатися вперше»
/admin/*           — Адмін-панель (заборонена для індексації)
```

## Правила розробки

1. Кожна таблиця Supabase = окремий файл `/lib/db/<table>.ts` з функціями `get*`, `create*`, `update*`, `delete*`.
2. Admin routes захищені через Next.js middleware (перевірка сесії Supabase).
3. Публічні сторінки — Static з ISR (revalidate раз на годину).
4. Валідація — Zod, однакова схема для клієнта і сервера.
5. Зображення — через `next/image`.
6. Компоненти серверні за замовчуванням; `"use client"` тільки де потрібна інтерактивність.
7. UI-рядки — в одному файлі `/lib/strings.ts`.
8. Гілка `main` завжди deployable.

## Ключові інтеграції

- **Easyweek** — iframe-вбудовування + deep links на послуги/майстрів (текстові поля в адмінці)
- **Instagram Graph API** — `/api/instagram/feed`, кеш 1 год, токен оновлюється cron-джобом
- **MessengerFab** — плаваюча кнопка: Telegram, Instagram Direct, Viber, телефон
- **Telegram-бот** — Supabase Edge Function, сповіщає адміна про нові заявки

## Команда салону

- **Анастасія** — топ-грумер
- **Іра** — грумер
- **Юлія** — молодший грумер

## Дорожня карта

- **V1 (MVP):** головна, послуги, команда, контакти, FAQ, адмінка базова, Easyweek, Instagram feed
- **V2:** блог, SEO-сторінки порід, форма запису, Telegram-бот, акції
- **V3:** подарункові сертифікати з оплатою, реферальна програма, калькулятор вартості
