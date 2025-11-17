import { Activity, Bell, BarChart3, Brain, Database, Shield, CalendarClock, Layers } from 'lucide-react'

const features = [
  { title: 'Real-time benefit sync', icon: Database },
  { title: 'AI scoring & prioritization', icon: Brain },
  { title: 'Automated reminders (SMS/email)', icon: Bell },
  { title: 'Multi-PMS support', icon: Layers },
  { title: 'ROI dashboard', icon: BarChart3 },
  { title: 'HIPAA audit logs', icon: Shield },
  { title: 'Booking attribution', icon: Activity },
  { title: 'Seasonal intelligence (Q4 boost)', icon: CalendarClock },
]

export default function Features() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-[#E8F0FF]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Built for revenue and compliance</h2>
          <p className="mt-4 text-slate-600">Everything you need to capture unused benefits with zero staff effort.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ title, icon: Icon }) => (
            <div key={title} className="rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-[0_8px_24px_rgba(23,37,84,0.08)] p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#C7DBFF] to-[#E8F0FF] text-[#1A73E8] mb-3">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-slate-800 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
