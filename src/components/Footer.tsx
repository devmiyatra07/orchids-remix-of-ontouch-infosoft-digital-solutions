import Link from "next/link";
import { Mail, MessageSquare } from "lucide-react";
import { Logo } from "./Logo";

    export function Footer() {
      return (
        <footer className="border-t border-zinc-200 bg-zinc-50 py-12 text-zinc-600">
          <div className="container mx-auto grid gap-8 px-4 md:grid-cols-4 md:px-6">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Logo />
              </Link>
              <p className="text-sm leading-relaxed">
                Smart digital solutions for modern businesses.
              </p>
            </div>
    
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-900">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/" className="hover:text-[#0A4D8C] transition-colors">Home</Link></li>
                    <li><Link href="/about" className="hover:text-[#0A4D8C] transition-colors">About Us</Link></li>
                    <li><Link href="/services" className="hover:text-[#0A4D8C] transition-colors">Services</Link></li>
                    <li><Link href="/portfolio" className="hover:text-[#0A4D8C] transition-colors">Portfolio</Link></li>
                  </ul>
              </div>
    
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-900">Contact</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#0A4D8C]" />
                    <span>webcraftsolutions2@gmail.com</span>
                  </li>
                </ul>
              </div>
    
    
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-900">Connect</h3>
                  <a
                    href="https://wa.me/919998717833?text=Hi%20I%20am%20interested%20in%20your%20services"
                    className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white p-3 text-sm transition-hover hover:bg-zinc-100"
                  >
                  <MessageSquare className="h-4 w-4 text-[#0A4D8C]" />
                  <span className="text-zinc-900 font-medium">Chat on WhatsApp</span>
                </a>
              </div>
          </div>
            <div className="container mx-auto mt-12 border-t border-zinc-200 pt-8 text-center text-xs px-4">
              <p>Copyright &copy; 2025 WebCraft Solutions. All rights reserved.</p>
            </div>
        </footer>
      );
    }
