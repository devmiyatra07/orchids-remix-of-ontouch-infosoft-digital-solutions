import Link from "next/link";
import { ArrowRight, Layout, TrendingUp, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-white py-24 px-6 text-center md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,77,140,0.05),transparent_70%)]" />
        <div className="container relative z-10 max-w-4xl space-y-8">
            <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 md:text-7xl lg:text-8xl">
              Smart Digital Solutions for <span className="text-[#0A4D8C]">Growing Businesses</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600 md:text-xl">
              We help small and local businesses build a strong online presence with clean design and reliable digital solutions.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 bg-[#0A4D8C] px-8 text-white hover:bg-[#083D6F]">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 border-zinc-200 px-8 text-zinc-900 hover:bg-zinc-50">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-zinc-50 py-24 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="mb-16 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">Why Choose WebCraf Solutions</h2>
            <div className="grid gap-8 md:grid-cols-4 text-left">
              {[
                { icon: Layout, title: "Simple & Professional Designs", desc: "We focus on clean aesthetics that make your business stand out professionally." },
                { icon: TrendingUp, title: "Focused on Business Growth", desc: "Our solutions are built to help you attract more customers and grow your brand." },
                { icon: MessageCircle, title: "Clear Communication", desc: "We believe in honest and direct communication at every step of the project." },
                { icon: ShieldCheck, title: "Reliable Support", desc: "You can count on us for long-term support and maintenance of your digital assets." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-[#0A4D8C]/30">
                  <item.icon className="mb-4 h-8 w-8 text-[#0A4D8C]" />
                  <h3 className="mb-2 font-semibold text-zinc-900">{item.title}</h3>
                  <p className="text-sm text-zinc-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Testimonials Section */}
      <section className="bg-white py-24 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="mb-16 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Suresh Kumar", text: "Great experience working with WebCraf Solutions. Clean design and smooth communication." },
              { name: "Priya Sharma", text: "The team delivered exactly what we needed. Our new website has helped us reach more local customers." },
              { name: "Amit Patel", text: "Professional and reliable. They handled everything from design to launch flawlessly." },
            ].map((testimonial, i) => (
              <div key={i} className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-left italic">
                <p className="mb-6 text-zinc-600">"{testimonial.text}"</p>
                <p className="text-sm font-semibold not-italic text-zinc-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-24 px-6">
        <div className="container mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 md:text-5xl">Let’s talk about your project.</h2>
          <p className="text-lg text-zinc-600 md:text-xl">
            We're ready to help you build a professional online presence.
          </p>
          <Button asChild size="lg" className="h-14 bg-[#0A4D8C] px-10 text-white hover:bg-[#083D6F]">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
