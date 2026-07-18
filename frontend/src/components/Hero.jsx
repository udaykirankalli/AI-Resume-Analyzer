import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { GLSLHills } from "./ui/glsl-hills";

const proofPoints = ["Job-specific match score", "Truthful ATS keywords", "Clear resume rewrites"];

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#080b1f] px-6 pb-20 pt-32 text-white">
      <GLSLHills className="opacity-80" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_8%,rgba(136,96,204,0.26),transparent_34%),linear-gradient(180deg,rgba(8,11,31,0.16),#080b1f_92%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl items-center justify-center">
        <div className="max-w-4xl rounded-[2rem] border border-white/15 bg-white/[0.07] px-7 py-12 text-center shadow-[0_30px_100px_rgba(3,6,23,0.5)] backdrop-blur-xl md:px-14 md:py-16">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200/20 bg-violet-300/10 px-4 py-2 text-sm font-medium text-violet-100">
            <Sparkles className="h-4 w-4" />
            AI-powered resume intelligence
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
            Make every application
            <span className="mt-2 block bg-gradient-to-r from-sky-200 via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">tell your strongest story.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Compare your resume to the job you want, understand the real gaps, and make focused improvements without adding skills you cannot support.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-xl bg-violet-300 px-6 font-semibold text-slate-950 hover:bg-violet-200">
              <Link to="/analyze">Analyze my resume <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-xl border-white/20 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">
              <Link to="/examples"><FileText className="mr-2 h-4 w-4" />View examples</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-3 text-left sm:grid-cols-3">
            {proofPoints.map((point) => <div key={point} className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/25 px-4 py-3 text-sm text-slate-200"><CheckCircle2 className="h-4 w-4 shrink-0 text-violet-200" />{point}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
