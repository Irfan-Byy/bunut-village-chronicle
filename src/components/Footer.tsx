import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Village Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">BH</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Desa Bunut Hilir</h3>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Desa yang maju dan sejahtera dengan masyarakat yang gotong royong. 
              Bersama membangun masa depan yang lebih baik.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Jl. Desa Bunut Hilir, Kecamatan X, Kabupaten Y</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+62 xxx-xxxx-xxxx</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>info@bunuthilir.desa.id</span>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Jam Pelayanan</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div>Senin - Jumat: 08:00 - 16:00</div>
                  <div>Sabtu: 08:00 - 12:00</div>
                  <div>Minggu: Tutup</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Desa Bunut Hilir. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};