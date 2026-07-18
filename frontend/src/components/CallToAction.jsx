import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function CallToAction() {
  return <section className="bg-[#0b1026] px-6 pb-24 text-white"><div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200/15 bg-gradient-to-br from-slate-400/20 via-slate-300/10 to-zinc-300/10 px-7 py-14 text-center shadow-[0_25px_80px_rgba(4,7,24,0.38)] backdrop-blur-xl sm:px-14">
    <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-slate-100"><Sparkles className="h-5 w-5" /></span>
    <h2 className="mt-6 text-4xl font-semibold tracking-tight">Ready to make your resume more relevant?</h2>
    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-200">Get practical, role-specific feedback before you submit your next application.</p>
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild size="lg" className="h-12 rounded-xl bg-white px-6 text-slate-950 hover:bg-slate-100"><Link to="/analyze">Start analysis <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild variant="outline" size="lg" className="h-12 rounded-xl border-white/20 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"><Link to="/features-page">Explore features</Link></Button></div>
  </div></section>;
}
