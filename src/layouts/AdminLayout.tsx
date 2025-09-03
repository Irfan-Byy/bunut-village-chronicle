import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-xl font-bold border-b">Admin Desa</div>
        <nav className="p-4">
          <ul className="space-y-3">
            <li><Link to="/admin/dashboard">📊 Dashboard</Link></li>
            <li><Link to="/admin/news">📰 Berita</Link></li>
            <li><Link to="/admin/events">📅 Events</Link></li>
            <li><Link to="/admin/gallery">🖼️ Galeri</Link></li>
            <li><Link to="/admin/settings">⚙ Pengaturan</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Konten */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
