import { Star } from "lucide-react";

export default function CustomerAvatars() {
  const avatars = [
    { name: "Lennard", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
    { name: "Wahab", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face" },
    { name: "Naveen", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
    { name: "Artificery", src: "https://images.unsplash.com/photo-1494790108755-2616b332c3cc?w=400&h=400&fit=crop&crop=face" },
    { name: "Dunsin", src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face" }
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center align-center gap-3">
      <div className="-space-x-5 avatar-group justify-start">
        {avatars.map((avatar) => (
          <div key={avatar.name} className="avatar w-12 h-12">
            <img 
              alt={avatar.name}
              width="400" 
              height="400" 
              className="w-12 h-12 rounded-full object-cover border-2 border-slate-700"
              src={avatar.src}
            />
          </div>
        ))}
      </div>
      
      <div className="flex flex-col justify-center items-center md:items-start gap-1">
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
          ))}
        </div>
        <div className="text-base text-slate-300">
          <span className="font-semibold text-slate-100">7170</span> makers ship faster
        </div>
      </div>
    </div>
  );
}