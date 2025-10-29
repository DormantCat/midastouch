"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gold/5 via-transparent to-transparent blur-3xl" />

      <div className="container relative z-10 px-4 py-16 md:py-24 lg:py-32 xl:py-40 max-w-7xl mx-auto">
        <div className="text-center space-y-6 md:space-y-8">
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="flex items-center gap-2 md:gap-3">
              <Image src="/logo.svg" width={1024} height={512} className="h-32" alt="logo" />
            </div>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight tracking-tight text-foreground text-balance">
            {"Превратите финансовый хаос в "}
            <span className="text-gold">{"систему роста"}</span>
          </h1>

          <p className="mx-auto max-w-xl md:max-w-2xl lg:max-w-3xl text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground text-pretty px-4 md:px-0">
            {
              "Помогаем владельцам бизнеса на маркетплейсах увеличить прибыль на 40-60% через управленческий учёт и финансовую аналитику"
            }
          </p>

          <div className="mx-auto max-w-5xl grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-left pt-6 md:pt-8">
            <div className="space-y-2 md:space-y-3 p-4 md:p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gold/10 text-gold font-bold text-base md:text-lg">
                01
              </div>
              <div className="text-sm md:text-base font-medium text-foreground leading-snug">
                {"Видите реальную прибыль, а не только обороты"}
              </div>
            </div>
            <div className="space-y-2 md:space-y-3 p-4 md:p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gold/10 text-gold font-bold text-base md:text-lg">
                02
              </div>
              <div className="text-sm md:text-base font-medium text-foreground leading-snug">
                {"Принимаете решения на основе точных данных"}
              </div>
            </div>
            <div className="space-y-2 md:space-y-3 p-4 md:p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
              <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gold/10 text-gold font-bold text-base md:text-lg">
                03
              </div>
              <div className="text-sm md:text-base font-medium text-foreground leading-snug">
                {"Автоматизируете учёт и экономите время"}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 md:gap-6 pt-6 md:pt-8">
            <Button
              size="lg"
              className="group bg-gold text-accent-foreground hover:bg-gold-light text-base md:text-lg px-8 md:px-12 py-6 md:py-8 rounded-full font-semibold shadow-xl shadow-gold/20 transition-all hover:shadow-2xl hover:shadow-gold/30 w-full sm:w-auto"
            >
              {"Получить консультацию"}
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-xs md:text-sm text-muted-foreground px-4 md:px-0 text-center">
              {"Бесплатная консультация для собственников бизнеса с оборотом от 2 млн ₽"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
