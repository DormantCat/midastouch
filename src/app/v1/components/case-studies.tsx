import { Card } from "@/components/ui/card"

const stats = [
  {
    number: "> 500",
    label: "предпринимателей",
    description: "доверили нам свои финансы",
  },
  {
    number: "в 2 раза",
    label: "быстрее",
    description: "принимаете решения с нашей системой",
  },
  {
    number: "в 4 раза",
    label: "меньше времени",
    description: "тратите на финансовый учёт",
  },
]

const cases = [
  {
    company: "Wildberries",
    logo: "/wildberries-logo.jpg",
    metric: "+156%",
    description: "Рост выручки за 6 месяцев",
    details: "Оптимизация ценообразования и внедрение системы финансового планирования",
  },
  {
    company: "Ozon",
    logo: "/ozon-logo.png",
    metric: "₽4.2М",
    description: "Экономия на налогах",
    details: "Реструктуризация бизнеса и оптимизация налоговой нагрузки",
  },
  {
    company: "Яндекс.Маркет",
    logo: "/yandex-market-logo.jpg",
    metric: "-40%",
    description: "Снижение издержек",
    details: "Автоматизация учёта и внедрение системы контроля расходов",
  },
]

export function CaseStudies() {
  return (
    <section className="py-16 md:py-24 lg:py-32 xl:py-40">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="mx-auto max-w-7xl space-y-12 md:space-y-20">
          <div>
            <div className="mb-10 md:mb-16 text-center">
              <h2 className="mb-3 md:mb-4 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance px-4 md:px-0">
                {"Результаты в цифрах"}
              </h2>
            </div>

            <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-border bg-gradient-to-br from-card to-card/50 p-6 md:p-8 lg:p-10 text-center transition-all hover:shadow-xl hover:shadow-gold/5"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gold/5 rounded-full blur-2xl" />
                  <div className="relative space-y-2 md:space-y-3">
                    <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gold">{stat.number}</div>
                    <div className="text-lg md:text-xl font-semibold text-card-foreground">{stat.label}</div>
                    <p className="text-sm md:text-base text-muted-foreground">{stat.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-10 md:mb-16 text-center">
              <h2 className="mb-3 md:mb-4 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance px-4 md:px-0">
                {"Кейсы наших клиентов"}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground text-pretty px-4 md:px-0">
                {"Реальные результаты компаний, работающих на маркетплейсах"}
              </p>
            </div>

            <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {cases.map((caseStudy, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-border bg-card p-6 md:p-8 transition-all hover:border-gold/50 hover:shadow-xl"
                >
                  <div className="mb-4 md:mb-6 flex h-10 md:h-12 items-center">
                    <img
                      src={caseStudy.logo || "/placeholder.svg"}
                      alt={caseStudy.company}
                      className="h-full w-auto object-contain opacity-60"
                    />
                  </div>
                  <div className="mb-3 md:mb-4 font-serif text-4xl md:text-5xl font-bold text-gold">
                    {caseStudy.metric}
                  </div>
                  <div className="mb-2 md:mb-3 text-lg md:text-xl font-semibold text-card-foreground">
                    {caseStudy.description}
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">{caseStudy.details}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
