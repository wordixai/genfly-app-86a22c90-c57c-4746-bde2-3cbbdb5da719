import { useState } from "react";
import { Mail, CreditCard, User, Database, FileText, Palette, MoreHorizontal, CheckCircle } from "lucide-react";

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: Mail,
      name: "Emails",
      title: "Emails",
      description: [
        "Send transactional emails",
        "DNS setup to avoid spam folder (DKIM, DMARC, SPF in subdomain)",
        "Webhook to receive & forward emails",
        "Time saved: 3 hours",
        "Headaches: 0"
      ],
      integrations: [
        { name: "Mailgun", logo: "📧" },
        { name: "Resend", logo: "✉️" }
      ]
    },
    {
      icon: CreditCard,
      name: "Payments",
      title: "Payments & Subscriptions",
      description: [
        "One-time payments",
        "Subscriptions with Stripe",
        "Webhook handling",
        "Customer portal",
        "Invoice generation"
      ]
    },
    {
      icon: User,
      name: "Login",
      title: "Authentication",
      description: [
        "Social login (Google, GitHub)",
        "Email/password authentication",
        "Protected routes",
        "User sessions",
        "Role-based access"
      ]
    },
    {
      icon: Database,
      name: "Database",
      title: "Database Setup",
      description: [
        "MongoDB integration",
        "User data models",
        "CRUD operations",
        "Data validation",
        "Backup strategies"
      ]
    },
    {
      icon: FileText,
      name: "SEO",
      title: "SEO Optimization",
      description: [
        "Meta tags setup",
        "Open Graph tags",
        "Sitemap generation",
        "Schema markup",
        "Performance optimization"
      ]
    },
    {
      icon: Palette,
      name: "Style",
      title: "UI Components",
      description: [
        "Tailwind CSS setup",
        "Component library",
        "Responsive design",
        "Dark mode",
        "Custom themes"
      ]
    },
    {
      icon: MoreHorizontal,
      name: "More",
      title: "Additional Features",
      description: [
        "AI integration ready",
        "Analytics setup",
        "Error monitoring",
        "Deployment guides",
        "Documentation"
      ]
    }
  ];

  return (
    <section className="pt-24 pb-12" id="features">
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-900 max-md:px-8 max-w-3xl">
          <p className="text-green-400 font-medium text-sm font-mono mb-3">
            const launch_time = "08:41 PM";
          </p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-8 text-slate-100">
            Supercharge your app instantly, launch faster, make $
          </h2>
          <div className="text-slate-300 leading-relaxed mb-8 lg:text-lg">
            Login users, process payments and send emails at lightspeed. Spend your time building your startup, not integrating APIs. ShipFast provides you with the boilerplate code you need to launch, FAST.
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4 md:flex justify-start gap-4 md:gap-12 max-md:px-8 max-w-3xl mx-auto mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeTab === index;
            
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-100 ${
                  isActive ? 'text-orange-500' : 'text-slate-400'
                }`}
              >
                <Icon className="w-8 h-8" />
                <span className="font-medium text-sm">{feature.name}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-slate-800">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
            <div className="text-slate-300 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity">
              <p className="font-medium text-slate-100 text-lg">
                {features[activeTab].title}
              </p>
              <ul className="space-y-1">
                {features[activeTab].description.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-[18px] h-[18px] text-green-400 shrink-0" />
                    <span className={item.includes('Time saved') || item.includes('Headaches') ? 'text-green-400 font-medium' : ''}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              
              {features[activeTab].integrations && (
                <div className="pt-3 flex items-center gap-2 text-sm font-semibold">
                  {features[activeTab].integrations.map((integration, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {index > 0 && <span className="mx-2 text-slate-500 text-xs">OR</span>}
                      <span className="text-2xl">{integration.logo}</span>
                      <span>with <span className="text-green-400">{integration.name}</span></span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="hidden aspect-square max-md:w-full md:h-[28rem] bg-slate-700 md:order-first rounded-lg">
              <div className="w-full h-full flex items-center justify-center text-slate-500">
                Feature Preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}