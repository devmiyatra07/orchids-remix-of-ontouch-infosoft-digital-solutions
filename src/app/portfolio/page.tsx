import { Monitor } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Urban Brew Cafe",
      description: "A modern café website designed to showcase menu, ambience, and online contact options. Warm colors and food-focused layout.",
      type: "Website",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
      icon: Monitor
    },
    {
      title: "IronFlex Gym",
      description: "A high-energy gym website highlighting services, memberships, and fitness programs. Bold theme with strong visuals.",
      type: "Website",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      icon: Monitor
    },
    {
      title: "NovaTech Solutions",
      description: "A professional corporate website designed for a growing service-based business. Clean, minimal, corporate look.",
      type: "Website",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      icon: Monitor
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold text-zinc-900 md:text-6xl">Our Portfolio</h1>
          <p className="text-xl text-zinc-600">
            A showcase of our recent projects and digital solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-zinc-50 py-24 px-6">
        <div className="container mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <div key={i} className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:border-[#0A4D8C]/30">
                  <div className="relative h-64 w-full overflow-hidden bg-zinc-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                  </div>
                  <div className="p-8">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0A4D8C]">
                      {project.type}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-zinc-900">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-white py-24 px-6 text-center border-t border-zinc-200">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-zinc-900">Let's build something great together</h2>
            <p className="mb-12 text-lg text-zinc-600">
              Have a project in mind? We're ready to help you bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-[#0A4D8C] px-10 text-lg font-bold text-white hover:bg-[#083D6F] transition-colors"
            >
              Start Your Project
            </a>
        </div>
      </section>
    </div>
  );
}
