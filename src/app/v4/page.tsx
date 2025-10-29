"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, useAnimation, useInView } from "framer-motion";

/**
 * MIDASTOUCH — Landing Page
 * Стек: Next.js App Router + Tailwind + next-themes + framer-motion
 * Палитра: Variant 3 — Emerald Ledger
 * Темы: светлая/тёмная, переключение через next-themes
 * Блоки по ТЗ: Оффер, Почему мы, Шаги, Показатели (эффективность), Блок покупки шаблонов,
 * Категории (Самые популярные / Для кого), Цены, FAQ, Отзывы, Контакты, Подвал с офертой/политикой
 */

// ─────────────────────────────────────────────────────────────
// Микро-хелперы для анимаций
// ─────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) controls.start("show");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp(delay) as any}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// Данные (можете заменить на CMS/БД)
// ─────────────────────────────────────────────────────────────
const FEATURES = [
  {
    title: "Экспертиза 360°",
    desc:
      "Работаем с ИП, малым бизнесом, маркетплейсами, онлайн-школами, розницей, фитнесом и IT.",
  },
  {
    title: "Готовые шаблоны",
    desc:
      "Учёт доходов/расходов, налоги, P&L, cash-flow, SKU-маржа, KPI — всё из коробки.",
  },
  {
    title: "Подписка = поддержка",
    desc:
      "Обновления шаблонов, документация, ответы на вопросы и сопровождение внедрения.",
  },
  {
    title: "Импорт данных",
    desc:
      "CSV/XLS, выгрузки маркетплейсов (WB/Ozon), Google Sheets. Расширения по API — позже.",
  },
];

const STEPS = [
  { t: "Выберите шаблон", d: "Под нишу и масштаб вашего бизнеса." },
  { t: "Импортируйте данные", d: "Загрузите продажи, расходы и остатки." },
  { t: "Получайте отчёты", d: "P&L, налоги, cash-flow, каналы и SKU." },
  { t: "Оптимизируйте", d: "Принимайте решения на основе цифр." },
];

const POPULAR = [
  { name: "P&L + налоги для ИП/самозанятых", price: "1 990₽" },
  { name: "Маркетплейсы Pro (WB/Ozon): SKU-маржа", price: "3 490₽" },
  { name: "Онлайн-школа: продажи/KPI/выплаты", price: "2 490₽" },
  { name: "Розница/Фитнес: абонементы и выручка", price: "2 490₽" },
];

const FOR_WHOM = [
  { icon: "🧾", label: "ИП/Самозанятые" },
  { icon: "📦", label: "Маркетплейсы (WB/Ozon)" },
  { icon: "🎓", label: "Онлайн-школы" },
  { icon: "🏋️", label: "Фитнес-студии" },
  { icon: "🛍️", label: "Розница" },
  { icon: "💻", label: "IT-компании" },
];

const PLANS = [
  {
    name: "Solo",
    desc: "Для ИП и самозанятых",
    price: "590₽/мес",
    points: ["P&L + налоги", "До 2 источников данных", "Обновления шаблонов"],
    cta: "Начать",
  },
  {
    name: "Team",
    desc: "Малый бизнес",
    price: "1 290₽/мес",
    points: ["Все из Solo", "До 5 источников данных", "Приоритетная поддержка"],
    cta: "Попробовать",
    highlighted: true,
  },
  {
    name: "Pro",
    desc: "Маркетплейсы/онлайн-школы",
    price: "2 490₽/мес",
    points: [
      "SKU-аналитика / retention",
      "A/B отчёты",
      "Импорт больших выгрузок",
    ],
    cta: "Выбрать Pro",
  },
];

