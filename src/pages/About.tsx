import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Award, Target } from "lucide-react";

const About = () => {
  const achievements = [
    "Juara 1 Desa Terbersih Tingkat Kabupaten 2023",
    "Desa Mandiri Energi dengan Panel Surya",
    "Program BUMDes Terbaik se-Kecamatan",
    "Zero Waste Village Initiative"
  ];

  const facilities = [
    "Balai Desa & Kantor Pelayanan",
    "Puskesmas Pembantu",
    "Sekolah Dasar & PAUD",
    "Masjid & Musholla",
    "Lapangan Olahraga",
    "Pasar Tradisional",
    "Perpustakaan Desa"
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tentang Desa Bunut Hilir
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mengenal lebih dekat profil, sejarah, dan visi misi Desa Bunut Hilir 
            dalam membangun masyarakat yang maju dan sejahtera.
          </p>
        </div>

        {/* Village Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Profil Desa</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Desa Bunut Hilir adalah sebuah desa yang terletak di kawasan yang strategis 
                dengan pemandangan alam yang indah. Desa ini memiliki luas wilayah sekitar 
                12 km² dengan jumlah penduduk 2.450 jiwa yang terdiri dari 650 kepala keluarga.
              </p>
              <p>
                Mayoritas penduduk bermata pencaharian sebagai petani, peternak, dan pedagang. 
                Desa ini dikenal dengan hasil pertanian yang melimpah, terutama padi, jagung, 
                dan berbagai jenis sayuran.
              </p>
              <p>
                Dengan semangat gotong royong yang tinggi, masyarakat Desa Bunut Hilir 
                aktif dalam berbagai kegiatan pembangunan dan pemberdayaan masyarakat.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Data Geografis</h2>
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">Lokasi</div>
                      <div className="text-sm text-muted-foreground">
                        Kecamatan Bunut Hilir, Kabupaten Kapuas Hulu, Provinsi Kalimantan Barat
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">Jumlah Penduduk</div>
                      <div className="text-sm text-muted-foreground">2.450 jiwa (650 KK)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">Luas Wilayah</div>
                      <div className="text-sm text-muted-foreground">12 km²</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Visi & Misi</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Visi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "Mewujudkan Desa Bunut Hilir yang maju, mandiri, dan sejahtera 
                  dengan masyarakat yang berkarakter, gotong royong, dan berwawasan lingkungan 
                  pada tahun 2030."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Misi</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Meningkatkan kualitas pelayanan publik</li>
                  <li>• Mengembangkan potensi ekonomi desa</li>
                  <li>• Melestarikan budaya dan tradisi lokal</li>
                  <li>• Menciptakan lingkungan yang bersih dan sehat</li>
                  <li>• Membangun infrastruktur yang memadai</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements & Facilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Prestasi & Penghargaan
            </h2>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-card">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Fasilitas Desa</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {facilities.map((facility, index) => (
                <div key={index} className="p-3 bg-card rounded-lg shadow-card text-center">
                  <span className="text-sm text-muted-foreground">{facility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;