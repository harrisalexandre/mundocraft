import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ZoomIn, ExternalLink } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/lovable-uploads/explorando-oceano.png",
      title: "Explorando o Oceano",
      description: "Jogadores descobrindo as maravilhas aquáticas com golfinho",
      category: "Exploração",
    },
    {
      src: "/lovable-uploads/acampamento-caverna.jpg",
      title: "Acampamento na Caverna",
      description: "Base subterrânea aconchegante com decoração rústica",
      category: "Construção",
    },
    {
      src: "/lovable-uploads/aventura-ar-livre.png",
      title: "Aventura ao Ar Livre",
      description: "Explorando o mundo com equipamentos diamante",
      category: "Aventura",
    },
    {
      src: "/lovable-uploads/e222e0d9-6331-4c02-b236-cf1a94a970e8.png",
      title: "Mineração Cooperativa",
      description: "Jogadores trabalhando juntos na mineração",
      category: "Cooperação",
    },
    {
      src: "/lovable-uploads/estruturas-epicas.jpg",
      title: "Estruturas Épicas",
      description: "Construções impressionantes da nossa comunidade",
      category: "Construção",
    },
  ];

  const categories = [
    "Todos",
    "Exploração",
    "Construção",
    "Aventura",
    "Cooperação",
  ];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredImages =
    activeCategory === "Todos"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Galeria de
            </span>
            <br />
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Screenshots
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Confira as aventuras incríveis que acontecem todos os dias em nosso
            servidor. Cada imagem conta uma história única da nossa comunidade!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-gradient-primary shadow-glow-primary"
                  : ""
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border hover:shadow-glow-primary transition-all duration-300 hover:scale-105 overflow-hidden group cursor-pointer"
              onClick={() => openModal(image.src)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn
                    className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                    size={32}
                  />
                </div>
                <Badge className="absolute top-2 right-2 bg-gradient-secondary">
                  {image.category}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {image.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-card/80 backdrop-blur-sm border-border shadow-glow-gold max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
                Faça Parte da Nossa História!
              </h2>
              <p className="text-muted-foreground mb-6">
                Estas são apenas algumas das aventuras que acontecem em nosso
                servidor. Venha criar suas próprias memórias conosco!
              </p>
              <Button
                className="bg-gradient-primary hover:shadow-glow-primary"
                onClick={() => (window.location.href = "/connect")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Começar a Jogar Agora
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Modal for enlarged images */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <Button
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                onClick={closeModal}
              >
                ✕
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
