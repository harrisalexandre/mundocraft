import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Página não encontrada
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Parece que você se perdeu nas profundezas do mundo Minecraft! 
              A página que você procura não existe.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link to="/">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary">
                <Home className="w-5 h-5 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Ou navegue pelas páginas usando o menu superior
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;