const FAQS = [
  {
    q: "Подойдут ли шаблоны без продвинутых скиллов?",
    a:
      "Да. Достаточно базовых навыков таблиц. Внутри — подсказки и видео-гайды, а подписка включает поддержку.",
  },
  {
    q: "Как импортировать данные с маркетплейсов?",
    a:
      "Через выгрузки CSV/XLS из кабинетов WB/Ozon. Пошаговые инструкции — в комплекте.",
  },
  {
    q: "Что входит в подписку?",
    a:
      "Обновления шаблонов, документация, ответы на вопросы, рекомендации по оптимизации.",
  },
  {
    q: "Есть ли демо или возврат?",
    a:
      "Есть превью и демо-страницы. При технических проблемах поможем и/или вернём деньги.",
  },
];

const TESTIMONIALS = [
  {
    name: "Антон, ИП (WB/Ozon)",
    text:
      "Импорт продаж показал реальную маржу по SKU и налоги. Перенастроили рекламу — ROI вырос на ~18%.",
  },
  {
    name: "Мария, онлайн-школа",
    text:
      "P&L стал прозрачным: преподаватели, платформы, маркетинг. За месяц приняли 3 решения — прибыль ↑.",
  },
  {
    name: "Студия «Tempo» (фитнес)",
    text:
      "Абонементы, удержание, доп.услуги — в одном месте. Команде стало проще понимать цифры.",
  },
];

// ─────────────────────────────────────────────────────────────
// Декоративный спарклайн для «Показателей»
// ─────────────────────────────────────────────────────────────
function Sparkline({ stroke = "#2ECC71", dot = "#B8E0CE" }) {
  return (
    <svg viewBox="0 0 120 40" className="w-full h-16">
      <polyline
        fill="none"
        stroke={stroke}
        strokeWidth="3"
        points="2,32 12,30 22,28 32,24 42,22 52,18 62,20 72,16 82,12 92,9 110,6"
      />
      <circle cx="110" cy="6" r="3" fill={dot} />
    </svg>
  );
}

