import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

type DashboardResponse = {
  message: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
  stats?: {
    news: number;
    events: number;
    gallery: number;
  };
};

const DashboardAdmin: React.FC = () => {
  const [data, setData] = useState<DashboardResponse | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get<DashboardResponse>("http://localhost:8000/api/admin/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">📊 Dashboard Admin</h1>

      {data ? (
        <>
          {/* Info Admin */}
          <Card>
            <CardHeader>
              <CardTitle>Selamat Datang</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{data.message}</p>
              <p>
                👋 Halo, <b>{data.user.name}</b> ({data.user.email})
              </p>
            </CardContent>
          </Card>

          {/* Statistik */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>📰 Berita</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {data.stats?.news ?? 0}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>📅 Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {data.stats?.events ?? 0}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🖼️ Galeri</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {data.stats?.gallery ?? 0}
                </p>
              </CardContent>
            </Card>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DashboardAdmin;
