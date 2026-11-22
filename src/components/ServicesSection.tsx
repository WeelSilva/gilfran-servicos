import { motion } from 'framer-motion'
import {
  Ruler,
  Wrench,
  Sparkles,
  Check,
  MessageCircle,
  ArrowUpRight,
  Layers,
} from 'lucide-react'
import { SERVICE_PILLARS, buildWhatsAppUrl } from '../data/brandData'

const PILLAR_ICONS = [Ruler, Wrench, Sparkles]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 sm:py-24 bg-[#0E1013] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A96E] mb-3">
              Soluções Completas
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#F5F5F0] leading-tight">
              Do projeto sob medida à manutenção e higienização técnica.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9CA3AF] max-w-md">
            Atendimento direto e sem intermediários para apartamentos, casas e escritórios corporativos em São Paulo.
          </p>
        </div>

        {/* 3 Pillars Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {SERVICE_PILLARS.map((pillar, index) => {
            const Icon = PILLAR_ICONS[index] ?? Layers
            return (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#15181E] border border-white/10 p-6 sm:p-7 hover:border-[#C9A96E]/45 transition-all duration-300 overflow-hidden"
              >
                {/* Top subtle gradient glow */}
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${pillar.accent} opacity-75 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E2C792]">
                      {pillar.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#C9A96E] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-[1.7rem] font-semibold text-[#F5F5F0] leading-snug mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-medium text-[#C9A96E] mb-4">{pillar.subtitle}</p>

                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#E5E5DF]">
                        <span className="mt-1 w-4 h-4 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/35 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#E2C792]" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/10">
                  <a
                    href={buildWhatsAppUrl(pillar.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-[#25D366] border border-white/12 hover:border-[#25D366] text-[#F5F5F0] hover:text-[#07190D] font-semibold text-sm transition-all duration-200 group/btn"
                  >
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>{pillar.ctaText}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Additional Specialized Services Strip (from @gilfranserv) */}
        <div className="mt-8 rounded-2xl bg-[#121418] border border-white/10 p-5 sm:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C9A96E]">
              Serviços Complementares
            </span>
            <p className="text-sm sm:text-base text-[#E5E5DF]">
              Também realizamos <strong className="text-white">pequenos reparos</strong>,{' '}
              <strong className="text-white">limpeza pós-obra</strong>,{' '}
              <strong className="text-white">lavagem de colchões e carpetes</strong> e{' '}
              <strong className="text-white">pintura residencial/comercial</strong>.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl(
              'Olá Gilfran! Gostaria de consultar disponibilidade para serviços gerais / limpeza pós-obra / pequenos reparos.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C9A96E]/15 hover:bg-[#C9A96E] border border-[#C9A96E]/40 text-[#E2C792] hover:text-[#0B0C0E] text-xs font-semibold transition-colors"
          >
            <span>Consultar Serviços Gerais</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
