import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { BrandLogo } from './BrandLogo'
import { InstagramIcon } from './SocialIcons'
import { BRAND, buildWhatsAppUrl } from '../data/brandData'

const NAV_LINKS = [
  { label: 'Simulador', href: '#simulador' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diagnóstico', href: '#diagnostico' },
  { label: 'Antes & Depois', href: '#antes-depois' },
  { label: 'Orçamento', href: '#orcamento' },
  { label: 'Regiões', href: '#regioes' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const quickWhatsApp = buildWhatsAppUrl(
    'Olá Gilfran! Vi o site da Gilfran Exclusive Service e gostaria de solicitar um orçamento.'
  )

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0C0E]/88 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.45)]'
          : 'bg-[#0B0C0E]/60 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        <a href="#top" className="focus:outline-none">
          <BrandLogo />
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium tracking-wide uppercase text-[#9CA3AF] hover:text-[#E2C792] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Gilfran Serviços"
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-[#F5F5F0] hover:border-[#C9A96E]/60 hover:text-[#C9A96E] transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <a
            href={quickWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#22bf5b] text-[#07190D] font-semibold text-xs sm:text-sm shadow-[0_0_24px_rgba(37,211,102,0.28)] transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="hidden sm:inline">Orçamento WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-[#F5F5F0] hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0B0C0E]/95 backdrop-blur-xl px-4 py-4 space-y-2">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#E5E5DF] hover:bg-white/5 hover:text-[#C9A96E] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-[#9CA3AF] hover:text-[#C9A96E]"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Ver perfil {BRAND.handle}</span>
          </a>
        </div>
      )}
    </header>
  )
}
