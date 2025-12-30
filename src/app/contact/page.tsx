import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold text-zinc-900 md:text-6xl">Contact Us</h1>
          <p className="text-xl text-zinc-600">
            Let’s talk about your project.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-zinc-50 py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-zinc-900">Get in Touch</h2>
                  <p className="text-lg leading-relaxed text-zinc-600">
                    Ready to build something great together? We're here to help you establish a strong digital presence. Reach out to us through any of the channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A4D8C]/10">
                      <Mail className="h-6 w-6 text-[#0A4D8C]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-zinc-500">Email Address</h4>
                      <p className="font-bold text-zinc-900">webcraftsolutions2@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 space-y-4">
                  <Button asChild size="lg" className="h-14 gap-2 bg-[#25D366] px-8 text-white hover:bg-[#1EBE57] w-full md:w-auto">
                    <a href="https://wa.me/919998717833?text=Hi%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="h-5 w-5" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-6">
                <div className="text-left">
                  <h2 className="text-3xl font-bold text-zinc-900 mb-2">Let’s talk about your project</h2>
                  <p className="text-zinc-600">Fill the form below and we will contact you shortly.</p>
                </div>
                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfD_XXXXXXXXXXXX/viewform?embedded=true"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded-xl bg-white"
                  >
                    Loading…
                  </iframe>
                  <div className="mt-4 p-4 text-xs text-zinc-500 bg-zinc-50 rounded-lg">
                    Note: Please replace the Google Form ID in the code with your actual form ID to receive submissions at webcraftsolutions2@gmail.com.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
