import { MapPin, ArrowUpRight, Building2, CheckCircle2 } from 'lucide-react'
import { InstagramIcon } from './SocialIcons'
import { BRAND, NEIGHBORHOODS, PORTFOLIO_CASES } from '../data/brandData'

export function PortfolioAndRegions() {
  return (
    <section id="regioes" className="py-16 sm:py-24 bg-[#0E1013] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
        {/* Regional Coverage + Instagram Highlight */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A96E]">
              Área de Atuação & Portfólio Real
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#F5F5F0] leading-tight">
              Presença ativa nos principais polos residenciais e corporativos de São Paulo.
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] max-w-2xl">
              Atendimento ágil em condomínios residenciais, varandas envidraçadas e escritórios corporativos na capital paulista e Alphaville.
            </p>

            {/* Real Neighborhood Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {NEIGHBORHOODS.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#15181E] border border-white/12 text-xs font-medium text-[#E5E5DF]"
                >
                  <MapPin className="w-3 h-3 text-[#C9A96E]" />
                  <span>{area}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Instagram Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-[#191C24] to-[#121418] border border-[#C9A96E]/35 p-6 shadow-xl">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0B0C0E] border border-[#C9A96E]/50 flex flex-col items-center justify-center leading-none">
                    <span className="font-serif text-xs font-bold tracking-wider text-white">G</span>
                    <span className="text-[7px] uppercase tracking-widest text-[#C9A96E]">Serv</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#F5F5F0]">{BRAND.handle}</div>
                    <div className="text-xs text-[#9CA3AF]">Gilfran Exclusive Service</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E2C792] px-2.5 py-1 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/25">
                  <CheckCircle2 className="w-3 h-3" />
                  Portfólio Ativo
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-5">
                Acompanhe instalações reais de persianas rolô, manutenção de persianas embutidas, cortinas sob medida e antes/depois de higienização direto no nosso Instagram oficial.
              </p>

              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs sm:text-sm font-semibold text-[#F5F5F0] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#C9A96E]" />
                <span>Visitar Instagram {BRAND.handle}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Real Case Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PORTFOLIO_CASES.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-[#14171D] border border-white/10 p-5 flex flex-col justify-between hover:border-[#C9A96E]/45 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold text-[#C9A96E]">{item.neighborhood}</span>
                  <Building2 className="w-4 h-4 text-[#6B7280]" />
                </div>
                <span className="inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-[#9CA3AF] mb-2.5">
                  {item.clientType}
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#F5F5F0] leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">{item.details}</p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                <span className="text-[#E2C792] font-medium">{item.serviceTag}</span>
                <span className="text-[#6B7280]">{item.highlightRef}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
