import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sun,
  Shield,
  ThermometerSun,
  MessageCircle,
  ArrowDownRight,
  CheckCircle2,
  Sliders,
  MapPin,
} from 'lucide-react'
import { BLIND_MODELS, buildWhatsAppUrl, type BlindModelSpec } from '../data/brandData'

export function Hero() {
  const [selectedModel, setSelectedModel] = useState<BlindModelSpec>(BLIND_MODELS[0])
  // openness: 0 = completely closed (full blind covering), 100 = fully raised/open
  const [openness, setOpenness] = useState<number>(35)
  // tilt: 0 = flat closed slats, 90 = open horizontal view
  const [slatTilt, setSlatTilt] = useState<number>(38)

  // Compute dynamic room metrics based on model, openness, and tilt
  const coverageFactor = (100 - openness) / 100
  const tiltFactor = selectedModel.hasTilt ? 1 - (slatTilt / 100) * 0.65 : 1
  const effectiveShade = Math.max(0, Math.min(1, coverageFactor * tiltFactor))

  const uvProtection = Math.round(selectedModel.uvBlockBase * effectiveShade)
  const privacyScore = Math.round(selectedModel.privacyBase * effectiveShade)
  const thermalComfort = Math.round(selectedModel.thermalBase * effectiveShade)

  // Ambient sunlight intensity entering room (0 = dark blackout, 1 = bright sunlit)
  const ambientLight = 1 - effectiveShade * 0.88

  const heroWhatsApp = buildWhatsAppUrl(
    `Olá Gilfran! Testei o simulador no site com o modelo "${selectedModel.name}" e gostaria de solicitar um orçamento ou visita técnica.`
  )

  return (
    <section
      id="simulador"
      className="relative overflow-hidden bg-arch-grid pt-10 pb-16 sm:pt-14 sm:pb-24 border-b border-white/10"
    >
      {/* Dynamic Sunlight Ambient Glow tied to Simulator state */}
      <div
        className="pointer-events-none absolute -top-24 right-0 w-[640px] h-[640px] rounded-full blur-[130px] transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(circle, rgba(226,199,146,0.28) 0%, rgba(201,169,110,0.08) 45%, transparent 72%)',
          opacity: 0.2 + ambientLight * 0.75,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Authority & Direct Conversion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/12 text-xs font-medium text-[#E2C792]">
              <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span>Atendimento em São Paulo, Zona Sul, Oeste & Alphaville</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.06] tracking-tight text-[#F5F5F0]">
              Controle solar, <span className="italic text-[#C9A96E]">conforto</span> e acabamento sob medida para cada janela.
            </h1>

            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-xl">
              Venda, instalação e manutenção especializada em{' '}
              <strong className="text-[#F5F5F0] font-medium">persianas de todos os modelos e marcas</strong>,{' '}
              <strong className="text-[#F5F5F0] font-medium">cortinas sob medida</strong>, janelas e{' '}
              <strong className="text-[#F5F5F0] font-medium">higienização profissional</strong> para residências e escritórios.
            </p>

            {/* Real proof bullets */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              {[
                'Persianas Rolô, Horizontais e Embutidas',
                'Troca de esteira, cordão e coletor',
                'Cortinas sob medida para salas e suítes',
                'Lavagem técnica de cortinas e estofados',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-[#D1D5DB]">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={heroWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#21bd5b] text-[#07190D] font-bold text-sm shadow-[0_8px_30px_rgba(37,211,102,0.3)] transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Pedir Orçamento no WhatsApp</span>
              </a>

              <a
                href="#orcamento"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-[#F5F5F0] font-semibold text-sm transition-all"
              >
                <span>Calcular Medida Rápida</span>
                <ArrowDownRight className="w-4 h-4 text-[#C9A96E]" />
              </a>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-lg">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#F5F5F0]">100%</div>
                <div className="text-[11px] sm:text-xs text-[#9CA3AF]">Todas as marcas e modelos</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#C9A96E]">SP & Alpha</div>
                <div className="text-[11px] sm:text-xs text-[#9CA3AF]">Atendimento residencial e B2B</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#F5F5F0]">Sob Medida</div>
                <div className="text-[11px] sm:text-xs text-[#9CA3AF]">Venda, reparo e higienização</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Architectural Window & Blind Simulator */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl bg-[#121418]/95 border border-white/12 p-4 sm:p-6 shadow-[0_24px_64px_rgba(0,0,0,0.65)] backdrop-blur-md">
              {/* Simulator Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-[#C9A96E] animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E2C792]">
                    Simulador Interativo de Luz & Privacidade
                  </span>
                </div>
                <span className="text-[11px] text-[#9CA3AF]">Arraste os controles abaixo</span>
              </div>

              {/* Model Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {BLIND_MODELS.map((model) => {
                  const active = selectedModel.id === model.id
                  return (
                    <button
                      key={model.id}
                      type="button"
                      onClick={() => setSelectedModel(model)}
                      className={`px-2.5 py-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                        active
                          ? 'bg-[#C9A96E]/20 border-[#C9A96E] text-[#F5F5F0] shadow-[0_0_16px_rgba(201,169,110,0.2)]'
                          : 'bg-white/[0.03] border-white/10 text-[#9CA3AF] hover:text-white hover:bg-white/[0.06]'
                      }`}
                    >
                      {model.shortName}
                    </button>
                  )
                })}
              </div>

              {/* Architectural Window Viewport */}
              <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden border-4 border-[#1F232B] bg-[#090B0E] shadow-inner select-none">
                {/* São Paulo Sunset / Daylight Skyline Backdrop */}
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    background:
                      'linear-gradient(180deg, #1E3A5F 0%, #5B799E 38%, #E5B97C 78%, #C88A4B 100%)',
                    filter: `brightness(${0.45 + ambientLight * 0.65})`,
                  }}
                >
                  {/* Sun disc */}
                  <div
                    className="absolute top-10 right-14 w-20 h-20 rounded-full blur-md transition-transform duration-500"
                    style={{
                      background: 'radial-gradient(circle, #FFF6D6 0%, #F4C47C 55%, transparent 75%)',
                      opacity: 0.4 + ambientLight * 0.6,
                    }}
                  />

                  {/* Stylized SP Skyline Silhouette (Faria Lima / Vila Olímpia glass towers) */}
                  <svg
                    viewBox="0 0 600 220"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 left-0 w-full h-36 opacity-85"
                  >
                    <path
                      d="M0,220 L0,140 L38,140 L38,95 L72,95 L72,155 L95,155 L95,62 L138,62 L138,125 L165,125 L165,42 L208,42 L208,145 L240,145 L240,78 L286,78 L286,118 L322,118 L322,30 L370,30 L370,130 L404,130 L404,88 L452,88 L452,140 L488,140 L488,58 L536,58 L536,120 L568,120 L568,100 L600,100 L600,220 Z"
                      fill="#121722"
                    />
                    {/* Subtle lit office windows on skyline */}
                    <g fill="#E2C792" opacity="0.35">
                      <rect x="106" y="76" width="8" height="4" />
                      <rect x="120" y="76" width="8" height="4" />
                      <rect x="176" y="56" width="10" height="4" />
                      <rect x="176" y="68" width="10" height="4" />
                      <rect x="334" y="48" width="12" height="4" />
                      <rect x="350" y="48" width="12" height="4" />
                      <rect x="334" y="62" width="12" height="4" />
                      <rect x="500" y="74" width="10" height="4" />
                    </g>
                  </svg>
                </div>

                {/* Window Glass Mullions */}
                <div className="pointer-events-none absolute inset-0 grid grid-cols-2 border border-white/10">
                  <div className="border-r border-[#1F232B]/80" />
                  <div />
                </div>

                {/* RENDER SELECTED BLIND / CURTAIN MECHANISM */}
                {selectedModel.id === 'rolo-solar' && (
                  <div
                    className="absolute top-0 left-0 right-0 transition-all duration-150 ease-out border-b-[6px] border-[#D4D4D8] shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
                    style={{
                      height: `${100 - openness}%`,
                      background:
                        'repeating-linear-gradient(0deg, rgba(226,222,213,0.88) 0px, rgba(226,222,213,0.88) 2px, rgba(160,154,142,0.72) 2px, rgba(160,154,142,0.72) 4px)',
                      backdropFilter: 'blur(1.5px)',
                    }}
                  >
                    {/* Bottom weighted bar */}
                    <div className="absolute bottom-0 inset-x-0 h-2 bg-gradient-to-b from-[#A1A1AA] to-[#52525B]" />
                  </div>
                )}

                {selectedModel.id === 'embutida-blackout' && (
                  <div
                    className="absolute top-0 left-0 right-0 transition-all duration-150 ease-out shadow-[0_12px_30px_rgba(0,0,0,0.85)]"
                    style={{
                      height: `${100 - openness}%`,
                      background:
                        'repeating-linear-gradient(180deg, #1E2026 0px, #272A32 14px, #121418 15px, #121418 16px)',
                    }}
                  >
                    {/* Built-in shutter guide channels */}
                    <div className="absolute inset-y-0 left-0 w-2 bg-[#0F1115] border-r border-white/10" />
                    <div className="absolute inset-y-0 right-0 w-2 bg-[#0F1115] border-l border-white/10" />
                    <div className="absolute bottom-0 inset-x-0 h-2.5 bg-[#2A2E37] border-t border-white/15" />
                  </div>
                )}

                {selectedModel.id === 'horizontal-madeira' && (
                  <div
                    className="absolute top-0 left-0 right-0 flex flex-col justify-between overflow-hidden transition-all duration-150 ease-out px-1"
                    style={{ height: `${100 - openness}%` }}
                  >
                    {Array.from({ length: 16 }).map((_, idx) => {
                      const slatThickness = Math.max(3, Math.round(14 * (1 - slatTilt / 115)))
                      return (
                        <div
                          key={idx}
                          className="w-full rounded-[1px] transition-all duration-150 shadow-sm"
                          style={{
                            height: `${slatThickness}px`,
                            background:
                              'linear-gradient(180deg, #8B6B4A 0%, #684C31 65%, #4A3420 100%)',
                          }}
                        />
                      )
                    })}
                    {/* Vertical ladder cords */}
                    <div className="pointer-events-none absolute inset-y-0 left-[22%] w-px bg-[#D6C3A5]/45" />
                    <div className="pointer-events-none absolute inset-y-0 right-[22%] w-px bg-[#D6C3A5]/45" />
                  </div>
                )}

                {selectedModel.id === 'cortina-wave' && (
                  <div className="absolute inset-0 flex justify-between pointer-events-none">
                    {/* Left & Right Curtain Panels parting symmetrically */}
                    <div
                      className="h-full transition-all duration-200 ease-out shadow-[8px_0_24px_rgba(0,0,0,0.4)]"
                      style={{
                        width: `${Math.max(12, (100 - openness) / 2)}%`,
                        background:
                          'repeating-linear-gradient(90deg, rgba(245,245,240,0.88) 0px, rgba(214,210,198,0.85) 14px, rgba(245,245,240,0.92) 28px)',
                      }}
                    />
                    <div
                      className="h-full transition-all duration-200 ease-out shadow-[-8px_0_24px_rgba(0,0,0,0.4)]"
                      style={{
                        width: `${Math.max(12, (100 - openness) / 2)}%`,
                        background:
                          'repeating-linear-gradient(90deg, rgba(245,245,240,0.88) 0px, rgba(214,210,198,0.85) 14px, rgba(245,245,240,0.92) 28px)',
                      }}
                    />
                  </div>
                )}

                {/* Top Pelmet / Bandô */}
                <div className="pointer-events-none absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-[#1A1D24] to-[#111318] border-b border-white/15" />

                {/* Floating Model Tag on Viewport */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[11px] font-medium text-[#F5F5F0]">
                  {selectedModel.name}
                </div>
              </div>

              {/* Sliders Controls */}
              <div className="mt-4 space-y-3.5">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="flex items-center gap-1.5 text-[#D1D5DB] font-medium">
                      <Sliders className="w-3.5 h-3.5 text-[#C9A96E]" />
                      {selectedModel.id === 'cortina-wave'
                        ? 'Abertura da Cortina'
                        : 'Altura / Abertura da Persiana'}
                    </span>
                    <span className="font-mono text-[#E2C792] font-semibold">{openness}% aberta</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={openness}
                    onChange={(e) => setOpenness(Number(e.target.value))}
                    className="w-full architectural-slider"
                    aria-label="Controle de abertura"
                  />
                </div>

                {selectedModel.hasTilt && (
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="flex items-center gap-1.5 text-[#D1D5DB] font-medium">
                        <Sun className="w-3.5 h-3.5 text-[#C9A96E]" />
                        Inclinação das Lâminas
                      </span>
                      <span className="font-mono text-[#E2C792] font-semibold">{slatTilt}°</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={90}
                      value={slatTilt}
                      onChange={(e) => setSlatTilt(Number(e.target.value))}
                      className="w-full architectural-slider"
                      aria-label="Inclinação das lâminas"
                    />
                  </div>
                )}
              </div>

              {/* Real-time Performance Metrics */}
              <div className="grid grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-white/10">
                <div className="rounded-xl bg-white/[0.03] border border-white/8 p-2.5 text-center">
                  <div className="flex items-center justify-center gap-1 text-[11px] text-[#9CA3AF] mb-0.5">
                    <Sun className="w-3.5 h-3.5 text-[#C9A96E]" />
                    <span>Proteção UV</span>
                  </div>
                  <div className="font-serif text-xl font-semibold text-[#F5F5F0]">{uvProtection}%</div>
                </div>

                <div className="rounded-xl bg-white/[0.03] border border-white/8 p-2.5 text-center">
                  <div className="flex items-center justify-center gap-1 text-[11px] text-[#9CA3AF] mb-0.5">
                    <Shield className="w-3.5 h-3.5 text-[#C9A96E]" />
                    <span>Privacidade</span>
                  </div>
                  <div className="font-serif text-xl font-semibold text-[#F5F5F0]">{privacyScore}%</div>
                </div>

                <div className="rounded-xl bg-white/[0.03] border border-white/8 p-2.5 text-center">
                  <div className="flex items-center justify-center gap-1 text-[11px] text-[#9CA3AF] mb-0.5">
                    <ThermometerSun className="w-3.5 h-3.5 text-[#C9A96E]" />
                    <span>Conforto Térmico</span>
                  </div>
                  <div className="font-serif text-xl font-semibold text-[#F5F5F0]">{thermalComfort}%</div>
                </div>
              </div>

              <p className="mt-3 text-xs text-[#9CA3AF] leading-relaxed">
                <strong className="text-[#E2C792]">Indicação:</strong> {selectedModel.idealFor} —{' '}
                {selectedModel.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
