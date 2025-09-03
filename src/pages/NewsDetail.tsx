import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface News {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image?: string;
}

const NewsDetail = () => {
  const { id } = useParams();

  const { data: news, isLoading } = useQuery<News>({
    queryKey: ["news", id],
    queryFn: async () => {
      const res = await axios.get<News>(`http://localhost:8000/api/news/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (!news) return <p className="text-center py-10">Berita tidak ditemukan</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
      <p className="text-muted-foreground mb-4">
        ✍️ {news.author} • {news.category}
      </p>

      {/* Gambar Berita */}
      {news.image && (
        <img
          src={`http://localhost:8000/storage/${news.image}`}
          alt={news.title}
          className="w-full max-h-[500px] object-cover rounded-lg mb-6"
        />
      )}

      {/* Deskripsi Berita */}
      <div className="prose max-w-none leading-relaxed">
        <p>{news.content}</p>
      </div>
    </div>
  );
};

export default NewsDetail;
