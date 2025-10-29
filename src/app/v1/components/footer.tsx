import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-2">
              <div className="relative -ml-6 mb-4 flex items-center gap-2 md:items-start justify-start">
                <Image src="/logo.svg" width={1024} height={512} className="w-52" alt="logo" />
              </div>
              <p className="mb-4 md:mb-6 max-w-sm text-sm md:text-base leading-relaxed text-muted-foreground">
                {"Экспертный финансовый консалтинг для владельцев бизнеса на маркетплейсах с 2020 года."}
              </p>
              <div className="space-y-2 text-sm md:text-base text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                  <a href="mailto:info@midastouch.ru" className="hover:text-accent break-all">
                    info@midastouch.ru
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                  <a href="tel:+74951234567" className="hover:text-accent">
                    +7 (495) 123-45-67
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{"Москва, Россия"}</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold text-card-foreground">{"Услуги"}</h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent">
                    {"Финансовый аудит"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    {"Стратегическое планирование"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    {"Автоматизация учёта"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    {"Налоговая оптимизация"}
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold text-card-foreground">{"Компания"}</h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent">
                    {"О нас"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    {"Кейсы"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    {"Блог"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    {"Контакты"}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 md:mt-12 border-t border-border pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground px-4 md:px-0">
            <p className="leading-relaxed">
              {"© 2025 Midas Touch. Все права защищены. "}
              <a href="#" className="text-accent hover:underline">
                {"Политика конфиденциальности"}
              </a>
              {" • "}
              <a href="#" className="text-accent hover:underline">
                {"Условия использования"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
