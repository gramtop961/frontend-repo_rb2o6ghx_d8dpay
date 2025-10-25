import { Building2, Clock, Shield } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-600/10 text-indigo-600">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="font-semibold">Our Office</h3>
        </div>
        <p className="mt-3 text-zinc-600 text-sm">
          123 Market Street
          <br /> San Francisco, CA 94103
          <br /> United States
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-600/10 text-indigo-600">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-semibold">Hours</h3>
        </div>
        <p className="mt-3 text-zinc-600 text-sm">
          Monday – Friday, 9:00 AM – 6:00 PM PT
          <br /> Response time: under 24 hours
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-600/10 text-indigo-600">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-semibold">Privacy</h3>
        </div>
        <p className="mt-3 text-zinc-600 text-sm">
          We only use your details to respond to your message. Your data is stored securely and never shared.
        </p>
      </div>
    </section>
  );
}
