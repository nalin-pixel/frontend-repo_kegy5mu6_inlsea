import Spline from '@splinetool/react-spline'
import { Play, ShieldCheck, Building2 } from 'lucide-react'

function StatBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md px-3 py-1 text-xs font-medium text-slate-700 shadow-sm border border-white/60">
      <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
      {label}
    </span>
  )
}

function GlassCard({ children, className = '' }) {
  return (
    <div className={`rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_8px_24px_rgba(23,37,84,0.15)] ${className}`}>
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <StatBadge label="HIPAA-Ready" />
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md px-3 py-1 text-xs font-medium text-slate-700 shadow-sm border border-white/60">
                <Building2 className="h-3.5 w-3.5 text-blue-600" /> Works with Dentrix, OpenDental, Eaglesoft, Curve
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Recover thousands in unused patient insurance benefits — automatically.
            </h1>

            <p className="mt-6 text-slate-200 text-lg leading-relaxed max-w-xl">
              Dentra identifies unused PPO benefits, prioritizes patients with expiring coverage, and messages them automatically — recovering $5–20K per practice each month.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-[#1A73E8] hover:bg-[#155fbe] text-white px-6 py-3 font-medium shadow-[0_8px_24px_rgba(26,115,232,0.35)] transition-colors">
                Start Free Pilot
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-xl bg-white/80 hover:bg-white text-slate-900 px-6 py-3 font-medium backdrop-blur-md border border-white/70">
                <Play className="h-4 w-4 mr-2" /> Watch 45-second Demo
              </a>
            </div>
          </div>

          <div className="relative">
            <GlassCard className="p-4 sm:p-6">
              <div className="rounded-xl bg-white/60 backdrop-blur-xl border border-white/50 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-slate-600">Monthly ROI</p>
                    <p className="text-2xl font-semibold text-slate-900">$12,480</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-emerald-600">+218%</p>
                    <p className="text-xs text-slate-500">vs last month</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-white/80 border border-white/70 p-3">
                    <p className="text-xs text-slate-500">Patients booked</p>
                    <p className="text-lg font-semibold text-slate-900">63</p>
                  </div>
                  <div className="rounded-lg bg-white/80 border border-white/70 p-3">
                    <p className="text-xs text-slate-500">Recovered</p>
                    <p className="text-lg font-semibold text-slate-900">$14.2k</p>
                  </div>
                  <div className="rounded-lg bg-white/80 border border-white/70 p-3">
                    <p className="text-xs text-slate-500">Avg unused</p>
                    <p className="text-lg font-semibold text-slate-900">$370</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/60 backdrop-blur-xl border border-white/50 p-4">
                  <p className="text-sm font-medium text-slate-800 mb-2">Expiring benefits</p>
                  <ul className="space-y-2 text-sm">
                    {[
                      { name: 'Ava P.', days: 9, amount: 540 },
                      { name: 'Marcus R.', days: 12, amount: 380 },
                      { name: 'Tina K.', days: 15, amount: 420 },
                      { name: 'Daniel S.', days: 18, amount: 310 },
                    ].map((p) => (
                      <li key={p.name} className="flex items-center justify-between text-slate-700">
                        <span className="truncate">{p.name}</span>
                        <span className="text-slate-500">{p.days}d · ${p.amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-white/60 backdrop-blur-xl border border-white/50 p-4">
                  <p className="text-sm font-medium text-slate-800 mb-2">AI outreach preview</p>
                  <div className="rounded-lg bg-white/90 border border-white/80 p-3 text-sm text-slate-700">
                    Hi Ava — you still have $540 in unused benefits expiring in 9 days. We can get you in this week for a cleaning or treatment. Reply Y to book.
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
