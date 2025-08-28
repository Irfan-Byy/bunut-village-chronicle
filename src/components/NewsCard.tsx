import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  readTime?: string;
}

export const NewsCard = ({ 
  title, 
  excerpt, 
  date, 
  author, 
  category, 
  image,
  readTime = "5 menit"
}: NewsCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-warm transition-all duration-300 bg-gradient-card border-0 group cursor-pointer">
      {image && (
        <div className="relative overflow-hidden h-48">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              {category}
            </Badge>
          </div>
        </div>
      )}
      
      <CardHeader className="pb-3">
        <h3 className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};