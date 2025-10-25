import Header from "./components/Header";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Header />
      <main className="-mt-10 md:-mt-12 mb-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-white shadow-sm p-1" />
        </div>
      </main>
      <ContactInfo />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
