export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold text-slate-100">⚡ ShipFast</div>
          <p className="text-slate-400 max-w-sm">
            The NextJS boilerplate to ship your startup in days, not weeks.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-slate-100 mb-3">Product</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#features" className="hover:text-slate-300">Features</a></li>
              <li><a href="#pricing" className="hover:text-slate-300">Pricing</a></li>
              <li><a href="#demo" className="hover:text-slate-300">Demo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-100 mb-3">Support</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-slate-300">Documentation</a></li>
              <li><a href="#" className="hover:text-slate-300">Help Center</a></li>
              <li><a href="#" className="hover:text-slate-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-100 mb-3">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-slate-300">About</a></li>
              <li><a href="#" className="hover:text-slate-300">Privacy</a></li>
              <li><a href="#" className="hover:text-slate-300">Terms</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-100 mb-3">Connect</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-slate-300">Twitter</a></li>
              <li><a href="#" className="hover:text-slate-300">GitHub</a></li>
              <li><a href="#" className="hover:text-slate-300">Discord</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">
          © 2024 ShipFast. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-slate-400 text-sm">
          <span>Made with ❤️ by Marc Lou</span>
        </div>
      </div>
    </footer>
  );
}