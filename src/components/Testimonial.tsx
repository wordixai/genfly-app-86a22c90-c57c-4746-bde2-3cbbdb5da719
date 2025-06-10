import { Quote, ExternalLink } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="p-8 md:p-12 space-y-16">
      <div className="flex-col md:flex-row max-md:items-center flex gap-8 max-w-2xl mx-auto">
        <img 
          alt="PostBridge MRR screenshot" 
          width="288" 
          height="230" 
          className="w-80 rounded object-cover shadow md:brightness-90 hover:brightness-100 duration-100" 
          src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=288&h=230&fit=crop"
        />
        
        <div className="space-y-4 max-w-md mx-auto">
          <Quote className="w-7 md:w-8 text-green-400 max-md:mx-auto" />
          
          <p className="md:text-lg leading-relaxed max-md:text-center text-slate-300">
            Without ShipFast I might have never launched my SaaS and I would still be at $0 MRR.
          </p>
          
          <div className="flex items-center gap-2 max-md:justify-center">
            <img 
              alt="Jack Friks testimonial for ShipFast" 
              width="48" 
              height="48" 
              className="w-10 h-10 rounded-full object-cover" 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
            />
            <p className="text-slate-100">Jack Friks</p>
          </div>
          
          <div className="max-md:flex max-md:justify-center">
            <span className="badge badge-accent badge-outline gap-1">
              Built <span className="select-all">post-bridge.com</span>
            </span>
          </div>
        </div>
      </div>

      <FeaturedLogos />
    </section>
  );
}

function FeaturedLogos() {
  const logos = [
    { name: "Hacker News", href: "https://news.ycombinator.com/item?id=37333976" },
    { name: "Product Hunt", href: "https://www.producthunt.com/products/shipfast-2" },
    { name: "X.com", href: "https://twitter.com/marc_louvion/status/1697165875957449084?s=20" },
    { name: "Reddit", href: "https://www.reddit.com/r/SideProject/comments/1664vqe/i_made_a_code_boilerplate_to_ship_projects_in/" }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
      <span className="text-xs opacity-50">Featured on</span>
      {logos.map((logo) => (
        <a 
          key={logo.name}
          href={logo.href} 
          target="_blank" 
          rel="noreferrer" 
          title={`Featured on ${logo.name}`}
          className="text-slate-400 hover:text-slate-100 transition-colors"
        >
          <ExternalLink className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}