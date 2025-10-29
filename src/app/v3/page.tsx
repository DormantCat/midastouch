"use client"
import { ArrowRight, Shield, TrendingUp, Users, CheckCircle2, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F1F4C] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0F1F4C]/95 backdrop-blur-sm border-b border-[#C89B3C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="relative flex items-center space-x-2 -ml-12">
              <Image src="/logo.svg" width={1024} height={512} className="w-52" alt="logo" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-[#C89B3C] transition-colors">Услуги</a>
              <a href="#cases" className="text-gray-300 hover:text-[#C89B3C] transition-colors">Кейсы</a>
              <a href="#contact" className="text-gray-300 hover:text-[#C89B3C] transition-colors">Контакты</a>
              <a href="#cta" className="px-6 py-3 bg-gradient-to-r from-[#C89B3C] to-[#E3D2A1] text-[#0F1F4C] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#C89B3C]/50 transition-all">
                Получить консультацию
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-[#C89B3C]/20">
              <a href="#services" className="block text-gray-300 hover:text-[#C89B3C] transition-colors">Услуги</a>
              <a href="#cases" className="block text-gray-300 hover:text-[#C89B3C] transition-colors">Кейсы</a>
              <a href="#contact" className="block text-gray-300 hover:text-[#C89B3C] transition-colors">Контакты</a>
              <a href="#cta" className="block px-6 py-3 bg-gradient-to-r from-[#C89B3C] to-[#E3D2A1] text-[#0F1F4C] font-semibold rounded-lg text-center">
                Получить консультацию
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C89B3C]/5 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#C89B3C]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#E3D2A1]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-[#C89B3C]/10 border border-[#C89B3C]/30 rounded-full">
              <span className="text-[#E3D2A1] text-sm font-medium">Финансовый консалтинг для маркетплейсов</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Превратите ваш бизнес в{' '}
              <span className="bg-gradient-to-r from-[#C89B3C] to-[#E3D2A1] bg-clip-text text-transparent">
                прибыльную систему
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
              Стратегический финансовый консалтинг для владельцев бизнеса на маркетплейсах.
              Автоматизация, планирование и масштабирование с гарантией результата.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cta"
                className="group px-8 py-4 bg-gradient-to-r from-[#C89B3C] to-[#E3D2A1] text-[#0F1F4C] font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#C89B3C]/50 transition-all flex items-center justify-center"
              >
                Начать сотрудничество
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#cases"
                className="px-8 py-4 border-2 border-[#C89B3C]/50 text-white font-semibold rounded-lg hover:bg-[#C89B3C]/10 transition-all flex items-center justify-center"
              >
                Смотреть кейсы
              </a>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-[#C89B3C] mb-2">250+</div>
                <div className="text-gray-400">Успешных проектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#C89B3C] mb-2">₽2.8 млрд</div>
                <div className="text-gray-400">Оборот клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#C89B3C] mb-2">98%</div>
                <div className="text-gray-400">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Мы знаем специфику маркетплейсов изнутри и создаём решения, которые работают
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-[#C89B3C]/10 to-transparent border border-[#C89B3C]/20 rounded-2xl hover:border-[#C89B3C]/50 transition-all hover:shadow-xl hover:shadow-[#C89B3C]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#C89B3C] to-[#E3D2A1] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-[#0F1F4C]" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Рост прибыли</h3>
              <p className="text-gray-300 leading-relaxed">
                Увеличение чистой прибыли на 40-150% за 6 месяцев работы через оптимизацию процессов и стратегическое планирование
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-[#C89B3C]/10 to-transparent border border-[#C89B3C]/20 rounded-2xl hover:border-[#C89B3C]/50 transition-all hover:shadow-xl hover:shadow-[#C89B3C]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#C89B3C] to-[#E3D2A1] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="text-[#0F1F4C]" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Финансовая защита</h3>
              <p className="text-gray-300 leading-relaxed">
                Прозрачная система учёта, контроль движения денег и защита от финансовых рисков на маркетплейсах
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-[#C89B3C]/10 to-transparent border border-[#C89B3C]/20 rounded-2xl hover:border-[#C89B3C]/50 transition-all hover:shadow-xl hover:shadow-[#C89B3C]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#C89B3C] to-[#E3D2A1] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-[#0F1F4C]" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Персональный подход</h3>
              <p className="text-gray-300 leading-relaxed">
                Индивидуальная стратегия для каждого бизнеса с учётом специфики ниши, товарной матрицы и целей
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Комплексные решения для масштабирования вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-[#C89B3C]/30 transition-all group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#C89B3C] transition-colors">Финансовый аудит</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Комплексный анализ финансового состояния бизнеса, выявление точек роста и зон риска
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#C89B3C] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Анализ юнит-экономики по каждому SKU</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#C89B3C] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Оценка эффективности маркетинга</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#C89B3C] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Карта финансовых рисков</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-[#C89B3C]/30 transition-all group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#C89B3C] transition-colors">Управленческий учёт</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Внедрение системы управленческого учёта для принятия решений на основе данных
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#C89B3C] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Автоматизация отчётности</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#C89B3C] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Дашборды в реальном времени</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#C89B3C] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Интеграция с маркетплейсами</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-[#C89B3C]/30 transition-all group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#C89B3C] transition-colors">Финансовое планирование</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Стратегия развития бизнеса с финансовым моделированием и прогнозами
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#C89B3C] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Бюджетирование и план-факт анализ</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#C89B3C] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Модели масштабирования</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#C89B3C] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Сценарный анализ инвестиций</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-[#C89B3C]/30 transition-all group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#C89B3C] transition-colors">Оптимизация затрат</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Снижение издержек без потери качества и увеличение маржинальности
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#C89B3C] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Оптимизация логистики и складских расходов</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#C89B3C] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Эффективность рекламных кампаний</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-[#C89B3C] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Переговоры с поставщиками</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Кейсы клиентов</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Реальные результаты работы с бизнесами на маркетплейсах
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-[#0F1F4C] to-[#1a2f5c] border border-[#C89B3C]/30 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="px-4 py-2 bg-[#C89B3C]/20 rounded-lg text-[#E3D2A1] text-sm font-medium">
                  Электроника
                </div>
                <div className="text-sm text-gray-400">6 месяцев работы</div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Рост оборота магазина электроники в 3 раза</h3>
              <p className="text-gray-300 mb-6">
                Внедрили систему управленческого учёта, оптимизировали товарную матрицу и логистику.
                Результат — увеличение оборота с ₽15 млн до ₽45 млн в месяц.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#C89B3C]/20">
                <div>
                  <div className="text-3xl font-bold text-[#C89B3C] mb-1">+200%</div>
                  <div className="text-sm text-gray-400">Рост оборота</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#C89B3C] mb-1">+85%</div>
                  <div className="text-sm text-gray-400">Чистая прибыль</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#C89B3C] mb-1">-30%</div>
                  <div className="text-sm text-gray-400">Издержки</div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#0F1F4C] to-[#1a2f5c] border border-[#C89B3C]/30 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="px-4 py-2 bg-[#C89B3C]/20 rounded-lg text-[#E3D2A1] text-sm font-medium">
                  Товары для дома
                </div>
                <div className="text-sm text-gray-400">4 месяца работы</div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Выход на безубыточность за 4 месяца</h3>
              <p className="text-gray-300 mb-6">
                Провели финансовый аудит, выявили убыточные SKU, перестроили ценообразование.
                Клиент вышел из минуса в плюс и начал масштабирование.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#C89B3C]/20">
                <div>
                  <div className="text-3xl font-bold text-[#C89B3C] mb-1">₽8 млн</div>
                  <div className="text-sm text-gray-400">Прибыль/мес</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#C89B3C] mb-1">22%</div>
                  <div className="text-sm text-gray-400">Маржа</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#C89B3C] mb-1">-40%</div>
                  <div className="text-sm text-gray-400">Расходы на рекламу</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[#C89B3C]/10 to-transparent border border-[#C89B3C]/30 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Работаем с маркетплейсами</h3>
                <p className="text-gray-300">Wildberries, Ozon, Яндекс Маркет, МегаМаркет и другие</p>
              </div>
              <div className="flex items-center gap-6 text-4xl font-bold text-[#C89B3C]/50">
                <span>WB</span>
                <span>OZON</span>
                <span>ЯМ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 bg-gradient-to-br from-[#C89B3C]/20 via-[#C89B3C]/10 to-transparent border border-[#C89B3C]/30 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E3D2A1]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C89B3C]/10 rounded-full blur-3xl"></div>

            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Готовы к росту?</h2>
              <p className="text-xl text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                Оставьте заявку на бесплатную консультацию. Мы проанализируем ваш бизнес
                и предложим стратегию развития.
              </p>

              <form className="space-y-4 max-w-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="px-6 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#C89B3C] transition-colors text-white placeholder-gray-400"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="px-6 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#C89B3C] transition-colors text-white placeholder-gray-400"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#C89B3C] transition-colors text-white placeholder-gray-400"
                  required
                />
                <textarea
                  placeholder="Расскажите о вашем бизнесе (необязательно)"
                  rows={4}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#C89B3C] transition-colors text-white placeholder-gray-400 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#C89B3C] to-[#E3D2A1] text-[#0F1F4C] font-bold rounded-lg hover:shadow-2xl hover:shadow-[#C89B3C]/50 transition-all flex items-center justify-center group"
                >
                  Отправить заявку
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </form>

              <p className="text-sm text-gray-400 text-center mt-6">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="#" className="text-[#C89B3C] hover:underline">политикой конфиденциальности</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="relative flex items-center space-x-2 -ml-6">
                <Image src="/logo.svg" width={1024} height={512} className="w-52" alt="logo" />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Финансовый консалтинг для владельцев бизнеса на маркетплейсах.
                Делаем ваш бизнес прибыльным и масштабируемым.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-[#C89B3C] transition-colors">Финансовый аудит</a></li>
                <li><a href="#services" className="hover:text-[#C89B3C] transition-colors">Управленческий учёт</a></li>
                <li><a href="#services" className="hover:text-[#C89B3C] transition-colors">Финансовое планирование</a></li>
                <li><a href="#services" className="hover:text-[#C89B3C] transition-colors">Оптимизация затрат</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="tel:+79999999999" className="hover:text-[#C89B3C] transition-colors">
                    +7 (999) 999-99-99
                  </a>
                </li>
                <li>
                  <a href="mailto:info@midastouch.ru" className="hover:text-[#C89B3C] transition-colors">
                    info@midastouch.ru
                  </a>
                </li>
                <li className="text-sm pt-2">
                  Москва, Россия
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Midas Touch. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#C89B3C] transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-[#C89B3C] transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
