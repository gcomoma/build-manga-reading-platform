
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, BookOpen, TrendingUp, Clock, Users, Sparkles } from 'lucide-react';

export default function Home() {
  const featuredManga = [
    {
      id: 1,
      title: 'Dragon's Legacy',
      author: 'Akira Yamamoto',
      rating: 4.8,
      chapters: 156,
      status: 'Ongoing',
      genre: ['Action', 'Fantasy', 'Adventure'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop',
      description: 'A young warrior discovers an ancient dragon\'s power within himself.',
    },
    {
      id: 2,
      title: 'Neon Dreams',
      author: 'Yuki Tanaka',
      rating: 4.6,
      chapters: 89,
      status: 'Ongoing',
      genre: ['Sci-Fi', 'Cyberpunk', 'Action'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop',
      description: 'In a cyberpunk future, a hacker uncovers a conspiracy that threatens humanity.',
    },
    {
      id: 3,
      title: 'Sakura High',
      author: 'Mei Sato',
      rating: 4.7,
      chapters: 234,
      status: 'Completed',
      genre: ['Romance', 'School', 'Drama'],
      image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&h=600&fit=crop',
      description: 'A heartwarming story of friendship and love in a Japanese high school.',
    },
  ];

  const trendingManga = [
    { title: 'Shadow Blade Chronicles', chapters: 45, trend: '+12%' },
    { title: 'Magic Academy', chapters: 78, trend: '+8%' },
    { title: 'Space Pirates', chapters: 123, trend: '+15%' },
    { title: 'Demon Slayer Academy', chapters: 67, trend: '+6%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                MangaVerse
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/signin">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Discover Your Next
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Manga Adventure
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Dive into thousands of manga series, track your reading progress, and join a community of manga enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-3 text-lg">
                Start Reading Free
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-border hover:bg-accent/50 px-8 py-3 text-lg">
              Browse Manga
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Manga */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Star className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Featured Manga</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredManga.map((manga) => (
              <Card key={manga.id} className="group hover:shadow-xl transition-all duration-300 border-border bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={manga.image}
                    alt={manga.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {manga.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        by {manga.author}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-foreground">{manga.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {manga.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {manga.genre.map((g) => (
                      <Badge key={g} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                        {g}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{manga.chapters} chapters</span>
                    </div>
                    <Badge variant={manga.status === 'Ongoing' ? 'default' : 'secondary'} className="text-xs">
                      {manga.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Trending Manga */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Trending Now</h3>
              </div>
              <div className="space-y-4">
                {trendingManga.map((manga, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:bg-card/70 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{manga.title}</h4>
                        <p className="text-sm text-muted-foreground">{manga.chapters} chapters</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      {manga.trend}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Community Stats</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-sm text-muted-foreground">Active Readers</div>
                  </div>
                </Card>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">10K+</div>
                    <div className="text-sm text-muted-foreground">Manga Series</div>
                  </div>
                </Card>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                    <div className="text-sm text-muted-foreground">Chapters Read</div>
                  </div>
                </Card>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">New Updates</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/80 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MangaVerse
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2024 MangaVerse. All rights reserved. Start your manga journey today.
          </p>
        </div>
      </footer>
    </div>
  );
}