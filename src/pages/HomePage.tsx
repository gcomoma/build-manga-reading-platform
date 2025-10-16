
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, TrendingUp, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const featuredManga = [
    {
      id: 1,
      title: "Dragon's Legacy",
      cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      rating: 4.8,
      chapters: 156,
      genre: "Action, Fantasy"
    },
    {
      id: 2,
      title: "Mystic Academy",
      cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      rating: 4.6,
      chapters: 89,
      genre: "Romance, School"
    },
    {
      id: 3,
      title: "Shadow Hunter",
      cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      rating: 4.9,
      chapters: 203,
      genre: "Action, Supernatural"
    }
  ];

  const trendingManga = [
    { id: 4, title: "Cyber Samurai", chapters: 45, views: "2.1M" },
    { id: 5, title: "Magic Knight", chapters: 78, views: "1.8M" },
    { id: 6, title: "Space Pirates", chapters: 92, views: "1.5M" },
    { id: 7, title: "Time Traveler", chapters: 34, views: "1.2M" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover Amazing
            <br />
            <span className="text-manga-accent">Manga</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Dive into thousands of manga series. Read, collect, and explore new worlds of storytelling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="manga" asChild>
              <Link to="/browse">Start Reading</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20" asChild>
              <Link to="/library">My Library</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Manga */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Featured Manga</h2>
            <Button variant="ghost" asChild>
              <Link to="/browse">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredManga.map((manga) => (
              <Card key={manga.id} className="group cursor-pointer">
                <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
                  <img
                    src={manga.cover}
                    alt={manga.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <Star className="h-4 w-4 fill-manga-accent text-manga-accent" />
                      <span className="text-sm font-medium">{manga.rating}</span>
                      <span className="text-sm opacity-75">• {manga.chapters} chapters</span>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{manga.title}</CardTitle>
                  <CardDescription>{manga.genre}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link to={`/read/${manga.id}`}>Read Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Trending List */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Trending Now</h2>
              </div>
              <div className="space-y-4">
                {trendingManga.map((manga, index) => (
                  <Card key={manga.id} className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-foreground">{manga.title}</h3>
                        <p className="text-sm text-muted-foreground">{manga.chapters} chapters</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{manga.views}</p>
                        <p className="text-xs text-muted-foreground">views</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stats & Features */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose MangaVerse?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-6 text-center">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">10,000+</h3>
                  <p className="text-sm text-muted-foreground">Manga Series</p>
                </Card>
                <Card className="p-6 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Daily</h3>
                  <p className="text-sm text-muted-foreground">Updates</p>
                </Card>
                <Card className="p-6 text-center">
                  <Star className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">HD Quality</h3>
                  <p className="text-sm text-muted-foreground">Reading</p>
                </Card>
                <Card className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Free</h3>
                  <p className="text-sm text-muted-foreground">Forever</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;