import Header from "@/components/Header";
import CatalogHero from "@/components/CatalogHero";
import BrowsingHistory from "@/components/BrowsingHistory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative">
        <CatalogHero />
        <BrowsingHistory />
      </main>
      <Footer />
    </div>
  );
}
