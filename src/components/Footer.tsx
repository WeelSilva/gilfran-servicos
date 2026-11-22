import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'
import { BrandLogo } from './BrandLogo'
import { InstagramIcon, FacebookIcon } from './SocialIcons'
import { BRAND, buildWhatsAppUrl } from '../data/brandData'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-[#08090B] pt-14 pb-10 text-[#9CA3AF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo />
            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-sm">
              Especialistas em venda, instalação sob medida, manutenção técnica de persianas e janelas, além de lavagem e higienização de cortinas, estofados e colchões.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#E2C792]">
              <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span>{BRAND.city} • Residencial & Corporativo</span>
            </div>
          </div>

          {/* Services Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F5F0]">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#simulador" className="hover:text-[#C9A96E] transition-colors">
                  Simulador de Persianas
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#C9A96E] transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="hover:text-[#C9A96E] transition-colors">
                  Diagnóstico de Manutenção
                </a>
              </li>
              <li>
                <a href="#antes-depois" className="hover:text-[#C9A96E] transition-colors">
                  Antes & Depois
                </a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-[#C9A96E] transition-colors">
                  Calculadora de Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F5F0]">
              Atendimento Direto
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={buildWhatsAppUrl('Olá Gilfran! Gostaria de falar sobre um orçamento.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#F5F5F0] hover:text-[#25D366] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#25D366]" />
                  <span>{BRAND.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-center gap-2.5 hover:text-[#C9A96E] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C9A96E]" />
                  <span>{BRAND.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#F5F5F0] hover:border-[#C9A96E]/50 transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span>{BRAND.handle}</span>
                </a>
                <a
                  href={BRAND.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#F5F5F0] hover:border-[#C9A96E]/50 transition-colors"
                >
                  <FacebookIcon className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>

            <a
              href={buildWhatsAppUrl('Olá Gilfran! Gostaria de agendar uma visita técnica.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#22bf5b] text-[#07190D] font-bold text-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chamar no WhatsApp Agora</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B7280]">
          <p>© {CURRENT_YEAR} Gilfran Exclusive Service ({BRAND.handle}). Todos os direitos reservados.</p>
          <p>São Paulo • Venda, Instalação, Manutenção & Higienização</p>
        </div>
      </div>
    </footer>
  )
}