export default function Page() {
  const { theme, setTheme } = useTheme();

  const palette =
    theme === "dark"
      ? {
        bg: "#0D3428", // изумрудный тёмный
        fg: "#E9F4EE",
        brand: "#2ECC71", // приглушённый зелёный
        brandSoft: "#1A4B3B",
        tint: "#B8E0CE", // мятно-зелёный
        stroke: "rgba(255,255,255,0.12)",
      }
      : {
        bg: "#ffffff",
        fg: "#0D3428",
        brand: "#2ECC71",
        brandSoft: "#EAF7F1",
        tint: "#B8E0CE",
        stroke: "rgba(13,52,40,0.12)",
      };

  return (
    <main
      className="min-h-dvh text-base md:text-[17px] antialiased"
      style={{ background: palette.bg, color: palette.fg }}
    >
      {/* ───────────── Header ───────────── */}
      <header
        className="sticky top-0 z-40 backdrop-blur border-b"
        style={{
          borderColor: palette.stroke,
          background:
            theme === "dark"
              ? "rgba(13,52,40,0.55)"
              : "rgba(255,255,255,0.55)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-wide">
            MIDASTOUCH
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-80">
              О нас
            </a>
            <a href="#products" className="hover:opacity-80">
              Шаблоны/услуги
            </a>
            <a href="#pricing" className="hover:opacity-80">
              Цены
            </a>
            <a href="#reviews" className="hover:opacity-80">
              Отзывы
            </a>
            <a href="#contacts" className="hover:opacity-80">
              Контакты
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md border px-3 py-2 text-sm transition"
              style={{ borderColor: palette.stroke }}
              aria-label="Переключить тему"
              title="Тема"
            >
              {theme === "dark" ? "Светлая" : "Тёмная"}
            </button>
            <a
              href="#pricing"
              className="hidden md:inline-flex rounded-md px-4 py-2 text-sm font-medium transition-transform hover:scale-[1.02]"
              style={{ background: palette.brand, color: "#0B1F18" }}
            >
              Подписка
            </a>
          </div>
        </div>
      </header>

      {/* ───────────── Hero + оффер ───────────── */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{ background: theme === "dark" ? palette.brandSoft : palette.brandSoft }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28">
          <Reveal>
            <span
              className="inline-flex items-center gap-2 text-xs md:text-sm rounded-full border px-3 py-1"
              style={{ borderColor: palette.stroke }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: palette.brand }}
              />
              Тихая роскошь · Практичность · Доверие
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Финансовые <span style={{ color: palette.brand }}>шаблоны</span>,<br />
              которые ведут учёт за вас
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg md:text-xl max-w-2xl opacity-90">
              Для малого бизнеса, ИП, маркетплейсов, онлайн-школ, розницы, фитнеса и IT.
              Прозрачный P&L, налоги, cash-flow и KPI — в одном месте.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="rounded-md px-5 py-3 text-base font-medium transition-transform hover:scale-[1.02]"
                style={{ background: palette.brand, color: "#0B1F18" }}
              >
                Оформить подписку
              </a>
              <a
                href="#products"
                className="rounded-md px-5 py-3 text-base font-medium border"
                style={{ borderColor: palette.stroke }}
              >
                Посмотреть шаблоны
              </a>
            </div>
          </Reveal>
        </div>

        {/* Декоративный мягкий градиентный круг */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-30"
          style={{
            background: `radial-gradient(closest-side, ${palette.tint}, transparent)`,
          }}
        />
      </section>

      {/* ───────────── Почему мы ───────────── */}
      <section id="about" className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
            Почему выбирают MIDASTOUCH
          </h2>
          <p className="mt-3 opacity-80">
            Сильная экспертиза в разных нишах и готовые инструменты для быстрых результатов.
          </p>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div
                className="rounded-xl p-6 h-full border hover:shadow-sm transition-shadow"
                style={{ background: "transparent", borderColor: palette.stroke }}
              >
                <h3 className="font-medium">{f.title}</h3>
                <p className="mt-2 text-sm opacity-80">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── Шаги ───────────── */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Как это работает</h2>
          <p className="mt-3 opacity-80">Четыре шага к понятной прибыли и управляемым налогам.</p>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.07}>
              <div
                className="rounded-xl p-6 border"
                style={{ borderColor: palette.stroke, background: "transparent" }}
              >
                <div className="text-3xl font-semibold" style={{ color: palette.brand }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-medium">{s.t}</h3>
                <p className="mt-2 text-sm opacity-80">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── Показатели эффективности ───────────── */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Показатели после внедрения</h2>
          <p className="mt-3 opacity-80">
            Видите реальную маржу, налоги и кэш-флоу — и принимаете решения на основе цифр.
          </p>
        </Reveal>
        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
          <Reveal>
            <div className="rounded-xl border p-6" style={{ borderColor: palette.stroke }}>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-80">Динамика прибыли (пример)</div>
                <div className="text-sm font-medium" style={{ color: palette.tint }}>
                  +18% ROI
                </div>
              </div>
              <div className="mt-3">
                <Sparkline stroke={palette.brand} dot={palette.tint} />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="opacity-60">Маржа</div>
                  <div className="font-semibold">38%</div>
                </div>
                <div>
                  <div className="opacity-60">Налоги</div>
                  <div className="font-semibold">учтены</div>
                </div>
                <div>
                  <div className="opacity-60">Кэш-флоу</div>
                  <div className="font-semibold">позитивный</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ background: palette.brand }} />
                <span>Идентифицируйте убыточные SKU/каналы и перераспределяйте бюджет.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ background: palette.brand }} />
                <span>Планируйте налоги заранее — без сюрпризов в отчётный период.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ background: palette.brand }} />
                <span>Контролируйте возвраты, логистику, комиссию и рекламные траты.</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ───────────── Шаблоны/Категории/Покупка ───────────── */}
      <section id="products" className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Шаблоны и категории</h2>
          <p className="mt-3 opacity-80">Выберите готовое решение — и начните считать правильно уже сегодня.</p>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-medium">Самые популярные</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {POPULAR.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.06}>
                  <div
                    className="rounded-xl border p-5 hover:shadow-sm transition"
                    style={{ borderColor: palette.stroke }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="font-medium">{p.name}</div>
                      <div className="text-sm opacity-80">{p.price}</div>
                    </div>
                    <div className="mt-4 flex gap-3">
                      <a
                        href="#pricing"
                        className="rounded-md px-3 py-2 text-sm font-medium transition-transform hover:scale-[1.02]"
                        style={{ background: palette.brand, color: "#0B1F18" }}
                      >
                        В подписку
                      </a>
                      <button
                        className="rounded-md px-3 py-2 text-sm border"
                        style={{ borderColor: palette.stroke }}
                      >
                        Подробнее
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <h3 className="mt-10 text-lg font-medium">Для кого подходят</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {FOR_WHOM.map((f, i) => (
                <Reveal key={f.label} delay={i * 0.05}>
                  <div
                    className="rounded-xl border p-4 flex items-center gap-3"
                    style={{ borderColor: palette.stroke }}
                  >
                    <span className="text-xl">{f.icon}</span>
                    <span className="text-sm">{f.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Боковой блок «Приобрести шаблоны» */}
          <Reveal delay={0.08}>
            <aside
              className="rounded-2xl p-6 lg:sticky lg:top-24 border"
              style={{ borderColor: palette.stroke, background: "transparent" }}
            >
              <h3 className="text-lg font-medium">Приобрести шаблоны</h3>
              <p className="mt-2 text-sm opacity-80">
                Доступ к библиотеке шаблонов и обновлениям в рамках подписки.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>• Демо-превью</li>
                <li>• Пошаговые инструкции</li>
                <li>• Поддержка и апдейты</li>
              </ul>
              <a
                href="#pricing"
                className="mt-5 inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium transition-transform hover:scale-[1.02]"
                style={{ background: palette.brand, color: "#0B1F18" }}
              >
                Выбрать план
              </a>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* ───────────── Цены ───────────── */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Цены и подписка</h2>
          <p className="mt-3 opacity-80">Прозрачно, без скрытых платежей.</p>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {PLANS.map((pl, i) => (
            <Reveal key={pl.name} delay={i * 0.07}>
              <div
                className={
                  "rounded-2xl p-6 border relative overflow-hidden " +
                  (pl.highlighted ? "ring-2" : "")
                }
                style={{
                  borderColor: palette.stroke,
                  background: pl.highlighted ? (theme === "dark" ? "#0F3D30" : palette.brandSoft) : "transparent",
                  boxShadow: pl.highlighted ? `0 0 0 1px ${palette.brand}` : undefined,
                }}
              >
                {pl.highlighted && (
                  <div
                    className="absolute right-4 top-4 text-[10px] uppercase tracking-wider px-2 py-1 rounded-md"
                    style={{ background: palette.brand, color: "#0B1F18" }}
                  >
                    Рекомендуем
                  </div>
                )}
                <div className="text-sm opacity-80">{pl.name}</div>
                <div className="mt-1 text-xl font-semibold">{pl.price}</div>
                <div className="mt-1 text-sm opacity-80">{pl.desc}</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {pl.points.map((pt) => (
                    <li key={pt}>• {pt}</li>
                  ))}
                </ul>
                <a
                  href="#contacts"
                  className="mt-6 inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium transition-transform hover:scale-[1.02]"
                  style={{ background: palette.brand, color: "#0B1F18" }}
                >
                  {pl.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Частые вопросы</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <details
                className="rounded-xl border p-5 group open:bg-transparent transition-colors"
                style={{ borderColor: palette.stroke }}
              >
                <summary className="cursor-pointer select-none font-medium list-none flex items-center justify-between">
                  <span>{f.q}</span>
                  <span
                    className="ml-4 h-6 w-6 inline-flex items-center justify-center rounded-md border text-xs"
                    style={{ borderColor: palette.stroke }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm opacity-80">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── Отзывы ───────────── */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Отзывы</h2>
          <p className="mt-3 opacity-80">Что говорят клиенты.</p>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <div
                className="rounded-xl border p-6 h-full"
                style={{ borderColor: palette.stroke, background: "transparent" }}
              >
                <div className="text-sm opacity-80">“{t.text}”</div>
                <div className="mt-4 text-sm font-medium">{t.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── Контакты ───────────── */}
      <section id="contacts" className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
            Контакты
          </h2>
          <p className="mt-3 opacity-80">
            Задайте вопрос или подключите подписку — ответим в рабочее время.
          </p>
        </Reveal>
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-xl border p-6 grid grid-cols-1 gap-4"
              style={{ borderColor: palette.stroke }}
            >
              <div className="grid gap-2">
                <label className="text-sm">Имя</label>
                <input
                  className="rounded-md border px-3 py-2 bg-transparent outline-none"
                  style={{ borderColor: palette.stroke }}
                  placeholder="Как к вам обращаться?"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">E-mail</label>
                <input
                  type="email"
                  className="rounded-md border px-3 py-2 bg-transparent outline-none"
                  style={{ borderColor: palette.stroke }}
                  placeholder="name@company.com"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">Сообщение</label>
                <textarea
                  className="min-h-28 rounded-md border px-3 py-2 bg-transparent outline-none"
                  style={{ borderColor: palette.stroke }}
                  placeholder="Опишите задачу/нишу/объём."
                />
              </div>
              <button
                className="mt-2 rounded-md px-4 py-2 text-sm font-medium transition-transform hover:scale-[1.02]"
                style={{ background: palette.brand, color: "#0B1F18" }}
              >
                Отправить запрос
              </button>
              <p className="text-xs opacity-70">
                Отправляя форму, вы соглашаетесь с{" "}
                <a href="#policy" className="underline underline-offset-4">
                  политикой конфиденциальности
                </a>.
              </p>
            </form>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-xl border p-6" style={{ borderColor: palette.stroke }}>
              <h3 className="font-medium">Мы на связи</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>Telegram: @midas_touch</li>
                <li>E-mail: hello@midas.touch</li>
                <li>Гео: РФ → масштабирование</li>
                <li>График: Пн–Пт, 10:00–18:00</li>
              </ul>
              <div className="mt-6 rounded-lg p-4" style={{ background: theme === "dark" ? "#0F3D30" : palette.brandSoft }}>
                <div className="text-sm opacity-80">Юр. информация</div>
                <div className="text-sm mt-1">ИП Анна</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────── Footer ───────────── */}
      <footer className="mt-8 border-t" style={{ borderColor: palette.stroke }}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="font-semibold">MIDASTOUCH</div>
              <p className="mt-2 opacity-80">
                Финансовый консалтинг и библиотека шаблонов для малого бизнеса и ИП.
              </p>
            </div>
            <div>
              <div className="font-medium">Разделы</div>
              <ul className="mt-2 space-y-2">
                <li><a className="hover:opacity-80" href="#about">О нас</a></li>
                <li><a className="hover:opacity-80" href="#products">Шаблоны/услуги</a></li>
                <li><a className="hover:opacity-80" href="#pricing">Цены</a></li>
                <li><a className="hover:opacity-80" href="#reviews">Отзывы</a></li>
                <li><a className="hover:opacity-80" href="#contacts">Контакты</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Документы</div>
              <ul className="mt-2 space-y-2">
                <li><a className="hover:opacity-80" href="#offer">Договор оферты</a></li>
                <li><a className="hover:opacity-80" href="#policy" id="policy">Политика конфиденциальности</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Контакты</div>
              <ul className="mt-2 space-y-2">
                <li>hello@midas.touch</li>
                <li>@midas_touch</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-xs opacity-60">
            © {new Date().getFullYear()} MIDASTOUCH. Все права защищены.
          </div>
        </div>
      </footer>
    </main>
  );
}
