import { ArrowRight, Zap } from "lucide-react";
import ProductHuntBadge from "./ProductHuntBadge";
import CustomerAvatars from "./CustomerAvatars";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20 pb-20 lg:pb-24">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <ProductHuntBadge />
        
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
          <span className="relative text-slate-100">Ship your startup </span>
          <span className="whitespace-nowrap relative">
            <span className="mr-3 sm:mr-4 md:mr-5 text-slate-100">in days,</span>
            <span className="relative whitespace-nowrap">
              <span className="absolute bg-slate-100 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
              <span className="relative text-slate-900">not weeks</span>
            </span>
          </span>
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed">
          The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.
        </p>

        <div className="space-y-4">
          <button className="btn btn-primary group btn-wide">
            <ArrowRight className="w-5 h-5 fill-current group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out" />
            Get ShipFast
          </button>
          
          <p className="text-sm md:text-base flex justify-center items-center gap-2 md:text-sm">
            <Zap className="w-5 h-5 text-green-400 animate-pulse" />
            <span>
              <span className="text-green-400">$100 off</span> for the first 7180 customers (10 left)
            </span>
          </p>
        </div>

        <CustomerAvatars />
      </div>

      <div className="relative max-md:-m-4 lg:w-full">
        <img 
          alt="Mongo + Mailgun + Stripe + NextJS + Tailwind + NextAuth = ShipFast" 
          width="1080" 
          height="1080" 
          className="w-full max-w-xl ml-auto rounded-xl shadow-2xl" 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1080&h=1080&fit=crop&crop=center"
        />
      </div>
    </section>
  );
}