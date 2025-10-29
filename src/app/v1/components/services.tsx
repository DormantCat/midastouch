import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Финансовый аудит",
    description: "Комплексный анализ финансового состояния бизнеса с выявлением точек роста и оптимизации",
    features: ["Анализ P&L", "Оценка рисков", "Рекомендации по улучшению"],
  },
  {
    title: "Стратегическое планирование",
    description: "Разработка финансовой стратегии развития с учётом специфики маркетплейсов",
    features: ["Бюджетирование", "Прогнозирование", "KPI и метрики"],
  },
  {
    title: "Автоматизация учёта",
    description: "Внедрение современных систем управленческого и бухгалтерского учёта",
    features: ["Интеграция с маркетплейсами", "Онлайн-отчётность", "Мобильный доступ"],
  },
  {
    title: "Налоговая оптимизация",
    description: "Легальное снижение налоговой нагрузки и минимизация финансовых рисков",
    features: ["Выбор системы налогообложения", "Реструктуризация", "Сопровождение проверок"],
  },
]

export function Services() {
  return (
    <section className="py-16 md:py-24 lg:py-32 xl:py-40">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 lg:mb-20 text-center">
          <h2 className="mb-3 md:mb-4 font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance">
            {"Наши услуги"}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground text-pretty px-4 md:px-0">
            {"Полный спектр финансового консалтинга для вашего бизнеса"}
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-border bg-card p-6 md:p-8 lg:p-10 transition-all hover:border-accent hover:shadow-xl"
            >
              <h3 className="mb-3 md:mb-4 text-xl md:text-2xl lg:text-3xl font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mb-4 md:mb-6 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                className="group/btn text-accent hover:text-accent-foreground hover:bg-accent text-sm md:text-base"
              >
                {"Подробнее"}
                <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
