import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import villageHero from "@/assets/village-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${villageHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Selamat Datang di
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Desa Bunut Hilir
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Menyajikan informasi terkini tentang berita dan acara desa kami. 
            Bersama membangun desa yang maju dan sejahtera.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg">
              Lihat Berita Terbaru
            </Button>
            <Button size="lg" variant="secondary" className="text-lg">
              Jelajahi Acara
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/80" />
      </div>
    </section>
  );
};