import { BarChart3, CheckCircle2, ShieldCheck, Target, Wand2, Zap } from "lucide-react";

const features = [
  [CheckCircle2, "ATS Optimization", "See the requirements your resume already supports and the gaps that matter most."],
  [Target, "Keyword Analysis", "Separate truthful keywords you can use now from skills to build first."],
  [Wand2, "Focused Rewrites", "Turn existing project and experience details into stronger, role-specific bullets."],
  [BarChart3, "Score Breakdown", "Understand how skills, projects, experience, clarity, and keywords affect your match."],
  [Zap, "Career Tools", "Generate a tailored cover letter, interview preparation, and multi-job comparison."],
  [ShieldCheck, "Privacy First", "Your work stays tied to your account, with saved analyses ready when you need them."],
];

export function Features() {
  return (
    <section className="bg-[#0b1026] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-200">Built for better applications</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Clear feedback, not generic advice.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">Phonalynx helps you improve the parts of your resume that influence a specific application.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([Icon, title, description]) => <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-[0_18px_45px_rgba(1,4,18,0.22)] backdrop-blur-xl">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-300/10 text-violet-200"><Icon className="h-5 w-5" /></span>
            <h3 className="mt-5 text-xl font-medium">{title}</h3>
            <p className="mt-2 leading-7 text-slate-300">{description}</p>
          </article>)}
        </div>
      </div>
    </section>
  );
}
