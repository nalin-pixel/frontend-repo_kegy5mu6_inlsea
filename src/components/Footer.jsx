export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm text-slate-600">
          <div>
            <h5 className="font-semibold text-slate-800 mb-3">Legal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-slate-900">Terms</a></li>
              <li><a href="#" className="hover:text-slate-900">Privacy</a></li>
              <li><a href="#" className="hover:text-slate-900">BAA</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-slate-800 mb-3">Security</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-slate-900">Security Overview</a></li>
              <li><a href="#" className="hover:text-slate-900">Compliance</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-slate-800 mb-3">Contact</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-slate-900">Support</a></li>
              <li><a href="#" className="hover:text-slate-900">Sales</a></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h5 className="font-semibold text-slate-800 mb-3">PMS Integrations</h5>
            <p className="text-slate-600">Dentrix • OpenDental • Eaglesoft • Curve</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Dentra. All rights reserved.</div>
      </div>
    </footer>
  )
}
