import { Hero } from "@/components/Hero";
import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Newspaper, Calendar, Users, Award } from "lucide-react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const Index = () => {
  const latestNews = [
    {
      title: "Rapat Koordinasi Pembangunan Infrastruktur Desa",
      excerpt: "Kepala desa bersama perangkat desa mengadakan rapat koordinasi untuk membahas rencana pembangunan infrastruktur jalan dan jembatan yang akan dimulai bulan depan.",
      date: "15 Maret 2024",
      author: "Sekretaris Desa",
      category: "Pembangunan",
      image: news1,
      readTime: "3 menit"
    },
    {
      title: "Festival Budaya Desa Bunut Hilir Meriah dan Sukses",
      excerpt: "Festival budaya tahunan desa berhasil diselenggarakan dengan antusias warga. Berbagai kegiatan seni dan budaya lokal dipamerkan dalam acara yang berlangsung 3 hari ini.",
      date: "10 Maret 2024", 
      author: "Karang Taruna",
      category: "Budaya",
      image: news2,
      readTime: "4 menit"
    },
    {
      title: "Program Bantuan Sosial untuk Keluarga Kurang Mampu",
      excerpt: "Pemerintah desa menyalurkan bantuan sosial berupa sembako dan dana tunai kepada 50 keluarga kurang mampu sebagai bentuk kepedulian terhadap masyarakat.",
      date: "5 Maret 2024",
      author: "Bendahara Desa", 
      category: "Sosial",
      image: news3,
      readTime: "2 menit"
    }
  ];

  const stats = [
    { icon: Users, label: "Jumlah Penduduk", value: "2,450", unit: "jiwa" },
    { icon: Newspaper, label: "Berita Bulan Ini", value: "12", unit: "artikel" },
    { icon: Calendar, label: "Acara Mendatang", value: "5", unit: "kegiatan" },
    { icon: Award, label: "Prestasi Tahun Ini", value: "8", unit: "penghargaan" }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Village Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-card p-6 rounded-lg shadow-card">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.unit}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Berita Terbaru
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ikuti perkembangan terkini dari Desa Bunut Hilir. 
              Dapatkan informasi seputar kegiatan, pembangunan, dan berbagai program desa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {latestNews.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="text-lg">
              Lihat Semua Berita
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
