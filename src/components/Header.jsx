import { Mail, Phone, MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-black/20 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-semibold ring-1 ring-white/20">
          Get in touch
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          We’d love to hear from you
        </h1>
        <p className="mt-3 text-white/80 max-w-2xl">
          Questions, feedback, or just want to say hi? Send us a message and our team will respond within one business day.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>hello@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </div>
        </div>
      </div>
    </header>
  );
}
