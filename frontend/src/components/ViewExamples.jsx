import { ArrowRight, CheckCircle2, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const reportSections = [
  "Match score and honest seniority fit",
  "Skills already supported by your resume",
  "Missing requirements to learn or evidence to add",
  "Truthful ATS keywords for this job",
  "Specific resume edits and tailored bullet rewrites",
  "A focused 30-day improvement plan",
];

export default function ViewExamplesPage() {
  return (
    <section className="min-h-screen bg-transparent px-6 pb-16 pt-28">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-white/15 bg-white/[0.07] p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-12">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-slate-200/20 bg-slate-300/10 text-slate-100"><FileSearch className="h-6 w-6" /></span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Your results will be unique to your resume.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">We do not show made-up scores, job offers, testimonials, or downloadable sample resumes. Upload your own resume and job description to receive feedback based on your actual experience.</p>
          <Button asChild size="lg" className="mt-8 h-12 rounded-xl bg-slate-200 px-6 font-semibold text-slate-950 hover:bg-white"><Link to="/analyze">Analyze my resume <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>

        <div className="mt-8 rounded-3xl border border-white/15 bg-white/[0.07] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:p-9">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-300">What your personal report includes</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {reportSections.map((section) => <div key={section} className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-950/25 p-4 text-slate-200"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-200" />{section}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
