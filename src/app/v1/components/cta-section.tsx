"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section className="bg-primary py-16 md:py-24 lg:py-32 xl:py-40">
      <div className="container px-4 max-w-3xl mx-auto">
        <Card className="border-accent/20 bg-card/95 p-6 md:p-10 lg:p-12 backdrop-blur-sm">
          <div className="mb-6 md:mb-8 text-center">
            <h2 className="mb-3 md:mb-4 font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-card-foreground text-balance">
              {"Начните расти уже сегодня"}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-pretty px-2 md:px-0">
              {"Оставьте заявку, и мы свяжемся с вами в течение 24 часов для бесплатной консультации"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-11 md:h-12 lg:h-14 text-sm md:text-base"
                required
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Email или телефон"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="h-11 md:h-12 lg:h-14 text-sm md:text-base"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-sm md:text-base py-5 md:py-6 lg:py-7"
            >
              {"Получить консультацию"}
            </Button>
            <p className="text-center text-xs md:text-sm text-muted-foreground px-2 md:px-0">
              {"Нажимая кнопку, вы соглашаетесь с "}
              <a href="#" className="text-accent hover:underline">
                {"политикой конфиденциальности"}
              </a>
            </p>
          </form>
        </Card>
      </div>
    </section>
  )
}
