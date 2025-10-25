export default function Footer() {
  return (
    <footer className="mt-12 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-zinc-800">Privacy</a>
          <a href="#" className="hover:text-zinc-800">Terms</a>
          <a href="#" className="hover:text-zinc-800">Status</a>
        </nav>
      </div>
    </footer>
  );
}
