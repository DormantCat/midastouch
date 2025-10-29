import { TrendingUp, Shield, Zap, Target } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Рост прибыли",
    description: "Увеличиваем выручку на 40-60% через оптимизацию финансовых процессов и стратегическое планирование",
  },
  {
    icon: Shield,
    title: "Надёжность",
    description: "Работаем с соблюдением всех стандартов безопасности и конфиденциальности данных",
  },
  {
    icon: Zap,
    title: "Автоматизация",
    description: "Внедряем современные системы учёта и аналитики для экономии времени и ресурсов",
  },
  {
    icon: Target,
    title: "Точность",
    description: "Принимайте решения на основе точных данных и профессиональных прогнозов",
  },
]

export function Benefits() {
  return (
    <section className="py-16 md:py-24 lg:py-32 xl:py-40 bg-muted/30">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 lg:mb-20 text-center">
          <h2 className="mb-3 md:mb-4 font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance">
            {"Почему выбирают нас"}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground text-pretty px-4 md:px-0">
            {"Комплексный подход к финансовому управлению вашим бизнесом"}
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative rounded-xl md:rounded-2xl border border-border bg-card p-6 md:p-8 transition-all hover:border-gold/50 hover:shadow-xl hover:shadow-gold/5"
            >
              <div className="mb-4 md:mb-6 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg md:rounded-xl bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-accent-foreground group-hover:scale-110">
                <benefit.icon className="h-6 w-6 md:h-7 md:w-7" />
              </div>
              <h3 className="mb-2 md:mb-3 text-lg md:text-xl font-semibold text-card-foreground">{benefit.title}</h3>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
