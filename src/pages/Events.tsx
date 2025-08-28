import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Rapat Bulanan RT/RW",
      date: "25 Maret 2024",
      time: "19:00 WIB",
      location: "Balai Desa",
      description: "Rapat rutin bulanan untuk membahas program kerja dan kendala yang dihadapi di tingkat RT/RW.",
      category: "Rapat",
      attendees: "50 orang"
    },
    {
      title: "Pelatihan Pertanian Organik",
      date: "30 Maret 2024", 
      time: "08:00 WIB",
      location: "Lahan Demonstrasi Desa",
      description: "Workshop tentang teknik pertanian organik untuk meningkatkan kualitas hasil panen dan ramah lingkungan.",
      category: "Pelatihan",
      attendees: "30 petani"
    },
    {
      title: "Lomba Kebersihan Antar RT",
      date: "5 April 2024",
      time: "07:00 WIB", 
      location: "Seluruh Wilayah Desa",
      description: "Kompetisi kebersihan lingkungan antar RT untuk menciptakan desa yang bersih dan sehat.",
      category: "Lomba",
      attendees: "Semua RT"
    },
    {
      title: "Senam Sehat Bersama",
      date: "Setiap Minggu",
      time: "06:00 WIB",
      location: "Lapangan Desa",
      description: "Kegiatan olahraga rutin untuk menjaga kesehatan warga desa dengan senam aerobik bersama.",
      category: "Olahraga",
      attendees: "Semua usia"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Acara & Kegiatan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jangan lewatkan berbagai acara dan kegiatan menarik di Desa Bunut Hilir. 
            Mari berpartisipasi aktif dalam membangun desa bersama.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground pr-4">
                    {event.title}
                  </h3>
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {event.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full">
                    Daftar Kehadiran
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-hero p-8 rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-4">
            Punya Usulan Acara?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Sampaikan ide dan usulan acara Anda untuk kemajuan desa bersama
          </p>
          <Button variant="secondary" size="lg">
            Kirim Usulan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;