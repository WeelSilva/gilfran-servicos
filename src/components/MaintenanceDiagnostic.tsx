import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Wrench,
  Clock,
  BadgePercent,
  MessageCircle,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react'
import { DIAGNOSTIC_SYMPTOMS, buildWhatsAppUrl } from '../data/brandData'

export function MaintenanceDiagnostic() {
  const [selectedId, setSelectedId] = useState<string>(DIAGNOSTIC_SYMPTOMS[0].id)
  const activeDiagnostic =
    DIAGNOSTIC_SYMPTOMS.find((item) => item.id === selectedId) ?? DIAGNOSTIC_SYMPTOMS[0]

  return (
    <section id="diagnostico" className="py-16 sm:py-24 bg-[#0B0C0E] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A96E] mb-3">
            Diagnóstico Técnico Interativo
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#F5F5F0] leading-tight mb-3">
            Sua persiana travou ou arrebentou o cordão?
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF]">
            Muitas vezes você não precisa comprar uma persiana nova. Selecione o sintoma abaixo para descobrir a solução técnica exata e enviar direto para o especialista.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Symptom Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {DIAGNOSTIC_SYMPTOMS.map((item) => {
              const isSelected = item.id === activeDiagnostic.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-[#181B20] border-[#C9A96E] shadow-[0_0_24px_rgba(201,169,110,0.12)]'
                      : 'bg-[#121418]/70 border-white/10 hover:border-white/25 hover:bg-[#15181E]'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#C9A96E]">
                      <AlertCircle className="w-3 h-3" />
                      {item.category}
                    </span>
                    <p
                      className={`text-sm sm:text-base font-medium leading-snug ${
                        isSelected ? 'text-[#F5F5F0]' : 'text-[#D1D5DB]'
                      }`}
                    >
                      {item.symptom}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      isSelected ? 'text-[#C9A96E] translate-x-1' : 'text-[#6B7280]'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Right: Technical Prescription Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDiagnostic.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="h-full rounded-2xl bg-gradient-to-br from-[#171A21] to-[#111318] border border-[#C9A96E]/35 p-6 sm:p-8 flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-white/10">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-xs font-semibold text-[#E2C792]">
                      <Wrench className="w-3.5 h-3.5" />
                      Recomendação Técnica Gilfran
                    </span>
                    <span className="text-xs text-[#9CA3AF]">
                      Aplica-se a: <strong className="text-[#F5F5F0]">{activeDiagnostic.affectedType}</strong>
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F5F5F0] mb-3">
                    {activeDiagnostic.diagnosisTitle}
                  </h3>

                  <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed mb-6">
                    {activeDiagnostic.solutionDetail}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#C9A96E] mb-1">
                        <Clock className="w-4 h-4" />
                        <span>Agilidade de Execução</span>
                      </div>
                      <p className="text-sm text-[#E5E5DF]">{activeDiagnostic.estimatedTime}</p>
                    </div>

                    <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                        <BadgePercent className="w-4 h-4" />
                        <span>Custo-Benefício</span>
                      </div>
                      <p className="text-sm text-[#E5E5DF]">{activeDiagnostic.savingsNote}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>Peças compatíveis com todas as marcas e modelos.</span>
                  </div>

                  <a
                    href={buildWhatsAppUrl(activeDiagnostic.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#22bf5b] text-[#07190D] font-bold text-sm shadow-[0_0_24px_rgba(37,211,102,0.25)] transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Enviar Diagnóstico no WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
