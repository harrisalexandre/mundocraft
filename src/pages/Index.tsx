import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { ServerInfo } from "@/components/ServerCard";
import { Play, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Index = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const serverIP = "NossoMundoNoMinecraf.aternos.me";

  const copyServerIP = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);
      toast({
        title: "IP Copiado!",
        description:
          "O IP do servidor foi copiado para sua área de transferência.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description:
          "Não foi possível copiar o IP. Tente selecioná-lo manualmente.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      {/* 🔶 NOVO HERO COMPONENT (Topo visual com imagem e botão "Saiba mais") */}
      <Hero />

      {/* 🎮 CONEXÃO / CHAMADA À AÇÃO */}
      <section className="relative py-24 bg-card/40 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Título */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Conecte-se Agora Mesmo!
            </h2>

            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-pulse-slow">
              Vanilla • Fabric 1.16.5 • Até 20 Jogadores • 24/7 Online
            </p>

            {/* IP do servidor */}
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 mb-8 border border-border shadow-glow-primary">
              <p className="text-lg text-muted-foreground mb-4">
                IP do Servidor:
              </p>
              <div className="flex items-center justify-center space-x-4 flex-wrap">
                <code className="text-2xl md:text-3xl font-mono bg-muted px-4 py-2 rounded text-primary">
                  {serverIP}
                </code>
                <Button
                  onClick={copyServerIP}
                  variant="outline"
                  size="lg"
                  className="flex items-center space-x-2"
                >
                  {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
                  <span>{copied ? "Copiado!" : "Copiar IP"}</span>
                </Button>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/connect">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow-primary text-lg px-8 py-4"
                >
                  <Play className="mr-2" size={20} />
                  Começar a Jogar
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 hover:shadow-glow-secondary"
                >
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 INFO DO SERVIDOR */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Por que escolher nosso servidor?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos a melhor experiência Minecraft com performance
              otimizada e comunidade acolhedora.
            </p>
          </div>

          <ServerInfo />
        </div>
      </section>

      {/* 💎 FEATURES */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
              Características do Servidor
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-card/40 rounded-lg border border-border hover:shadow-glow-primary transition-all">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Play className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vanilla Experience</h3>
              <p className="text-muted-foreground">
                Experiência Minecraft pura com Fabric 1.16.5, sem modificações
                que alterem o gameplay.
              </p>
            </div>

            <div className="text-center p-6 bg-card/40 rounded-lg border border-border hover:shadow-glow-secondary transition-all">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="text-secondary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alta Performance</h3>
              <p className="text-muted-foreground">
                Servidor otimizado para garantir baixa latência e gameplay
                fluido para todos os jogadores.
              </p>
            </div>

            <div className="text-center p-6 bg-card/40 rounded-lg border border-border hover:shadow-glow-gold transition-all">
              <div className="w-16 h-16 bg-gradient-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <Copy className="text-gold-foreground" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunidade Ativa</h3>
              <p className="text-muted-foreground">
                Até 20 jogadores simultâneos em um ambiente amigável e acolhedor
                para todos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
