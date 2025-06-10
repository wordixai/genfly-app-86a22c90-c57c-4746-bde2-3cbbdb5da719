import { ExternalLink } from "lucide-react";

export default function ProductHuntBadge() {
  return (
    <a 
      href="https://www.producthunt.com/posts/shipfast-2?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-shipfast-2" 
      target="_blank" 
      className="-mb-4 md:-mb-6 group" 
      title="View ShipFast on Product Hunt"
      rel="noreferrer"
    >
      <div className="w-32 md:w-36 fill-slate-300 group-hover:fill-slate-100 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 90" className="w-full h-auto">
          <rect width="300" height="90" rx="45" fill="#da552f"/>
          <text x="150" y="32" textAnchor="middle" className="fill-white text-sm font-bold">
            PRODUCT
          </text>
          <text x="150" y="50" textAnchor="middle" className="fill-white text-sm font-bold">
            HUNT
          </text>
          <text x="150" y="68" textAnchor="middle" className="fill-white text-xs">
            #1 Product of the Day
          </text>
        </svg>
      </div>
    </a>
  );
}