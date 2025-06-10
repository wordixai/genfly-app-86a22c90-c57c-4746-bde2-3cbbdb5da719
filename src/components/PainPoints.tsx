import { ArrowDown } from "lucide-react";

export default function PainPoints() {
  const painPoints = [
    { time: "4 hrs", task: "to set up emails" },
    { time: "6 hrs", task: "designing a landing page" },
    { time: "4 hrs", task: "to handle Stripe webhooks" },
    { time: "2 hrs", task: "for SEO tags" },
    { time: "1 hr", task: "applying for Google Oauth" },
    { time: "3 hrs", task: "for DNS records" },
    { time: "2 hrs", task: "for protected API routes" },
    { time: "∞ hrs", task: "overthinking..." }
  ];

  return (
    <section className="relative py-24 px-8">
      <div className="relative bg-slate-800 text-slate-100 rounded-lg p-8 md:p-16 max-w-lg mx-auto text-center text-lg">
        <div className="leading-relaxed space-y-4 md:space-y-6">
          <div className="text-slate-300 space-y-1">
            {painPoints.map((point, index) => (
              <p key={index}>
                {index > 0 && "+ "}
                <span className="text-red-400 font-medium">{point.time}</span> {point.task}
              </p>
            ))}
          </div>
          
          <div className="text-xl font-semibold flex flex-col md:flex-row items-center justify-center gap-3">
            <p>= <span className="text-red-400 font-medium">22+ hours</span> of headaches</p>
            <div className="w-8 h-8 text-slate-100 shrink-0">
              😤
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 inset-x-0 text-center flex gap-1 justify-center items-center text-sm opacity-80">
        <ArrowDown className="w-5 h-5" />
        <p>There's an easier way</p>
      </div>
    </section>
  );
}