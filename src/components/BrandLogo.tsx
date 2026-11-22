interface BrandLogoProps {
  compact?: boolean
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className="inline-flex items-center gap-3 select-none group">
      {/* Architectural Bracketed Emblem echoing @gilfranserv logo */}
      <div className="relative px-3 py-1.5 border border-white/25 bg-[#121418]/90 transition-colors duration-300 group-hover:border-[#C9A96E]/70">
        {/* Corner brackets */}
        <span className="absolute -top-px -left-px w-2 h-2 border-t-2 border-l-2 border-[#C9A96E]" />
        <span className="absolute -top-px -right-px w-2 h-2 border-t-2 border-r-2 border-[#C9A96E]" />
        <span className="absolute -bottom-px -left-px w-2 h-2 border-b-2 border-l-2 border-[#C9A96E]" />
        <span className="absolute -bottom-px -right-px w-2 h-2 border-b-2 border-r-2 border-[#C9A96E]" />

        <div className="flex flex-col items-center leading-none">
          <span className="font-serif text-lg sm:text-xl font-semibold tracking-[0.22em] text-[#F5F5F0]">
            GILFRAN
          </span>
          <div className="flex items-center gap-1.5 w-full mt-0.5">
            <span className="h-px flex-1 bg-white/30" />
            <span className="text-[8px] sm:text-[9px] font-medium tracking-[0.28em] text-[#C9A96E] uppercase">
              Serviços
            </span>
            <span className="h-px flex-1 bg-white/30" />
          </div>
        </div>
      </div>

      {!compact && (
        <div className="hidden md:flex flex-col text-left">
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#F5F5F0]">
            Exclusive Service
          </span>
          <span className="text-[11px] text-[#9CA3AF]">
            Persianas • Cortinas • Manutenção
          </span>
        </div>
      )}
    </div>
  )
}
