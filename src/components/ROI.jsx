import { useMemo, useState } from 'react'

export default function ROI() {
  const [patients, setPatients] = useState(800)
  const [avgUnused, setAvgUnused] = useState(350)
  const recovered = useMemo(() => Math.round(patients * avgUnused * 0.12), [patients, avgUnused])
  const monthly = recovered
  const paybackDays = useMemo(() => Math.max(1, Math.round((249 / Math.max(1, monthly)) * 30)), [monthly])

  return (
    <section id="roi" className="relative py-20 bg-gradient-to-b from-[#E8F0FF] via-white to-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_24px_60px_rgba(23,37,84,0.12)] p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Average practice recovers $5,000–$20,000 per month
              </h3>
              <p className="mt-3 text-slate-600">
                Use the calculator to estimate your recovered revenue and payback.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <label className="text-sm text-slate-600">Insured patients</label>
                  <input type="range" min="50" max="2500" value={patients} onChange={(e) => setPatients(Number(e.target.value))} className="w-full" />
                  <p className="mt-2 text-slate-900 font-medium">{patients.toLocaleString()}</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <label className="text-sm text-slate-600">Avg unused benefits per patient ($)</label>
                  <input type="range" min="50" max="800" step="10" value={avgUnused} onChange={(e) => setAvgUnused(Number(e.target.value))} className="w-full" />
                  <p className="mt-2 text-slate-900 font-medium">${avgUnused.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#E8F0FF] to-[#C7DBFF] p-6 border border-white/60">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/80 backdrop-blur-md p-4 border border-white/70">
                  <p className="text-xs text-slate-600">Estimated recovered revenue</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-900">${monthly.toLocaleString()}</p>
                </div>
                <div className="rounded-xl bg-white/80 backdrop-blur-md p-4 border border-white/70">
                  <p className="text-xs text-slate-600">Estimated payback</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-900">{paybackDays} days</p>
                </div>
                <div className="col-span-2 rounded-xl bg-white/80 backdrop-blur-md p-4 border border-white/70">
                  <p className="text-sm text-slate-700">
                    With Dentra Pro starting at $249/mo, most practices see payback within the first week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
