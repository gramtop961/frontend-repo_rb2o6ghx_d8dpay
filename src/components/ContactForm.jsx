import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    // Simple client-side validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill in name, email and message." });
      return;
    }

    try {
      const res = await fetch(`${backendUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        const detail = data?.detail || "Something went wrong.";
        throw new Error(typeof detail === "string" ? detail : "Validation error");
      }

      setStatus({ type: "success", message: "Message sent! We'll get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "", consent: false });
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Failed to send message." });
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-6 mt-8 grid md:grid-cols-5 gap-8">
      <div className="md:col-span-3">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700">Name</label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-600/20 focus:ring-4"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-600/20 focus:ring-4"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-zinc-700">Subject</label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-600/20 focus:ring-4"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder="How can we help?"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-zinc-700">Message</label>
            <textarea
              className="mt-1 w-full min-h-[140px] rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-600/20 focus:ring-4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>

          <label className="mt-4 flex items-center gap-2 text-sm text-zinc-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500"
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
            />
            I agree to be contacted about my inquiry.
          </label>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-indigo-700 disabled:opacity-70"
            >
              {status.type === "loading" ? "Sending..." : "Send message"}
            </button>
            {status.type === "success" && (
              <p className="text-sm text-emerald-600">{status.message}</p>
            )}
            {status.type === "error" && (
              <p className="text-sm text-rose-600">{status.message}</p>
            )}
          </div>
        </form>
      </div>

      <aside className="md:col-span-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Why contact us?</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 list-disc pl-5">
            <li>Product questions and demos</li>
            <li>Pricing and enterprise inquiries</li>
            <li>Partnerships and collaborations</li>
            <li>Support and feedback</li>
          </ul>
          <div className="mt-6 rounded-xl bg-zinc-50 p-4 text-xs text-zinc-600">
            We usually reply within a few hours during business days.
          </div>
        </div>
      </aside>
    </section>
  );
}
