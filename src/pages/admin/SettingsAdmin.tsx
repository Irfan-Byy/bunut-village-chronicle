import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SettingsAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Hapus token/auth di localStorage
    localStorage.removeItem("token");
    // Arahkan ke halaman login
    navigate("/login");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Pengaturan Admin</h1>
      <p className="text-muted-foreground mb-6">
        Atur profil admin dan preferensi aplikasi.
      </p>

      <div className="flex gap-4">
        {/* Tombol Kembali */}
        <Button variant="outline" onClick={() => navigate("/")}>
          ⬅️ Kembali ke Beranda
        </Button>

        {/* Tombol Logout */}
        <Button variant="destructive" onClick={handleLogout}>
          🚪 Logout
        </Button>
      </div>
    </div>
  );
};

export default SettingsAdmin;
