import { CheckCircle2, Link2, Brain, MessageSquare } from 'lucide-react'

const steps = [
  {
    title: 'Sync Your PMS',
    desc: 'Imports patients, insurance benefits, and expiration dates automatically.',
    icon: Link2,
  },
  {
    title: 'AI Prioritization',
    desc: 'Scores patients based on unused benefits, expiration date, and treatment opportunity.',
    icon: Brain,
  },
  {
    title: 'Automated Patient Outreach',
    desc: 'Sends personalized SMS/email to get patients booked immediately.',
    icon: MessageSquare,
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-[#E8F0FF]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">How It Works</h2>
          <p className="mt-4 text-slate-600">Simple setup. Immediate results.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-[0_8px_24px_rgba(23,37,84,0.08)] p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#C7DBFF] to-[#E8F0FF] text-[#1A73E8] mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
              <div className="mt-4 flex items-center gap-2 text-emerald-600 text-sm">
                <CheckCircle2 className="h-4 w-4" />
                <span>Secure and seamless</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
