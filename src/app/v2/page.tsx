"use client"

import { useState } from 'react';
import {
  TrendingUp,
  Target,
  Shield,
  LineChart,
  FileText,
  Users,
  Menu,
  X,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Image from 'next/image';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitSuccess(true);
    setFormData({ name: '', contact: '' });

    setTimeout(() => {
      setSubmitSuccess(false);
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0F1F4C]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#0F1F4C]/95 backdrop-blur-sm z-50 border-b border-[#C89B3C]/20">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="relative flex items-center space-x-2 -ml-6">
              <Image src="/logo.svg" width={1024} height={512} className="w-52" alt="logo" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#advantages" className="text-[#E3D2A1] hover:text-[#C89B3C] transition-colors">Преимущества</a>
              <a href="#cases" className="text-[#E3D2A1] hover:text-[#C89B3C] transition-colors">Кейсы</a>
              <a href="#services" className="text-[#E3D2A1] hover:text-[#C89B3C] transition-colors">Услуги</a>
              <a href="#contact" className="text-[#E3D2A1] hover:text-[#C89B3C] transition-colors">Контакты</a>
              <a
                href="#cta"
                className="px-6 py-2.5 bg-gradient-to-r from-[#C89B3C] to-[#E3D2A1] text-[#0F1F4C] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#C89B3C]/30 transition-all"
              >
                Оставить заявку
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#E3D2A1] hover:text-[#C89B3C] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-[#C89B3C]/20">
              <a href="#advantages" className="block text-[#E3D2A1] hover:text-[#C89B3C] transition-colors" onClick={() => setIsMenuOpen(false)}>Преимущества</a>
              <a href="#cases" className="block text-[#E3D2A1] hover:text-[#C89B3C] transition-colors" onClick={() => setIsMenuOpen(false)}>Кейсы</a>
              <a href="#services" className="block text-[#E3D2A1] hover:text-[#C89B3C] transition-colors" onClick={() => setIsMenuOpen(false)}>Услуги</a>
              <a href="#contact" className="block text-[#E3D2A1] hover:text-[#C89B3C] transition-colors" onClick={() => setIsMenuOpen(false)}>Контакты</a>
              <a
                href="#cta"
                className="block px-6 py-2.5 bg-gradient-to-r from-[#C89B3C] to-[#E3D2A1] text-[#0F1F4C] rounded-lg font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Оставить заявку
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-[#C89B3C]/10 border border-[#C89B3C]/30 rounded-full">
                <span className="text-[#E3D2A1] text-sm font-medium">Финансовый консалтинг премиум-класса</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Превратите ваш бизнес в
                <span className="bg-gradient-to-r from-[#C89B3C] to-[#E3D2A1] bg-clip-text text-transparent"> золотую жилу</span>
              </h1>

              <p className="text-xl text-[#E3D2A1]/80 leading-relaxed">
                Помогаем владельцам бизнеса на маркетплейсах достичь финансового роста через стратегическое планирование, автоматизацию процессов и экспертный анализ.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#cta"
                  className="px-8 py-4 bg-gradient-to-r from-[#C89B3C] to-[#E3D2A1] text-[#0F1F4C] rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-[#C89B3C]/40 transition-all flex items-center justify-center group"
                >
                  Получить консультацию
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 bg-white/5 text-white border border-[#C89B3C]/30 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
                >
                  Узнать больше
                </a>
              </div>

              <div className="flex flex-wrap gap-8 pt-8 border-t border-[#C89B3C]/20">
                <div>
                  <div className="text-3xl font-bold text-[#C89B3C]">500+</div>
                  <div className="text-[#E3D2A1]/70">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#C89B3C]">2.5x</div>
                  <div className="text-[#E3D2A1]/70">Средний рост прибыли</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#C89B3C]">15 лет</div>
                  <div className="text-[#E3D2A1]/70">Опыт на рынке</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C89B3C]/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-[#1a2f5c] to-[#0F1F4C] p-8 rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-[#C89B3C]/20">
                    <div className="flex items-center space-x-3">
                      <LineChart className="w-8 h-8 text-[#C89B3C]" />
                      <div>
                        <div className="text-white font-semibold">Рост выручки</div>
                        <div className="text-[#E3D2A1]/70 text-sm">За последний квартал</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-[#C89B3C]">+187%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-[#C89B3C]/20">
                    <div className="flex items-center space-x-3">
                      <Target className="w-8 h-8 text-[#C89B3C]" />
                      <div>
                        <div className="text-white font-semibold">Оптимизация расходов</div>
                        <div className="text-[#E3D2A1]/70 text-sm">Экономия бюджета</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-[#C89B3C]">-42%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-[#C89B3C]/20">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-8 h-8 text-[#C89B3C]" />
                      <div>
                        <div className="text-white font-semibold">Чистая прибыль</div>
                        <div className="text-[#E3D2A1]/70 text-sm">Годовой показатель</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-[#C89B3C]">+265%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#1a2f5c]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-[#E3D2A1]/80">
              Мы предлагаем комплексный подход к развитию вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 bg-gradient-to-br from-[#1a2f5c] to-[#0F1F4C] rounded-2xl border border-[#C89B3C]/20 hover:border-[#C89B3C]/50 hover:shadow-xl hover:shadow-[#C89B3C]/20 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#C89B3C] to-[#E3D2A1] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-[#0F1F4C]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Надёжность</h3>
              <p className="text-[#E3D2A1]/70 leading-relaxed">
                15 лет успешной работы и сотни довольных клиентов подтверждают нашу экспертность
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-[#1a2f5c] to-[#0F1F4C] rounded-2xl border border-[#C89B3C]/20 hover:border-[#C89B3C]/50 hover:shadow-xl hover:shadow-[#C89B3C]/20 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#C89B3C] to-[#E3D2A1] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-[#0F1F4C]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Точность</h3>
              <p className="text-[#E3D2A1]/70 leading-relaxed">
                Индивидуальный подход и детальный анализ каждого бизнес-процесса
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-[#1a2f5c] to-[#0F1F4C] rounded-2xl border border-[#C89B3C]/20 hover:border-[#C89B3C]/50 hover:shadow-xl hover:shadow-[#C89B3C]/20 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#C89B3C] to-[#E3D2A1] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-[#0F1F4C]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Рост</h3>
              <p className="text-[#E3D2A1]/70 leading-relaxed">
                Средний рост прибыли наших клиентов составляет 2.5x за первый год работы
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-[#1a2f5c] to-[#0F1F4C] rounded-2xl border border-[#C89B3C]/20 hover:border-[#C89B3C]/50 hover:shadow-xl hover:shadow-[#C89B3C]/20 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#C89B3C] to-[#E3D2A1] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-[#0F1F4C]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Поддержка</h3>
              <p className="text-[#E3D2A1]/70 leading-relaxed">
                Непрерывное сопровождение и консультации на всех этапах развития бизнеса
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Истории успеха
            </h2>
            <p className="text-xl text-[#E3D2A1]/80">
              Реальные результаты наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#1a2f5c] to-[#0F1F4C] rounded-2xl border border-[#C89B3C]/30 overflow-hidden hover:border-[#C89B3C]/60 transition-all">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C89B3C] to-[#E3D2A1] rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#0F1F4C]">WB</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Fashion-бренд</div>
                    <div className="text-[#E3D2A1]/70">Wildberries</div>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[#E3D2A1]/70">Рост выручки</span>
                    <span className="text-[#C89B3C] font-bold text-xl">+340%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#E3D2A1]/70">Оптимизация затрат</span>
                    <span className="text-[#C89B3C] font-bold text-xl">-38%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#E3D2A1]/70">Срок работы</span>
                    <span className="text-white font-semibold">8 месяцев</span>
                  </div>
                </div>
                <p className="text-[#E3D2A1]/80 leading-relaxed">
                  Полная автоматизация финансового учёта и оптимизация логистических процессов привели к трёхкратному росту прибыли.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a2f5c] to-[#0F1F4C] rounded-2xl border border-[#C89B3C]/30 overflow-hidden hover:border-[#C89B3C]/60 transition-all">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C89B3C] to-[#E3D2A1] rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#0F1F4C]">OZ</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Электроника</div>
                    <div className="text-[#E3D2A1]/70">OZON</div>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[#E3D2A1]/70">Рост выручки</span>
                    <span className="text-[#C89B3C] font-bold text-xl">+215%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#E3D2A1]/70">Оптимизация затрат</span>
                    <span className="text-[#C89B3C] font-bold text-xl">-45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#E3D2A1]/70">Срок работы</span>
                    <span className="text-white font-semibold">6 месяцев</span>
                  </div>
                </div>
                <p className="text-[#E3D2A1]/80 leading-relaxed">
                  Разработка стратегии ценообразования и внедрение системы финансового планирования удвоили прибыль компании.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a2f5c] to-[#0F1F4C] rounded-2xl border border-[#C89B3C]/30 overflow-hidden hover:border-[#C89B3C]/60 transition-all">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C89B3C] to-[#E3D2A1] rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#0F1F4C]">YM</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Товары для дома</div>
                    <div className="text-[#E3D2A1]/70">Яндекс Маркет</div>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[#E3D2A1]/70">Рост выручки</span>
                    <span className="text-[#C89B3C] font-bold text-xl">+190%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#E3D2A1]/70">Оптимизация затрат</span>
                    <span className="text-[#C89B3C] font-bold text-xl">-32%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#E3D2A1]/70">Срок работы</span>
                    <span className="text-white font-semibold">10 месяцев</span>
                  </div>
                </div>
                <p className="text-[#E3D2A1]/80 leading-relaxed">
                  Комплексный аудит и реструктуризация бизнес-процессов позволили выйти на новый уровень рентабельности.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#1a2f5c]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-[#E3D2A1]/80">
              Полный спектр финансового консалтинга для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-[#1a2f5c] to-[#0F1F4C] rounded-2xl border border-[#C89B3C]/20 hover:border-[#C89B3C]/50 hover:shadow-xl hover:shadow-[#C89B3C]/20 transition-all">
              <LineChart className="w-12 h-12 text-[#C89B3C] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Финансовый анализ</h3>
              <p className="text-[#E3D2A1]/80 leading-relaxed mb-6">
                Глубокий анализ финансового состояния, выявление точек роста и оптимизации бюджета.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Аудит текущих финансов</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Прогнозирование cash flow</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Отчётность и KPI</span>
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-gradient-to-br from-[#1a2f5c] to-[#0F1F4C] rounded-2xl border border-[#C89B3C]/20 hover:border-[#C89B3C]/50 hover:shadow-xl hover:shadow-[#C89B3C]/20 transition-all">
              <Target className="w-12 h-12 text-[#C89B3C] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Стратегическое планирование</h3>
              <p className="text-[#E3D2A1]/80 leading-relaxed mb-6">
                Разработка долгосрочной стратегии развития и достижения финансовых целей.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Бизнес-моделирование</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Сценарный анализ</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Дорожная карта роста</span>
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-gradient-to-br from-[#1a2f5c] to-[#0F1F4C] rounded-2xl border border-[#C89B3C]/20 hover:border-[#C89B3C]/50 hover:shadow-xl hover:shadow-[#C89B3C]/20 transition-all">
              <TrendingUp className="w-12 h-12 text-[#C89B3C] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Оптимизация процессов</h3>
              <p className="text-[#E3D2A1]/80 leading-relaxed mb-6">
                Автоматизация и оптимизация бизнес-процессов для повышения эффективности.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Внедрение систем учёта</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Снижение издержек</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Повышение маржинальности</span>
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-gradient-to-br from-[#1a2f5c] to-[#0F1F4C] rounded-2xl border border-[#C89B3C]/20 hover:border-[#C89B3C]/50 hover:shadow-xl hover:shadow-[#C89B3C]/20 transition-all">
              <FileText className="w-12 h-12 text-[#C89B3C] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Налоговое планирование</h3>
              <p className="text-[#E3D2A1]/80 leading-relaxed mb-6">
                Легальная оптимизация налогообложения и соответствие законодательству.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Налоговая оптимизация</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Подготовка отчётности</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Юридическое сопровождение</span>
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-gradient-to-br from-[#1a2f5c] to-[#0F1F4C] rounded-2xl border border-[#C89B3C]/20 hover:border-[#C89B3C]/50 hover:shadow-xl hover:shadow-[#C89B3C]/20 transition-all">
              <Shield className="w-12 h-12 text-[#C89B3C] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Управление рисками</h3>
              <p className="text-[#E3D2A1]/80 leading-relaxed mb-6">
                Выявление и минимизация финансовых рисков для стабильности бизнеса.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Анализ рисков</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Хеджирование</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Финансовая безопасность</span>
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-gradient-to-br from-[#1a2f5c] to-[#0F1F4C] rounded-2xl border border-[#C89B3C]/20 hover:border-[#C89B3C]/50 hover:shadow-xl hover:shadow-[#C89B3C]/20 transition-all">
              <Users className="w-12 h-12 text-[#C89B3C] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Индивидуальное сопровождение</h3>
              <p className="text-[#E3D2A1]/80 leading-relaxed mb-6">
                Персональный финансовый консультант для вашего бизнеса.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">24/7 поддержка</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Ежемесячные консультации</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E3D2A1]/70">Операционная помощь</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1a2f5c] to-[#0F1F4C] rounded-3xl border border-[#C89B3C]/30 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#C89B3C]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#C89B3C]/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="text-center mb-10">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Готовы увеличить прибыль?
                </h2>
                <p className="text-xl text-[#E3D2A1]/80">
                  Оставьте заявку и получите бесплатную консультацию с финансовым экспертом
                </p>
              </div>

              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#C89B3C] to-[#E3D2A1] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#0F1F4C]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Спасибо за вашу заявку!</h3>
                  <p className="text-[#E3D2A1]/80">
                    Наш специалист свяжется с вами в ближайшее время
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-[#C89B3C]/30 rounded-xl text-white placeholder-[#E3D2A1]/50 focus:outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Email или телефон"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-[#C89B3C]/30 rounded-xl text-white placeholder-[#E3D2A1]/50 focus:outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#C89B3C] to-[#E3D2A1] text-[#0F1F4C] rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#C89B3C]/40 transition-all flex items-center justify-center group disabled:opacity-70"
                  >
                    {isSubmitting ? 'Отправка...' : 'Получить консультацию'}
                    {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </button>

                  <p className="text-center text-sm text-[#E3D2A1]/60">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#C89B3C]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="relative flex items-center space-x-2 -ml-6">
              <Image src="/logo.svg" width={1024} height={512} className="w-52" alt="logo" />
            </div>
              <p className="text-[#E3D2A1]/70 leading-relaxed mb-4">
                Финансовый консалтинг премиум-класса для владельцев бизнеса на маркетплейсах.
              </p>
              <div className="text-[#E3D2A1]/70">
                <p>Email: info@midastouch.ru</p>
                <p>Телефон: +7 (495) 123-45-67</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#advantages" className="text-[#E3D2A1]/70 hover:text-[#C89B3C] transition-colors">Преимущества</a></li>
                <li><a href="#cases" className="text-[#E3D2A1]/70 hover:text-[#C89B3C] transition-colors">Кейсы</a></li>
                <li><a href="#services" className="text-[#E3D2A1]/70 hover:text-[#C89B3C] transition-colors">Услуги</a></li>
                <li><a href="#cta" className="text-[#E3D2A1]/70 hover:text-[#C89B3C] transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2">
                <li><span className="text-[#E3D2A1]/70">Финансовый анализ</span></li>
                <li><span className="text-[#E3D2A1]/70">Стратегическое планирование</span></li>
                <li><span className="text-[#E3D2A1]/70">Оптимизация процессов</span></li>
                <li><span className="text-[#E3D2A1]/70">Налоговое планирование</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#C89B3C]/20 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-[#E3D2A1]/60 text-sm mb-4 sm:mb-0">
              © 2024 Midas Touch. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#E3D2A1]/60 hover:text-[#C89B3C] transition-colors text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-[#E3D2A1]/60 hover:text-[#C89B3C] transition-colors text-sm">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
