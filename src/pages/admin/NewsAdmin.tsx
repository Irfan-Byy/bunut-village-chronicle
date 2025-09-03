import React, { useState } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// --- Tipe data ---
type News = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image?: string | File;
};

// --- API URL ---
const API_URL = "http://localhost:8000/api/news";

const NewsAdmin: React.FC = () => {
  const queryClient = useQueryClient();
  const [form, setForm] = useState<Partial<News>>({});

  // --- GET News ---
  const { data: newsList, isLoading } = useQuery<News[]>({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await axios.get<News[]>(API_URL);
      return res.data;
    },
  });

  // --- CREATE News ---
  const createNews = useMutation({
    mutationFn: async (newNews: Partial<News>) => {
      const formData = new FormData();
      formData.append("title", newNews.title || "");
      formData.append("excerpt", newNews.excerpt || "");
      formData.append("author", newNews.author || "");
      formData.append("category", newNews.category || "");

      if (newNews.image instanceof File) {
        formData.append("image", newNews.image);
      }

      const res = await axios.post<News>(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
      setForm({});
    },
  });

  // --- UPDATE News ---
  const updateNews = useMutation({
    mutationFn: async (updated: News) => {
      const formData = new FormData();
      formData.append("title", updated.title || "");
      formData.append("excerpt", updated.excerpt || "");
      formData.append("author", updated.author || "");
      formData.append("category", updated.category || "");

      if (updated.image instanceof File) {
        formData.append("image", updated.image);
      }

      // gunakan method spoofing untuk PUT
      formData.append("_method", "PUT");

      const res = await axios.post<News>(
        `${API_URL}/${updated.id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return res.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["news"] }),
  });

  // --- DELETE News ---
  const deleteNews = useMutation({
    mutationFn: async (id: number) => {
      const res = await axios.delete<{ success: boolean }>(`${API_URL}/${id}`);
      return res.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["news"] }),
  });

  // --- Handle form ---
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setForm({ ...form, image: e.target.files[0] });
    }
  };

  const handleSubmit = () => {
    if (form.id) {
      updateNews.mutate(form as News);
    } else {
      createNews.mutate(form);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manajemen Berita</h1>

      {/* Form Tambah/Edit */}
      <div className="space-y-3 mb-6">
        <Input
          name="title"
          placeholder="Judul"
          value={form.title || ""}
          onChange={handleChange}
        />
        <Textarea
          name="excerpt"
          placeholder="Isi singkat"
          value={form.excerpt || ""}
          onChange={handleChange}
        />
        <Input
          name="author"
          placeholder="Penulis"
          value={form.author || ""}
          onChange={handleChange}
        />
        <Input
          name="category"
          placeholder="Kategori"
          value={form.category || ""}
          onChange={handleChange}
        />
        <Input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
        />
        <Button onClick={handleSubmit}>
          {form.id ? "Update" : "Tambah"} Berita
        </Button>
      </div>

      {/* Daftar News */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {newsList?.map((news) => (
            <div
              key={news.id}
              className="p-4 border rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                {news.image && (
                  <img
                    src={`http://localhost:8000/storage/${news.image}`}
                    alt={news.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                )}
                <div>
                  <h2 className="font-bold">{news.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {news.excerpt}
                  </p>
                </div>
              </div>
              <div className="space-x-2">
                <Button variant="outline" onClick={() => setForm(news)}>
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => deleteNews.mutate(news.id)}
                >
                  Hapus
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsAdmin;
