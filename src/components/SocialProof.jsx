export default function SocialProof() {
  const logos = ['Dentrix', 'OpenDental', 'Curve', 'Eaglesoft', 'ADA data-backed']
  return (
    <section className="relative bg-gradient-to-b from-[#E8F0FF] to-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-slate-500 text-xs uppercase tracking-widest mb-6">Trusted by leading PMS and data partners</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-6 sm:gap-10">
          {logos.map((l) => (
            <div key={l} className="flex items-center justify-center">
              <div className="px-4 py-2 rounded-lg bg-white/70 backdrop-blur-md border border-white/60 shadow-sm text-slate-600 text-sm sm:text-base">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
