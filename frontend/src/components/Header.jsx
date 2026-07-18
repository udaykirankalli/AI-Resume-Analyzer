import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const navigation = [
  ["How it works", "/how-it-works"],
  ["Features", "/features-page"],
  ["About", "/about"],
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/15 bg-[#11152d]/70 px-4 shadow-[0_16px_50px_rgba(4,7,24,0.35)] backdrop-blur-2xl sm:px-5">
        <Link to="/" className="flex items-center gap-2.5 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-gradient-to-br from-sky-300 to-violet-400 text-slate-950"><FileText className="h-5 w-5" /></span>
          <span className="font-semibold tracking-tight">Phonalynx AI</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navigation.map(([label, href]) => <Link key={href} to={href} className="transition-colors hover:text-white">{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden text-slate-200 hover:bg-white/10 hover:text-white sm:inline-flex"><Link to="/analyze">Analyze</Link></Button>
          <Button asChild className="rounded-xl bg-violet-300 px-4 text-slate-950 hover:bg-violet-200"><Link to="/register">Get started</Link></Button>
        </div>
      </div>
    </header>
  );
}
