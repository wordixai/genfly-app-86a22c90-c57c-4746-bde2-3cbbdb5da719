export default function MarcsIntro() {
  return (
    <section className="bg-slate-900" id="demo">
      <div className="py-24 max-md:px-8 max-w-3xl mx-auto">
        <div className="leading-relaxed text-slate-300 mb-12 max-w-xl mx-auto">
          <img 
            alt="Marc Lou — Product Hunt Maker of the Year 2023" 
            width="200" 
            height="200" 
            className="w-32 h-32 md:w-52 md:h-52 rounded-lg float-left mr-8 mb-8 object-center object-cover" 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
          />
          
          <p className="mb-4 text-slate-100 md:text-lg font-medium">Hey, it's Marc 👋</p>
          
          <p className="mb-5">
            In 2018, I believed I was Mark Zuckerberg, built a startup for 1 year, and got 0 users...
          </p>
          
          <p className="mb-5">
            A few years after my burnout, I restarted the journey differently: I shipped like a madman—
            <a className="link text-slate-100 font-medium hover:text-green-400 whitespace-nowrap" target="_blank" href="https://marclou.com/?ref=shipfast_intro" rel="noreferrer">
              16 startups in 2 years.
            </a>{" "}
            Now I'm happy and earn $45,000 a month.
          </p>
          
          <p className="mb-5">
            I realized I was doing the same thing over and over: set up DNS records, listen to Stripe webhooks, design pricing section... So I built ShipFast for 3 reasons:
          </p>
          
          <ul className="list-inside list-decimal space-y-1.5 ml-5 mb-5">
            <li>
              <span className="text-slate-100 font-medium">Save time</span> and focus on what matters: building a business
            </li>
            <li>
              <span className="text-slate-100 font-medium">Avoid headaches</span> like emails ending in spam or handling Stripe subscriptions
            </li>
            <li>
              <span className="text-slate-100 font-medium">Get profitable fast</span>—the more you ship, the more you learn, the more you earn
            </li>
          </ul>
          
          <p>
            <a className="link whitespace-nowrap text-slate-100 hover:text-green-400 font-medium group" target="_blank" href="https://twitter.com/marc_louvion" rel="noreferrer">
              135,000+ people
            </a>{" "}
            trust me on Twitter, Product Hunt awarded me{" "}
            <a className="link whitespace-nowrap text-slate-100 hover:text-green-400 font-medium group" target="_blank" href="https://www.producthunt.com/golden-kitty-awards/hall-of-fame#maker-of-the-year" rel="noreferrer">
              Maker of the Year 2023
            </a>, and{" "}
            <a className="link whitespace-nowrap text-slate-100 hover:text-green-400 font-medium group" href="#testimonials">
              7170 indie makers
            </a>{" "}
            are using ShipFast to launch startups quickly.
          </p>
        </div>

        <VideoDemo />
      </div>
    </section>
  );
}

function VideoDemo() {
  return (
    <div className="relative max-sm:-mx-8 mb-16">
      <div className="max-lg:hidden absolute top-1/4 -left-4 -translate-x-full text-sm flex flex-col gap-1 items-center">
        <p className="text-slate-400">The code in 3 minutes</p>
        <div className="w-12 h-12 text-slate-400">
          ↗️
        </div>
      </div>
      
      <div className="relative w-full aspect-video overflow-hidden sm:rounded-lg bg-slate-800">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">▶️</div>
            <p className="text-slate-300">ShipFast Demo Video</p>
            <p className="text-slate-500 text-sm">Click to play</p>
          </div>
        </div>
      </div>
    </div>
  );
}