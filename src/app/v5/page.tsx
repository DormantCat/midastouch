"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X, ChevronDown, TrendingUp, CheckCircle2, Users, Building2, ShoppingBag, Dumbbell, GraduationCap, Zap, Shield, Clock, ArrowRight, Star, Quote, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const templates = [
    {
      title: 'Финансовая модель для стартапа',
      description: 'Полный учёт доходов, расходов и прогноз на 12 месяцев',
      price: '4 990 ₽',
      popular: true,
      category: 'ИП'
    },
    {
      title: 'Учёт для маркетплейсов',
      description: 'Анализ продаж, комиссий и прибыльности на WB и Ozon',
      price: '5 990 ₽',
      popular: true,
      category: 'WB'
    },
    {
      title: 'CRM для онлайн-школы',
      description: 'Управление учениками, платежами и воронкой продаж',
      price: '6 990 ₽',
      popular: true,
      category: 'Школа'
    },
    {
      title: 'Финансы фитнес-клуба',
      description: 'Учёт абонементов, персональных тренировок и расходов',
      price: '5 490 ₽',
      popular: false,
      category: 'Фитнес'
    }
  ]

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Экономия времени',
      description: 'Автоматизация рутинных задач освобождает до 15 часов в неделю'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Надёжность',
      description: 'Проверенные шаблоны от экспертов с опытом 10+ лет'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Рост прибыли',
      description: 'Клиенты увеличивают прибыль в среднем на 27% за 6 месяцев'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Быстрый старт',
      description: 'Готовые решения внедряются за 1 день'
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'Выберите шаблон',
      description: 'Подберите готовое решение под ваш бизнес'
    },
    {
      number: '02',
      title: 'Настройте под себя',
      description: 'Адаптируйте шаблон за несколько минут'
    },
    {
      number: '03',
      title: 'Начните работать',
      description: 'Получите полный контроль над финансами'
    }
  ]

  const categories = [
    { icon: <Users className="h-8 w-8" />, title: 'ИП', count: '12 шаблонов' },
    { icon: <ShoppingBag className="h-8 w-8" />, title: 'WB/Ozon', count: '8 шаблонов' },
    { icon: <Dumbbell className="h-8 w-8" />, title: 'Фитнес', count: '6 шаблонов' },
    { icon: <GraduationCap className="h-8 w-8" />, title: 'Онлайн-школы', count: '10 шаблонов' }
  ]

  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Основатель онлайн-школы',
      avatar: 'AP',
      text: 'Шаблоны MIDASTOUCH помогли структурировать финансы школы. Теперь вижу всю картину в одном месте. Прибыль выросла на 35% за квартал!',
      rating: 5
    },
    {
      name: 'Дмитрий Соколов',
      role: 'Селлер на Wildberries',
      avatar: 'ДС',
      text: 'Раньше тратил по 10 часов в неделю на сведение отчётов. С вашими шаблонами это занимает 30 минут. Рекомендую всем!',
      rating: 5
    },
    {
      name: 'Елена Морозова',
      role: 'Владелица фитнес-студии',
      avatar: 'ЕМ',
      text: 'Наконец-то понимаю, откуда берутся деньги и куда уходят. Шаблон окупился в первый же месяц!',
      rating: 5
    }
  ]

  const faqs = [
    {
      question: 'Что входит в шаблон?',
      answer: 'Каждый шаблон включает готовые таблицы для учёта, автоматические расчёты, дашборды с визуализацией, инструкцию по настройке и доступ к обновлениям.'
    },
    {
      question: 'Нужны ли специальные знания?',
      answer: 'Нет, шаблоны разработаны для предпринимателей без финансового образования. Всё интуитивно понятно, есть подробные инструкции и видео-гайды.'
    },
    {
      question: 'Можно ли адаптировать под свой бизнес?',
      answer: 'Да, все шаблоны полностью кастомизируются. Вы можете добавлять свои категории, менять формулы и настраивать под специфику вашего бизнеса.'
    },
    {
      question: 'Есть ли техподдержка?',
      answer: 'Конечно! При покупке вы получаете 30 дней бесплатной поддержки. Ответим на любые вопросы по настройке и использованию.'
    },
    {
      question: 'Как происходит оплата?',
      answer: 'Принимаем оплату картами, через СБП и электронные кошельки. После оплаты шаблон придёт на email в течение 5 минут.'
    }
  ]

  const stats = [
    { value: '2 500+', label: 'Довольных клиентов' },
    { value: '27%', label: 'Рост прибыли' },
    { value: '15 часов', label: 'Экономия в неделю' },
    { value: '4.9/5', label: 'Средняя оценка' }
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image src="/logo.svg" alt="MIDASTOUCH" width={160} height={48} className="h-8 sm:h-10 w-auto dark:invert" />
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
              <a href="#templates" className="text-sm font-medium hover:text-primary transition-colors">Шаблоны</a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
              <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="transition-transform hover:scale-110"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <Button className="hidden sm:inline-flex" size="default">
                Начать
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t animate-in slide-in-from-top-5">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium hover:text-primary transition-colors py-2">О нас</a>
              <a href="#templates" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium hover:text-primary transition-colors py-2">Шаблоны</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium hover:text-primary transition-colors py-2">Цены</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium hover:text-primary transition-colors py-2">Отзывы</a>
              <a href="#contacts" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium hover:text-primary transition-colors py-2">Контакты</a>
              <Button className="w-full mt-2" onClick={() => setMobileMenuOpen(false)}>Начать</Button>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-16 sm:pt-20">
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Badge className="mb-6 text-xs sm:text-sm px-3 sm:px-4 py-1.5" variant="secondary">
                Финансовый консалтинг нового поколения
              </Badge>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 sm:mb-8 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                Финансовые шаблоны, которые ведут учёт за вас
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto">
                Автоматизируйте финансы вашего бизнеса с помощью готовых решений от экспертов. Экономьте время и увеличивайте прибыль.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-base px-8 w-full sm:w-auto group">
                  Выбрать шаблон
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 w-full sm:w-auto">
                  Смотреть демо
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-16 sm:mt-24 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 sm:p-6 rounded-2xl bg-card/50 backdrop-blur-sm border animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-2xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-4" variant="outline">О нас</Badge>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Почему стоит выбрать нас</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Мы помогаем предпринимателям навести порядок в финансах и сосредоточиться на развитии бизнеса
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-4" variant="outline">Процесс работы</Badge>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Как это работает</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Три простых шага к эффективному управлению финансами
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl sm:text-2xl font-bold mb-4 sm:mb-6 shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden sm:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-4" variant="outline">Эффективность</Badge>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Результаты наших клиентов</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Реальные показатели бизнеса после внедрения наших шаблонов
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <Card className="text-center p-6 sm:p-8 border-2">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">+27%</div>
                <div className="text-base sm:text-lg font-medium mb-2">Рост прибыли</div>
                <p className="text-sm text-muted-foreground">В среднем за 6 месяцев</p>
              </Card>
              <Card className="text-center p-6 sm:p-8 border-2">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">-68%</div>
                <div className="text-base sm:text-lg font-medium mb-2">Меньше времени на учёт</div>
                <p className="text-sm text-muted-foreground">Автоматизация рутины</p>
              </Card>
              <Card className="text-center p-6 sm:p-8 border-2 sm:col-span-2 lg:col-span-1">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-base sm:text-lg font-medium mb-2">Рекомендуют нас</div>
                <p className="text-sm text-muted-foreground">Довольные клиенты</p>
              </Card>
            </div>
          </div>
        </section>

        <section id="templates" className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-4" variant="outline">Для кого подходят</Badge>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Выберите свою нишу</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Готовые решения для разных сфер бизнеса
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
              {categories.map((category, index) => (
                <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">{category.count}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold">Самые популярные</h3>
                <Button variant="ghost" className="hidden sm:inline-flex">
                  Все шаблоны
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {templates.map((template, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    {template.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-accent text-accent-foreground">Популярно</Badge>
                      </div>
                    )}
                    <CardHeader className="flex-grow">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-base sm:text-lg mb-2">{template.title}</CardTitle>
                      <CardDescription className="text-sm">{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-end justify-between mb-4">
                        <div>
                          <div className="text-2xl sm:text-3xl font-bold">{template.price}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">единоразово</div>
                        </div>
                      </div>
                      <Button className="w-full group-hover:bg-primary/90" size="lg">
                        Купить
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-4" variant="outline">Подписка</Badge>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Выберите свой тариф</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Доступ ко всем шаблонам и регулярные обновления
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Базовый</CardTitle>
                  <CardDescription className="text-sm sm:text-base">Для начинающих</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl sm:text-4xl font-bold">2 990 ₽</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-sm sm:text-base">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Доступ к 5 шаблонам</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm sm:text-base">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Базовая поддержка</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm sm:text-base">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Обновления шаблонов</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline" size="lg">Выбрать</Button>
                </CardContent>
              </Card>

              <Card className="border-primary border-2 hover:shadow-2xl transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1">Популярный</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Профессиональный</CardTitle>
                  <CardDescription className="text-sm sm:text-base">Для растущего бизнеса</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl sm:text-4xl font-bold">5 990 ₽</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-sm sm:text-base">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Доступ ко всем шаблонам</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm sm:text-base">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Приоритетная поддержка</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm sm:text-base">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Персональные консультации</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm sm:text-base">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ранний доступ к новинкам</span>
                    </li>
                  </ul>
                  <Button className="w-full" size="lg">Выбрать</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Корпоративный</CardTitle>
                  <CardDescription className="text-sm sm:text-base">Для крупных компаний</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl sm:text-4xl font-bold">От 15 000 ₽</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-sm sm:text-base">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Всё из Профессионального</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm sm:text-base">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Индивидуальные шаблоны</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm sm:text-base">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Выделенный менеджер</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm sm:text-base">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Интеграции с вашими системами</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline" size="lg">Связаться</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-4" variant="outline">FAQ</Badge>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Частые вопросы</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Ответы на популярные вопросы о наших шаблонах
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl px-6 bg-card">
                    <AccordionTrigger className="text-left hover:no-underline py-4 text-sm sm:text-base">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 text-sm sm:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-16 sm:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-4" variant="outline">Отзывы</Badge>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Что говорят клиенты</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Реальные истории успеха наших пользователей
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Quote className="h-6 w-6 text-primary/20 mb-2" />
                    <p className="text-sm sm:text-base text-muted-foreground italic">{testimonial.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-4" variant="outline">Контакты</Badge>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Свяжитесь с нами</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Готовы ответить на ваши вопросы и помочь выбрать подходящее решение
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="mx-auto h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <CardTitle className="text-base sm:text-lg mb-2">Email</CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground">info@midastouch.ru</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="mx-auto h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <CardTitle className="text-base sm:text-lg mb-2">Телефон</CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground">+7 (495) 123-45-67</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 sm:col-span-3 lg:col-span-1">
                <div className="mx-auto h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle className="text-base sm:text-lg mb-2">Адрес</CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground">Москва, ул. Примерная, 1</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Готовы начать?</h2>
            <p className="text-base sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto opacity-90">
              Присоединяйтесь к 2 500+ предпринимателям, которые уже оптимизировали свои финансы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="text-base px-8 w-full sm:w-auto group">
                Начать бесплатно
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 w-full sm:w-auto border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground">
                Заказать консультацию
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted/50 border-t py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <Image src="/logo.svg" alt="MIDASTOUCH" width={160} height={48} className="h-8 w-auto mb-4 dark:invert" />
              <p className="text-sm text-muted-foreground">
                Финансовые шаблоны для эффективного управления бизнесом
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Продукты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Шаблоны</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Подписка</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Консультации</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Корпоративные решения</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Поддержка</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">База знаний</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Статус системы</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="text-center sm:text-left">
              © 2025 MIDASTOUCH. Все права защищены.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Договор оферты</a>
              <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
