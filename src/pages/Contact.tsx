import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      details: [
        "Jl. Desa Bunut Hilir No. 1",
        "Kecamatan Bunut Hilir, Kabupaten Kapuas Hulu",
        "Kode Pos: 87863"
      ]
    },
    {
      icon: Phone,
      title: "Telepon",
      details: [
        "+62 xxx-xxxx-xxxx (Kantor Desa)",
        "+62 xxx-xxxx-xxxx (Kepala Desa)",
        "+62 xxx-xxxx-xxxx (Sekretaris)"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@bunuthilir.desa.id",
        "kepaladesa@bunuthilir.desa.id",
        "sekretaris@bunuthilir.desa.id"
      ]
    },
    {
      icon: Clock,
      title: "Jam Pelayanan",
      details: [
        "Senin - Jumat: 08:00 - 16:00",
        "Sabtu: 08:00 - 12:00",
        "Minggu: Tutup"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hubungi Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami siap melayani dan mendengarkan aspirasi Anda. Jangan ragu untuk 
            menghubungi kami melalui berbagai cara berikut.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-foreground mb-6">Informasi Kontak</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <info.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Kirim Pesan</h2>
                </div>
                <p className="text-muted-foreground">
                  Silakan isi formulir di bawah ini untuk mengirim pesan kepada kami.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input id="name" placeholder="Masukkan nama lengkap Anda" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="nama@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input id="phone" placeholder="+62 xxx-xxxx-xxxx" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subjek</Label>
                      <Input id="subject" placeholder="Subjek pesan" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tulis pesan Anda di sini..."
                      className="min-h-32"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <h2 className="text-2xl font-bold text-foreground">Lokasi Kantor Desa</h2>
            <p className="text-muted-foreground">
              Kunjungi kantor desa kami untuk pelayanan langsung
            </p>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Peta Lokasi Kantor Desa</p>
                <p className="text-sm">Integrasikan dengan Google Maps</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;