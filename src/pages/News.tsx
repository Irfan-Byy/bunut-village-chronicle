import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const News = () => {
  const allNews = [
    {
      title: "Rapat Koordinasi Pembangunan Infrastruktur Desa",
      excerpt: "Kepala desa bersama perangkat desa mengadakan rapat koordinasi untuk membahas rencana pembangunan infrastruktur jalan dan jembatan yang akan dimulai bulan depan.",
      date: "15 Maret 2024",
      author: "Sekretaris Desa",
      category: "Pembangunan",
      image: news1
    },
    {
      title: "Festival Budaya Desa Bunut Hilir Meriah dan Sukses",
      excerpt: "Festival budaya tahunan desa berhasil diselenggarakan dengan antusias warga. Berbagai kegiatan seni dan budaya lokal dipamerkan dalam acara yang berlangsung 3 hari ini.",
      date: "10 Maret 2024",
      author: "Karang Taruna", 
      category: "Budaya",
      image: news2
    },
    {
      title: "Program Bantuan Sosial untuk Keluarga Kurang Mampu",
      excerpt: "Pemerintah desa menyalurkan bantuan sosial berupa sembako dan dana tunai kepada 50 keluarga kurang mampu sebagai bentuk kepedulian terhadap masyarakat.",
      date: "5 Maret 2024",
      author: "Bendahara Desa",
      category: "Sosial", 
      image: news3
    },
    {
      title: "Perbaikan Sistem Irigasi Sawah Desa",
      excerpt: "Proyek perbaikan sistem irigasi sawah telah selesai dilaksanakan. Diharapkan dapat meningkatkan produktivitas pertanian warga desa.",
      date: "28 Februari 2024",
      author: "Kepala Desa",
      category: "Pertanian"
    },
    {
      title: "Pelatihan Keterampilan Menjahit untuk Ibu-Ibu PKK",
      excerpt: "Program pelatihan keterampilan menjahit diselenggarakan untuk meningkatkan kemampuan ekonomi ibu-ibu anggota PKK desa.",
      date: "20 Februari 2024",
      author: "Ketua PKK",
      category: "Pelatihan"
    },
    {
      title: "Gotong Royong Membersihkan Lingkungan Desa",
      excerpt: "Warga desa bersama-sama melakukan kegiatan gotong royong membersihkan lingkungan desa dalam rangka menyambut hari kemerdekaan.",
      date: "15 Februari 2024",
      author: "RT/RW",
      category: "Lingkungan"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Berita Desa
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ikuti perkembangan terkini dari Desa Bunut Hilir. Temukan informasi seputar kegiatan, 
            pembangunan, dan berbagai program desa.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 bg-card p-6 rounded-lg shadow-card">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Cari berita..."
              className="pl-10"
            />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Kategori</SelectItem>
              <SelectItem value="pembangunan">Pembangunan</SelectItem>
              <SelectItem value="budaya">Budaya</SelectItem>
              <SelectItem value="sosial">Sosial</SelectItem>
              <SelectItem value="pertanian">Pertanian</SelectItem>
              <SelectItem value="pelatihan">Pelatihan</SelectItem>
              <SelectItem value="lingkungan">Lingkungan</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full md:w-auto">
            Cari
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Sebelumnya
            </Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">
              Selanjutnya
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;