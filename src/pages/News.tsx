import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface News {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image?: string;
}

const News = () => {
  const { data: allNews = [], isLoading } = useQuery<News[]>({
    queryKey: ["news"],
    queryFn: async (): Promise<News[]> => {
      const res = await axios.get<News[]>("http://localhost:8000/api/news");
      return res.data;
    },
  });
  

  if (isLoading) {
    return <p className="text-center py-10">Loading berita...</p>;
  }

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