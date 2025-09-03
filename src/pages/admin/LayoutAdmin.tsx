import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-xl font-bold text-blue-600">
          Admin Desa
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <Link to="/admin/dashboard" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200">
                🏠 Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/news" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200">
                📄 Berita
              </Link>
            </li>
            <li>
              <Link to="/admin/events" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200">
                📅 Events
              </Link>
            </li>
            <li>
              <Link to="/admin/gallery" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200">
                🖼️ Galeri
              </Link>
            </li>
            <li>
              <Link to="/admin/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200">
                ⚙️ Pengaturan
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
