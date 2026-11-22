import { useState } from 'react'
import { MessageCircle, X, ArrowRight } from 'lucide-react'
import { BRAND, buildWhatsAppUrl } from '../data/brandData'

const QUICK_TOPICS = [
  {
    label: 'Orçar Persiana / Cortina Sob Medida',
    msg: 'Olá Gilfran! Gostaria de um orçamento de persiana ou cortina sob medida.',
  },
  {
    label: 'Consertar Persiana Travada / Cordão',
    msg: 'Olá Gilfran! Preciso de manutenção/conserto em persiana (cordão, esteira ou comando).',
  },
  {
    label: 'Lavagem de Cortina ou Estofado',
    msg: 'Olá Gilfran! Gostaria de orçar lavagem e higienização de cortina/estofado.',
  },
]

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 rounded-2xl bg-[#14171D] border border-[#C9A96E]/35 p-4 shadow-2xl">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div>
              <p className="text-xs font-bold text-[#F5F5F0]">Atendimento Gilfran Serviços</p>
              <p className="text-[11px] text-emerald-400">Online • {BRAND.phoneDisplay}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg text-[#9CA3AF] hover:text-white cursor-pointer"
              aria-label="Fechar janela rápida"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {QUICK_TOPICS.map((topic) => (
              <a
                key={topic.label}
                href={buildWhatsAppUrl(topic.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white/[0.04] hover:bg-[#25D366]/15 border border-white/10 hover:border-[#25D366]/50 text-xs text-[#E5E5DF] transition-colors"
              >
                <span>{topic.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#25D366] hover:bg-[#22bf5b] text-[#07190D] font-bold text-sm shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 cursor-pointer"
        aria-label="Falar com Gilfran no WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">Falar com Gilfran</span>
      </button>
    </div>
  )
}
