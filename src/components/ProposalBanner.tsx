import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  Eye,
  EyeOff,
  TrendingUp,
  Smartphone,
  ShieldCheck,
  X,
  ChevronRight,
} from 'lucide-react'

interface ProposalBannerProps {
  visible: boolean
  onToggle: () => void
}

export function ProposalBanner({ visible, onToggle }: ProposalBannerProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="relative z-50 bg-gradient-to-r from-[#1A1610] via-[#241E14] to-[#1A1610] border-b border-[#C9A96E]/35 text-[#F5F5F0]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#E2C792] font-semibold tracking-wide uppercase text-[10px]">
                  <Sparkles className="w-3 h-3" />
                  Proposta Exclusiva
                </span>
                <p className="text-[#E5E5DF] hidden sm:block">
                  Protótipo interativo desenvolvido sob medida para a{' '}
                  <strong className="text-[#E2C792]">Gilfran Exclusive Service (@gilfranserv)</strong>.
                </p>
                <p className="text-[#E5E5DF] sm:hidden">
                  Protótipo exclusivo <strong className="text-[#E2C792]">@gilfranserv</strong>
                </p>
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#C9A96E] text-[#0B0C0E] font-semibold hover:bg-[#E2C792] transition-colors cursor-pointer"
                >
                  <span>Por que este site vende?</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={onToggle}
                  title="Ocultar barra de apresentação para ver como o cliente final vê"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/15 text-[#9CA3AF] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <EyeOff className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Modo Cliente Final</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Re-enable button when hidden */}
      {!visible && (
        <button
          type="button"
          onClick={onToggle}
          className="fixed top-20 right-4 z-50 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181B20]/90 backdrop-blur-md border border-[#C9A96E]/40 text-[#E2C792] text-xs font-medium shadow-lg hover:bg-[#232730] transition-colors cursor-pointer"
          title="Mostrar modo de apresentação comercial"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Modo Proposta</span>
        </button>
      )}

      {/* Pitch Arguments Modal / Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl bg-[#121418] border border-[#C9A96E]/35 p-6 sm:p-8 shadow-2xl text-left"
            >
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Fechar apresentação"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-[#C9A96E] text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Argumentos de Valor para o Cliente
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F5F5F0] mb-2">
                Como esta página transforma visitantes em orçamentos no WhatsApp
              </h3>
              <p className="text-sm text-[#9CA3AF] mb-6">
                Construída especificamente com os serviços, regiões e identidade visual da{' '}
                <strong className="text-[#F5F5F0]">Gilfran Serviços</strong> para gerar autoridade em clientes de alto padrão (Vila Olímpia, Moema, Campo Belo, Alphaville e escritórios).
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#181B20] border border-white/10">
                  <div className="flex items-center gap-2 text-[#C9A96E] font-semibold text-sm mb-1.5">
                    <TrendingUp className="w-4 h-4" />
                    <span>1. Tráfego do Google & SEO Local</span>
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    Quem busca &ldquo;conserto de persiana embutida em Moema&rdquo; ou &ldquo;persiana rolô Vila Olímpia&rdquo; no Google não encontra apenas Instagram — encontra um site profissional pronto para fechar.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#181B20] border border-white/10">
                  <div className="flex items-center gap-2 text-[#C9A96E] font-semibold text-sm mb-1.5">
                    <Smartphone className="w-4 h-4" />
                    <span>2. Orçamento Filtrado no WhatsApp</span>
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    A calculadora inteligente e o diagnóstico já enviam para o WhatsApp (11) 94539-6410 o tipo de persiana, medidas aproximadas, problema e bairro — economizando tempo no atendimento.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#181B20] border border-white/10">
                  <div className="flex items-center gap-2 text-[#C9A96E] font-semibold text-sm mb-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>3. Autoridade Corporativa & B2B</span>
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    Escritórios de advocacia, clínicas e síndicos exigem presença digital sólida antes de contratar manutenção ou venda sob medida.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#181B20] border border-white/10">
                  <div className="flex items-center gap-2 text-[#C9A96E] font-semibold text-sm mb-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>4. Experiência Interativa Inédita</span>
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    O Simulador de Luz Solar e o comparador Antes & Depois mantêm o cliente engajado e diferenciam a Gilfran de 99% dos concorrentes em São Paulo.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setDrawerOpen(false)
                    onToggle()
                  }}
                  className="px-4 py-2 rounded-lg border border-white/15 text-xs font-medium text-[#F5F5F0] hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Ocultar barra e mostrar como site final
                </button>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="px-5 py-2 rounded-lg bg-[#C9A96E] text-[#0B0C0E] text-xs font-bold hover:bg-[#E2C792] transition-colors cursor-pointer"
                >
                  Continuar explorando a página
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
