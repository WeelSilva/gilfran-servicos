import { useState } from 'react'
import {
  Calculator,
  Ruler,
  MapPin,
  MessageCircle,
  Copy,
  Check,
  Building2,
  Home,
} from 'lucide-react'
import { NEIGHBORHOODS, buildWhatsAppUrl } from '../data/brandData'

type ServiceIntent = 'Comprar Nova Sob Medida' | 'Manutenção / Conserto' | 'Lavagem & Higienização'
type ItemType =
  | 'Persiana Rolô (Tela Solar / Blackout)'
  | 'Persiana Horizontal (Alumínio / Madeira)'
  | 'Persiana Embutida / Janela'
  | 'Cortina Sob Medida'
  | 'Sofá / Colchão / Carpete'

const INTENTS: ServiceIntent[] = [
  'Comprar Nova Sob Medida',
  'Manutenção / Conserto',
  'Lavagem & Higienização',
]

const ITEMS: ItemType[] = [
  'Persiana Rolô (Tela Solar / Blackout)',
  'Persiana Horizontal (Alumínio / Madeira)',
  'Persiana Embutida / Janela',
  'Cortina Sob Medida',
  'Sofá / Colchão / Carpete',
]

export function QuoteCalculator() {
  const [intent, setIntent] = useState<ServiceIntent>('Comprar Nova Sob Medida')
  const [itemType, setItemType] = useState<ItemType>('Persiana Rolô (Tela Solar / Blackout)')
  const [environment, setEnvironment] = useState<'Residencial' | 'Corporativo / Escritório'>('Residencial')
  const [widthCm, setWidthCm] = useState<string>('180')
  const [heightCm, setHeightCm] = useState<string>('220')
  const [quantity, setQuantity] = useState<number>(2)
  const [neighborhood, setNeighborhood] = useState<string>('Vila Olímpia')
  const [copied, setCopied] = useState<boolean>(false)

  const showDimensions = itemType !== 'Sofá / Colchão / Carpete'

  const areaM2 =
    ((Number(widthCm) || 0) / 100) * ((Number(heightCm) || 0) / 100) * Math.max(1, quantity)

  const generatedMessage = [
    `Olá Gilfran! Gostaria de solicitar um orçamento pela página:`,
    `• Serviço: ${intent}`,
    `• Item: ${itemType}`,
    `• Perfil: ${environment}`,
    `• Quantidade: ${quantity} unidade(s)`,
    showDimensions
      ? `• Medidas aprox.: ${widthCm || '?'}cm (L) x ${heightCm || '?'}cm (A) — Total ~${areaM2.toFixed(2)} m²`
      : null,
    `• Região / Bairro: ${neighborhood}`,
  ]
    .filter(Boolean)
    .join('\n')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API fallback ignored if restricted
    }
  }

  return (
    <section id="orcamento" className="py-16 sm:py-24 bg-[#0B0C0E] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A96E] mb-3">
            Orçamento Inteligente
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#F5F5F0] leading-tight mb-3">
            Monte seu pedido técnico em 30 segundos.
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF]">
            Informe o serviço, as medidas aproximadas e o seu bairro. Geramos a ficha completa pronta para atendimento imediato no WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form Builder */}
          <div className="lg:col-span-7 rounded-2xl bg-[#14171D] border border-white/12 p-6 sm:p-8 space-y-7">
            {/* Step 1: Intent */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#E2C792] mb-3">
                1. O que você precisa hoje?
              </label>
              <div className="grid sm:grid-cols-3 gap-2.5">
                {INTENTS.map((option) => {
                  const active = intent === option
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setIntent(option)}
                      className={`px-3.5 py-3 rounded-xl text-xs sm:text-sm font-medium border text-left transition-all cursor-pointer ${
                        active
                          ? 'bg-[#C9A96E]/20 border-[#C9A96E] text-[#F5F5F0]'
                          : 'bg-white/[0.03] border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/25'
                      }`}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Item & Environment */}
            <div className="space-y-4">
              <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#E2C792]">
                2. Selecione o modelo ou item
              </label>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {ITEMS.map((item) => {
                  const active = itemType === item
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setItemType(item)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium border text-left transition-all cursor-pointer ${
                        active
                          ? 'bg-[#C9A96E]/20 border-[#C9A96E] text-[#F5F5F0]'
                          : 'bg-white/[0.03] border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/25'
                      }`}
                    >
                      {item}
                    </button>
                  )
                })}
              </div>

              {/* Environment Switch */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => setEnvironment('Residencial')}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                    environment === 'Residencial'
                      ? 'bg-white/10 border-[#C9A96E] text-white'
                      : 'bg-white/[0.02] border-white/10 text-[#9CA3AF]'
                  }`}
                >
                  <Home className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span>Residencial</span>
                </button>
                <button
                  type="button"
                  onClick={() => setEnvironment('Corporativo / Escritório')}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                    environment === 'Corporativo / Escritório'
                      ? 'bg-white/10 border-[#C9A96E] text-white'
                      : 'bg-white/[0.02] border-white/10 text-[#9CA3AF]'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span>Corporativo / Escritório</span>
                </button>
              </div>
            </div>

            {/* Step 3: Dimensions, Quantity & Neighborhood */}
            <div className="space-y-4">
              <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#E2C792]">
                3. Medidas aproximadas e localização
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {showDimensions && (
                  <>
                    <div>
                      <span className="block text-[11px] text-[#9CA3AF] mb-1">Largura (cm)</span>
                      <div className="relative">
                        <input
                          type="number"
                          min={30}
                          max={800}
                          value={widthCm}
                          onChange={(e) => setWidthCm(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/15 text-sm text-[#F5F5F0] focus:outline-none focus:border-[#C9A96E]"
                        />
                        <Ruler className="w-3.5 h-3.5 text-[#6B7280] absolute right-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    <div>
                      <span className="block text-[11px] text-[#9CA3AF] mb-1">Altura (cm)</span>
                      <div className="relative">
                        <input
                          type="number"
                          min={30}
                          max={600}
                          value={heightCm}
                          onChange={(e) => setHeightCm(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/15 text-sm text-[#F5F5F0] focus:outline-none focus:border-[#C9A96E]"
                        />
                        <Ruler className="w-3.5 h-3.5 text-[#6B7280] absolute right-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <span className="block text-[11px] text-[#9CA3AF] mb-1">Qtd. de peças</span>
                  <div className="flex items-center rounded-xl bg-[#0B0C0E] border border-white/15 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-2.5 text-sm font-bold text-[#9CA3AF] hover:text-white hover:bg-white/5 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center text-sm font-semibold text-[#F5F5F0]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.min(50, q + 1))}
                      className="px-3 py-2.5 text-sm font-bold text-[#9CA3AF] hover:text-white hover:bg-white/5 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <span className="block text-[11px] text-[#9CA3AF] mb-1.5">Bairro / Região de Atendimento</span>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#C9A96E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/15 text-sm text-[#F5F5F0] focus:outline-none focus:border-[#C9A96E]"
                  >
                    {NEIGHBORHOODS.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                    <option value="Outra região de São Paulo / Grande SP">
                      Outra região de São Paulo / Grande SP
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Live Technical Summary Card */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#181B22] to-[#121418] border border-[#C9A96E]/40 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-[#E2C792] font-semibold text-sm">
                <Calculator className="w-4 h-4" />
                <span>Resumo da Solicitação</span>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#25D366]/15 text-[#25D366] font-semibold">
                Pronto para envio
              </span>
            </div>

            <div className="rounded-xl bg-[#0B0C0E] border border-white/10 p-4 font-mono text-xs text-[#D1D5DB] whitespace-pre-line leading-relaxed">
              {generatedMessage}
            </div>

            {showDimensions && (
              <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/25">
                <span className="text-xs text-[#E5E5DF]">Área estimada total:</span>
                <span className="font-serif text-2xl font-semibold text-[#E2C792]">
                  {areaM2.toFixed(2)} m²
                </span>
              </div>
            )}

            <div className="space-y-3">
              <a
                href={buildWhatsAppUrl(generatedMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#22bf5b] text-[#07190D] font-bold text-sm shadow-[0_8px_28px_rgba(37,211,102,0.3)] transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enviar Orçamento no WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/12 text-xs font-medium text-[#D1D5DB] transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Resumo copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar texto do resumo</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-center text-[#9CA3AF]">
              * As medidas finais são conferidas presencialmente durante a visita técnica sem compromisso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
