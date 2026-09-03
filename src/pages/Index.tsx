import React, { useState } from 'react';
import { Music, BookOpen, BarChart3, Users, Play, Clock, Piano } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("practice");

  // Sample data
  const practiceLog = [
    { id: 1, piece: "Moonlight Sonata", duration: 45, date: "Today" },
    { id: 2, piece: "Für Elise", duration: 30, date: "Yesterday" },
    { id: 3, piece: "Nocturne Op. 9 No. 2", duration: 60, date: "2 days ago" },
  ];

  const repertoire = [
    { id: 1, title: "Moonlight Sonata", composer: "Beethoven", level: "Intermediate", status: "Learning" },
    { id: 2, title: "Für Elise", composer: "Beethoven", level: "Beginner", status: "Mastered" },
    { id: 3, title: "Nocturne Op. 9 No. 2", composer: "Chopin", level: "Advanced", status: "Learning" },
  ];

  const stats = [
    { label: "Total Practice", value: "135 hrs", icon: Clock },
    { label: "Pieces Learned", value: "12", icon: Music },
    { label: "Current Streak", value: "7 days", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Piano className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">PianoFlow</h1>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Welcome Back, Pianist</h2>
          <p className="text-lg text-muted-foreground mb-8">Track your progress, organize your pieces, and master the piano</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="p-6 bg-card border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                  </div>
                  <Icon className="w-10 h-10 text-primary/60" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-secondary">
            <TabsTrigger value="practice" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Clock className="w-4 h-4 mr-2" />
              Practice Log
            </TabsTrigger>
            <TabsTrigger value="repertoire" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <BookOpen className="w-4 h-4 mr-2" />
              Repertoire
            </TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Users className="w-4 h-4 mr-2" />
              Community
            </TabsTrigger>
          </TabsList>

          {/* Practice Log Tab */}
          <TabsContent value="practice" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-foreground">Recent Sessions</h3>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Play className="w-4 h-4 mr-2" />
                Start Session
              </Button>
            </div>
            <div className="space-y-3">
              {practiceLog.map((session) => (
                <Card key={session.id} className="p-4 bg-card border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{session.piece}</p>
                      <p className="text-sm text-muted-foreground">{session.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">{session.duration} min</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Repertoire Tab */}
          <TabsContent value="repertoire" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-foreground">My Pieces</h3>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Music className="w-4 h-4 mr-2" />
                Add Piece
              </Button>
            </div>
            <div className="space-y-3">
              {repertoire.map((piece) => (
                <Card key={piece.id} className="p-4 bg-card border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{piece.title}</p>
                      <p className="text-sm text-muted-foreground">{piece.composer}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                        {piece.level}
                      </span>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        piece.status === "Mastered" 
                          ? "bg-accent/20 text-accent" 
                          : "bg-primary/20 text-primary"
                      }`}>
                        {piece.status}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">Connect with Other Pianists</h3>
            <Card className="p-8 bg-card border-border text-center">
              <Users className="w-12 h-12 text-primary/60 mx-auto mb-4" />
              <p className="text-foreground font-semibold mb-2">Community Features Coming Soon</p>
              <p className="text-muted-foreground mb-6">Share progress, find practice buddies, and learn from other pianists</p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Learn More
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
