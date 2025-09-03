import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type News = {
  id: number;
  title: string;
  image?: string;
};

const API_URL = "http://localhost:8000/api/news";

const GalleryAdmin: React.FC = () => {
  // Ambil dari tabel news
  const { data: newsList, isLoading } = useQuery<News[]>({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await axios.get<News[]>(API_URL);
      return res.data;
    },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Galeri Desa</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {newsList
            ?.filter((n) => n.image) // hanya berita yang ada gambar
            .map((news) => (
              <div
                key={news.id}
                className="border rounded overflow-hidden"
              >
                <img
                  src={`http://localhost:8000/storage/${news.image}`}
                  alt={news.title}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default GalleryAdmin;
