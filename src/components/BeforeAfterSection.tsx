import { useState, useRef, type PointerEvent as ReactPointerEvent } from 'react'
import { MoveHorizontal, Sparkles, Sun, ShieldCheck, MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../data/brandData'

interface ComparisonCase {
  id: 'estofados' | 'persianas'
  tabLabel: string
  title: string
  subtitle: string
  beforeLabel: string
  afterLabel: string
  beforeBullets: string[]
  afterBullets: string[]
}

const CASES: ComparisonCase[] = [
  {
    id: 'estofados',
    tabLabel: 'Higienização de Estofados & Cortinas',
    title: 'Antes & Depois da Higienização Profunda',
    subtitle:
      'Remoção técnica de ácaros, poeira impregnada, amarelamento e odores em cortinas, sofás e colchões sem danificar o tecido.',
    beforeLabel: 'Antes • Poeira & Manchas',
    afterLabel: 'Depois • Revitalizado & Higienizado',
    beforeBullets: ['Acúmulo de ácaros e poluição de SP', 'Tecido opaco e manchas visíveis'],
    afterBullets: ['Fibra sanitizada e toque macio', 'Cores restauradas e ambiente antialérgico'],
  },
  {
    id: 'persianas',
    tabLabel: 'Controle Solar & Persianas em Varandas',
    title: 'Transformação de Luminosidade e Privacidade',
    subtitle:
      'Substituição ou instalação de persianas sob medida em apartamentos e escritórios para eliminar ofuscamento e calor excessivo.',
    beforeLabel: 'Antes • Calor & Ofuscamento',
    afterLabel: 'Depois • Controle Solar Sob Medida',
    beforeBullets: ['Incidência direta de raios UV nos móveis', 'Falta de privacidade e reflexo em telas'],
    afterBullets: ['Redução térmica e conforto visual', 'Acabamento alinhado sob medida'],
  },
]

export function BeforeAfterSection() {
  const [activeCaseId, setActiveCaseId] = useState<'estofados' | 'persianas'>('estofados')
  const [sliderPos, setSliderPos] = useState<number>(52)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const currentCase = CASES.find((c) => c.id === activeCaseId) ?? CASES[0]

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const rawPercent = ((clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.max(8, Math.min(92, rawPercent)))
  }

  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    setIsDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  return (
    <section id="antes-depois" className="py-16 sm:py-24 bg-[#0E1013] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading + Case Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A96E] mb-3">
              Resultados Comprovados
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#F5F5F0] leading-tight">
              Compare o Antes e Depois com o deslizar do dedo.
            </h2>
          </div>

          <div className="inline-flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#15181E] border border-white/10">
            {CASES.map((item) => {
              const active = item.id === activeCaseId
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveCaseId(item.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#C9A96E] text-[#0B0C0E] shadow-sm'
                      : 'text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  {item.tabLabel}
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Split-Screen Drag Stage */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/15 select-none cursor-ew-resize touch-none shadow-2xl"
            >
              {/* AFTER LAYER (Base full width) */}
              <div className="absolute inset-0">
                {activeCaseId === 'estofados' ? (
                  /* Clean revitalized tufted sofa & sheer curtains scene */
                  <div className="w-full h-full bg-gradient-to-br from-[#232832] via-[#1B1F27] to-[#12151A] flex items-center justify-center relative">
                    {/* Bright crisp sheer curtain backdrop */}
                    <div
                      className="absolute inset-x-0 top-0 h-44 opacity-55"
                      style={{
                        background:
                          'repeating-linear-gradient(90deg, #F5F5F0 0px, #E2DFD7 18px, #F5F5F0 36px)',
                      }}
                    />
                    {/* Crisp clean sofa representation */}
                    <div className="relative z-10 w-4/5 max-w-md mt-16">
                      <div className="h-24 rounded-t-2xl bg-gradient-to-b from-[#EAE7DF] to-[#D4CFC4] border border-white/40 shadow-lg grid grid-cols-3 gap-px p-2">
                        <div className="rounded-lg border border-black/10 bg-[#F3F1EC]" />
                        <div className="rounded-lg border border-black/10 bg-[#F3F1EC]" />
                        <div className="rounded-lg border border-black/10 bg-[#F3F1EC]" />
                      </div>
                      <div className="h-14 rounded-b-xl bg-[#CBC5B8] border-t border-black/10 shadow-xl" />
                      {/* Sparkle badges */}
                      <div className="absolute -top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/90 text-[#04150B] text-[10px] font-bold shadow">
                        <Sparkles className="w-3 h-3" />
                        100% Higienizado
                      </div>
                    </div>
                  </div>
                ) : (
                  /* After: Sleek solar shade filtering golden hour glare */
                  <div className="w-full h-full bg-gradient-to-b from-[#1A2433] via-[#141A24] to-[#0E1117] relative flex items-center justify-center">
                    <div className="w-4/5 h-64 rounded-lg border-4 border-[#272D38] overflow-hidden relative bg-[#1D2B3D]">
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'repeating-linear-gradient(0deg, rgba(226,222,213,0.82) 0px, rgba(226,222,213,0.82) 2px, rgba(110,115,126,0.6) 2px, rgba(110,115,126,0.6) 4px)',
                        }}
                      />
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/60 text-[10px] font-semibold text-[#E2C792]">
                        Tela Solar 3% Instalada
                      </div>
                    </div>
                  </div>
                )}

                {/* After Badge */}
                <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-[11px] font-semibold">
                  {currentCase.afterLabel}
                </span>
              </div>

              {/* BEFORE LAYER (Clipped by sliderPos) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                {activeCaseId === 'estofados' ? (
                  /* Before: Dusty, stained sofa & aged curtains */
                  <div className="w-full h-full bg-gradient-to-br from-[#2B251F] via-[#211C17] to-[#161310] flex items-center justify-center relative">
                    <div
                      className="absolute inset-x-0 top-0 h-44 opacity-45"
                      style={{
                        background:
                          'repeating-linear-gradient(90deg, #9F9483 0px, #7A7061 18px, #9F9483 36px)',
                      }}
                    />
                    <div className="relative z-10 w-4/5 max-w-md mt-16">
                      <div className="h-24 rounded-t-2xl bg-gradient-to-b from-[#8B8172] to-[#6E6558] border border-black/20 shadow-lg grid grid-cols-3 gap-px p-2 relative overflow-hidden">
                        <div className="rounded-lg border border-black/20 bg-[#7A7061]" />
                        <div className="rounded-lg border border-black/20 bg-[#706758]" />
                        <div className="rounded-lg border border-black/20 bg-[#7A7061]" />
                        {/* Simulated spots / dust marks */}
                        <div className="absolute top-5 left-12 w-12 h-7 rounded-full bg-[#4A3E31]/55 blur-[4px]" />
                        <div className="absolute bottom-3 right-14 w-16 h-8 rounded-full bg-[#44382B]/50 blur-[5px]" />
                      </div>
                      <div className="h-14 rounded-b-xl bg-[#5E564B] border-t border-black/30 shadow-xl" />
                    </div>
                  </div>
                ) : (
                  /* Before: Harsh glare & unshaded broken window */
                  <div className="w-full h-full bg-gradient-to-b from-[#7E572C] via-[#4D341B] to-[#1F160E] relative flex items-center justify-center">
                    <div className="w-4/5 h-64 rounded-lg border-4 border-[#3D2E20] overflow-hidden relative bg-gradient-to-br from-[#FFF4D4] via-[#F4B96A] to-[#B9722E]">
                      <div className="absolute top-6 right-8 w-20 h-20 rounded-full bg-white blur-md opacity-90" />
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/70 text-[10px] font-semibold text-amber-200">
                        Excesso de Calor e Reflexo
                      </div>
                    </div>
                  </div>
                )}

                {/* Before Badge */}
                <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-[#E5E5DF] text-[11px] font-semibold">
                  {currentCase.beforeLabel}
                </span>
              </div>

              {/* Vertical Divider Line + Handle */}
              <div
                className="absolute inset-y-0 z-30 w-0.5 bg-[#C9A96E] shadow-[0_0_16px_rgba(201,169,110,0.8)]"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#C9A96E] border-2 border-[#0B0C0E] text-[#0B0C0E] flex items-center justify-center shadow-xl">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Details & Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F5F5F0] mb-2">
                {currentCase.title}
              </h3>
              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                {currentCase.subtitle}
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#15181E] border border-white/10">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] mb-2">
                  Cenário Inicial
                </div>
                <ul className="space-y-1.5">
                  {currentCase.beforeBullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-[#D1D5DB]">
                      <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#15181E] border border-[#C9A96E]/35">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#E2C792] mb-2">
                  Padrão Gilfran Entregue
                </div>
                <ul className="space-y-1.5">
                  {currentCase.afterBullets.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm text-[#F5F5F0]">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={buildWhatsAppUrl(
                `Olá Gilfran! Vi a comparação de "${currentCase.tabLabel}" no site e quero solicitar um orçamento.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#22bf5b] text-[#07190D] font-bold text-sm shadow-lg transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Quero Esse Resultado no Meu Espaço</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
