import { useState } from 'react'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200/70 py-4">
      <button className="w-full flex items-center justify-between text-left" onClick={() => setOpen(!open)}>
        <span className="font-medium text-slate-800">{q}</span>
        <span className="text-slate-500">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-3 text-slate-600">{a}</p>}
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-white to-[#E8F0FF]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_24px_60px_rgba(23,37,84,0.12)] p-8">
            <div className="flex items-baseline gap-3">
              <h3 className="text-2xl font-semibold text-slate-900">Dentra Pro</h3>
              <span className="text-slate-500">starting at</span>
            </div>
            <p className="mt-2 text-4xl font-semibold text-slate-900">$249<span className="text-lg text-slate-500">/mo per clinic</span></p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Unlimited reminders</li>
              <li>• PMS sync</li>
              <li>• AI prioritization</li>
              <li>• ROI dashboard</li>
              <li>• HIPAA compliance</li>
              <li>• Seasonality engine</li>
            </ul>
            <a href="#" className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#1A73E8] hover:bg-[#155fbe] text-white px-6 py-3 font-medium shadow-[0_8px_24px_rgba(26,115,232,0.35)] transition-colors">
              Start Free Pilot
            </a>
          </div>

          <div className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white p-8">
            <h4 className="text-xl font-semibold text-slate-900 mb-4">FAQ</h4>
            <div>
              <FAQItem q="Is Dentra HIPAA compliant?" a="Yes. We implement administrative, physical, and technical safeguards and sign BAAs upon request." />
              <FAQItem q="Which practice management systems do you support?" a="We integrate with Dentrix, OpenDental, Eaglesoft, and Curve." />
              <FAQItem q="How long does setup take?" a="Most clinics are live within a day. We handle the heavy lifting." />
              <FAQItem q="How is ROI measured?" a="We attribute booked appointments and recovered revenue back to outreach and benefit utilization." />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
