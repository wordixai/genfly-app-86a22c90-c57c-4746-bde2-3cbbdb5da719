import { Key } from "lucide-react";

export default function Header() {
  return (
    <div className="select-none max-lg:hidden z-[99] fixed top-6 right-6 bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-lg shadow-lg border border-slate-600/20 hover:border-slate-600/40 duration-200 cursor-pointer">
      <span className="text-slate-100">Press</span>
      <span className="font-bold bg-slate-900 px-2.5 py-1.5 rounded border border-slate-600/20 font-mono mx-1 capitalize">
        <Key className="w-3 h-3 inline" />
      </span>
      <span className="text-slate-100">to see the Leaderboards</span>
    </div>
  );
}