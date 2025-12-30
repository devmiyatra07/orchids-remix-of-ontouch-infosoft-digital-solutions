import { Quote, Star } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Rohit Sharma",
      location: "Small Business Owner",
      quote: "Very professional service. My website looks clean and my customers find me easily now.",
      rating: 5
    },
    {
      name: "Neha Patel",
      location: "Home Business Owner",
      quote: "WebCraft Solutions understood exactly what I needed. Smooth communication and great design.",
      rating: 5
    },
    {
      name: "Amit Verma",
      location: "Entrepreneur",
      quote: "Affordable, fast, and reliable. Highly recommended for small business owners.",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold text-zinc-900 md:text-6xl">Client Stories</h1>
          <p className="text-xl text-zinc-600">
            Hear from the local businesses we've helped succeed in the digital world.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-zinc-50 py-24 px-6">
        <div className="container mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <div key={i} className="relative rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-[#0A4D8C]/30">
                  <Quote className="absolute top-6 right-8 h-12 w-12 text-[#0A4D8C]/10" />
                  <div className="mb-6 flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="mb-8 text-lg italic text-zinc-600 leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-bold text-zinc-900">{t.name}</div>
                  <div className="text-sm text-zinc-500">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
