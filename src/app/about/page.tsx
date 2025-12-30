import { CheckCircle2, ShieldCheck, Zap, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-zinc-900 md:text-6xl">About Us</h1>
          <p className="text-xl text-zinc-600">
            Building a strong digital presence through clean design and practical solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-zinc-50 py-24 px-6">
        <div className="container mx-auto max-w-3xl space-y-8 text-center">
            <h2 className="text-3xl font-bold text-zinc-900">Our Story</h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              WebCraf Solutions helps businesses build a strong digital presence through clean design and practical solutions. We focus on understanding your business goals and creating digital experiences that actually work.
            </p>
            <p className="text-lg leading-relaxed text-zinc-600">
              Our approach is simple: we prioritize clarity, quality, and long-term partnerships. We don't believe in overcomplicating things. Instead, we deliver reliable digital tools that help our clients grow their brands effectively.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="bg-white py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="mb-16 text-center text-3xl font-bold text-zinc-900 md:text-4xl">What Makes Us Different</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: CheckCircle2,
                  title: "Quality Focused",
                  desc: "We prioritize high-quality design and development in every project we undertake."
                },
                {
                  icon: ShieldCheck,
                  title: "Reliability",
                  desc: "Our clients trust us for consistent delivery and long-term support."
                },
                {
                  icon: Zap,
                  title: "Efficiency",
                  desc: "We build practical solutions that work smoothly and effectively for your business."
                },
                {
                  icon: Heart,
                  title: "Transparency",
                  desc: "We maintain clear and honest communication throughout our partnership."
                }
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center transition-colors hover:border-[#0A4D8C]/30">
                      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#0A4D8C]/10">
                        <item.icon className="h-7 w-7 text-[#0A4D8C]" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-zinc-900">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-zinc-600">{item.desc}</p>
                    </div>
                  ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-zinc-50 py-24 px-6">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-zinc-900">Our Commitment</h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              At WebCraf Solutions, we are committed to providing exceptional service and building lasting relationships with our clients. We focus on what truly matters: helping your business succeed in the digital world with integrity and professionalism.
            </p>
          </div>
        </section>

    </div>
  );
}
