import { Monitor, Smartphone, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: Monitor,
      title: "Website Design & Development",
      description: "Custom-built, responsive websites designed to represent your brand professionally and work smoothly on all devices."
    },
    {
      icon: Smartphone,
      title: "Digital Visiting Cards",
      description: "Modern digital business cards that are easy to share, update, and access anytime."
    },
    {
      icon: CreditCard,
      title: "Business Card Design",
      description: "Clean and professional physical business card designs that leave a strong first impression."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold text-zinc-900 md:text-6xl">Our Services</h1>
          <p className="text-xl text-zinc-600">
            Professional digital solutions tailored for growing businesses.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-zinc-50 py-24 px-6">
        <div className="container mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service, i) => (
                <div key={i} className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-[#0A4D8C]/30">
                  <div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A4D8C]/10">
                      <service.icon className="h-6 w-6 text-[#0A4D8C]" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-zinc-900">{service.title}</h3>
                    <p className="mb-8 text-zinc-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Button asChild className="w-full bg-[#0A4D8C] text-white hover:bg-[#083D6F]">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-white py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900">Focusing on your growth</h2>
          <p className="text-lg leading-relaxed text-zinc-600">
            We don't just build websites; we create digital experiences that help your business connect with more customers. Our focus is on delivering high-quality results that you can rely on.
          </p>
        </div>
      </section>
    </div>
  );
}
