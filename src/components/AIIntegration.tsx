export default function AIIntegration() {
  const aiTools = [
    { name: "Github Copilot", src: "🤖" },
    { name: "Cursor", src: "↗️" },
    { name: "Claude", src: "🧠" },
    { name: "OpenAI", src: "🔮" },
    { name: "Windsurf", src: "🌊" },
    { name: "Gemini", src: "💎" },
    { name: "Grok", src: "🚀" },
    { name: "DeepSeek", src: "🔍" }
  ];

  return (
    <section className="bg-slate-900">
      <div className="py-12 max-md:px-8 max-w-3xl mx-auto md:space-y-8 space-y-6">
        <div className="mx-auto text-center flex justify-center">
          <div className="relative">
            <div className="text-4xl font-bold">⚡ ShipFast</div>
            <p className="max-md:hidden absolute text-green-400 translate-x-2/3 -translate-y-1/2 rotate-6 top-0 right-0 text-sm font-mono">
              codebase
            </p>
          </div>
        </div>
        
        <p className="text-center text-3xl md:text-4xl !mt-5">+</p>
        
        <div className="flex flex-wrap justify-center gap-4 relative">
          {aiTools.map((tool, index) => (
            <div 
              key={tool.name}
              className="relative w-12 h-12 md:w-16 md:h-16 rounded-lg shadow aspect-square flex items-center justify-center bg-slate-800 text-2xl md:text-3xl"
              title={tool.name}
            >
              {tool.src}
              {index === aiTools.length - 1 && (
                <p className="max-md:hidden absolute text-green-400 translate-x-full -translate-y-1/2 rotate-6 -top-3 -right-1 text-sm font-mono">
                  AI
                </p>
              )}
            </div>
          ))}
        </div>
        
        <p className="text-center text-3xl md:text-4xl">=</p>
        
        <div className="mx-auto text-center">
          <p className="text-center text-2xl md:text-4xl font-bold">
            Launch your idea{" "}
            <span className="text-slate-900 bg-slate-100 px-1 md:px-1.5 tracking-wide rounded">
              INSTANTLY
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}